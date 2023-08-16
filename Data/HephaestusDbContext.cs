using my_new_app.Models;
using Microsoft.EntityFrameworkCore;

namespace my_new_app.Data
{
    public class HephaestusDbContext : DbContext
    {
        public HephaestusDbContext(DbContextOptions<HephaestusDbContext> options) : base(options)
        { }

        public DbSet<Vessel> Vessels { get; set; }
        //public DbSet<TodoItem> TodoItems => Set<TodoItem>();
        public DbSet<alex_table> alex_table { get; set; } = null!;
    }
}