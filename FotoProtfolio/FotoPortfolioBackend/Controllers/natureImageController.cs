using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FotoPortfolioBackend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace FotoPortfolioBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class natureImageController : ControllerBase
    {

        private readonly FotoContext _dbContext;

        public natureImageController(FotoContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/natureImage
        [HttpGet]
        public IEnumerable<natureImage> GetFoto(string category)
   
        {
           var conn = new SqlConnection(_dbContext.ConnectionString);
           var sql = $"Select id, name, img, season, locationCountry, locationTown from natureImage";
            //var images = conn.Query<natureImage>(sql);
           //var image = images.FirstOrDefault();

            return conn.Query<natureImage>(sql);
            //if (image == null)
            // {
            //     return null;
            // }

            // return File(image.img, "image/jpeg");
        }

        //// GET: api/natureImage/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult GetById(int id)
        {
            var conn = new SqlConnection(_dbContext.ConnectionString);
            var sql = $"Select id, name, img, season, locationCountry, locationTown from natureImage where id = @id";
            var param = new { id = id };
            var images = conn.Query<natureImage>(sql, param);
            var image = images.FirstOrDefault();
            if (image == null)
            {
                return null;
            }

            return File(image.img, "image/jpeg");
        }

        // POST: api/natureImage
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/natureImage/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
