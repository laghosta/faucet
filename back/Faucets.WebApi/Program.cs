using Faucets.Application;
using Faucets.Application.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FaucetsDbContext>(options =>
{
    options.UseSqlite("Data Source=faucets.db");
});
builder.Services.AddScoped<FaucetsService>();

var app = builder.Build();

app.UseCors(configurePolicy =>
{
    configurePolicy.AllowAnyHeader();
    configurePolicy.AllowAnyMethod();
    configurePolicy.AllowAnyOrigin();
});
app.MapControllers();
app.UseSwagger();
app.UseSwaggerUI();

app.Run();