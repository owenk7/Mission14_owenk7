using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class MovieDbContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=JoelHiltonMovieCollection.sqlite");
        }
    }
}
