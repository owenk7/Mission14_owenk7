using System.Collections.Generic;
using System.Linq;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly MovieDbContext _context;

        public MoviesController(MovieDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Movie>> GetEditedMovies()
        {
                    var movies = _context.Movies
            .Where(m => m.Edited)
            .OrderBy(m => m.Title)
            .ToList();


            return movies;
        }
    }
}
