using Faucets.Domain;
using Microsoft.EntityFrameworkCore;

namespace Faucets.Application;

public class FaucetsDbContext : DbContext
{
    public DbSet<Faucet> Faucets { get; set; } = null!;

    public FaucetsDbContext(DbContextOptions<FaucetsDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
}