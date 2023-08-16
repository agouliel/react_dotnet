using my_new_app.Models;
using my_new_app.Data;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//builder.Services.Configure<HephaestusDatabaseSettings>(
    //builder.Configuration.GetSection("HephaestusDatabase"));

// SqlServer package v.7 was needed, even though .NET is v.6
// along with TrustServerCertificate=True in the connection string
builder.Services.AddDbContext<HephaestusDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Hephaestus")));

builder.Services.AddDbContext<alex_table_db>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnectionString")));

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

/*app.MapGet(
    "/api/vessels/{id}",
    async (HephaestusDbContext context, string id) => 
    await context.Vessels.FindAsync(id) is Vessel vessel ?
      Results.Ok(vessel) :
      Results.NotFound("Vessel not found ./")
);*/

app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

// THIS WORKS ON THE NORMAL URL, BUT NOT ON THE PROXY URL
// EVEN IF IT'S ADDED TO setupProxy.js
/*
app.MapGet(
    "/alex",
    async (alex_table_db context) => await context.alex_table.ToListAsync()
);
*/

app.Run();
