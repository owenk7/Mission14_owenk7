using Microsoft.AspNetCore.Mvc;
using movieAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        [HttpGet]
        public IEnumerable<MovieData> Get()
        {
            return context.Movies.ToArray();
        }
    }
}