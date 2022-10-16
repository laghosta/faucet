using Faucets.Application.Dto;
using Faucets.Application.Services;
using Faucets.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Faucets.WebApi.Controllers;

[ApiController]
public class FaucetsController
{
    private readonly FaucetsService _service;

    public FaucetsController(FaucetsService service)
    {
        _service = service;
    }
    
    [HttpGet("/faucets")]
    public async Task<List<Faucet>> GetAllFaucets()
    {
        return await _service.GetAll();
    }
    
    [HttpGet("/faucets/{id:int}")]
    public async Task<Faucet> GetFaucetById(int id)
    {
        return await _service.GetById(id);
    }
    
    [HttpPost("/faucets")]
    public async Task<int> CreateFaucet(FaucetDto faucetDto)
    {
        return await _service.Create(faucetDto);
    }
    
    [HttpPost("/faucets/{id:int}")]
    public async Task<int> EditFaucet(int id, FaucetDto faucetDto)
    {
        return await _service.Edit(id, faucetDto);
    }

    [HttpDelete("/faucets/{id:int}")]
    public async Task DeleteFaucet(int id)
    {
        await _service.Delete(id);
    }
}