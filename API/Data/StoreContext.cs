using API.entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
// A DbContext instance represents a session with the database and can be used to query and save instances of your entities. DbContext is a combination of the Unit Of Work and Repository patterns.
    
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

// Dbset represents a table
        public DbSet<Product> Products { get; set; }
    }
}