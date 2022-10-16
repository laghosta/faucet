namespace Faucets.Application.Exceptions;

public class FaucetNotFoundException : Exception
{
    public FaucetNotFoundException(string message) : base(message) { }
}