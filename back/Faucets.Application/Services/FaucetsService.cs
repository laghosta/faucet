using Faucets.Application.Dto;
using Faucets.Application.Exceptions;
using Faucets.Domain;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace Faucets.Application.Services;

public class FaucetsService
{
    private readonly FaucetsDbContext _dbContext;

    public FaucetsService(FaucetsDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Faucet>> GetAll()
    {
        return await _dbContext.Faucets.AsNoTracking().ToListAsync();
    }
    
    public async Task<Faucet> GetById(int id)
    {
        var faucet = await _dbContext.Faucets.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

        if (faucet is null)
        {
            throw new FaucetNotFoundException($"Faucet with id '{id}' was not found.");
        }

        return faucet;
    }
    
    public async Task<int> Create(FaucetDto faucetDto)
    {
        var faucet = faucetDto.Adapt<Faucet>();
        _dbContext.Faucets.Add(faucet);
        await _dbContext.SaveChangesAsync();
        
        return faucet.Id;
    }
    
    public async Task<int> Edit(int id, FaucetDto editedFaucet)
    {
        var faucet = await _dbContext.Faucets.FirstOrDefaultAsync(x => x.Id == id);

        if (faucet is null)
        {
            throw new FaucetNotFoundException($"Faucet with id '{id}' was not found.");
        }
        
        faucet.Name = editedFaucet.Name;
        faucet.Timer = editedFaucet.Timer;
        faucet.Rate = editedFaucet.Rate;
        faucet.Url = editedFaucet.Url;
        faucet.Reward = editedFaucet.Reward;
        faucet.Category = editedFaucet.Category;
        await _dbContext.SaveChangesAsync();
        
        return id;
    }

    public async Task Delete(int id)
    {
        var faucet = await _dbContext.Faucets.FirstOrDefaultAsync(x => x.Id == id);

        if (faucet is null)
        {
            throw new FaucetNotFoundException($"Faucet with id '{id}' was not found.");
        }

        _dbContext.Faucets.Remove(faucet);
        await _dbContext.SaveChangesAsync();
    }
}