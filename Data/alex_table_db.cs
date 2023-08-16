using Microsoft.EntityFrameworkCore;
using my_new_app.Models;


namespace my_new_app.Data;

public class alex_table_db : DbContext
{
    public alex_table_db(DbContextOptions<alex_table_db> options)
        : base(options)
    {
    }

    public DbSet<alex_table> alex_table { get; set; } = null!;
}
