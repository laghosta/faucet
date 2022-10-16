using Faucets.Domain;

namespace Faucets.Application.Dto;

public class FaucetDto
{
    public string Name { get; set; } = null!;
    public string Timer { get; set; } = null!;
    public int Rate { get; set; }
    public string Url { get; set; } = null!;
    public string Reward { get; set; }
    public string Category { get; set; }
}