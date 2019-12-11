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
    public class ImageController : ControllerBase
    {
        private FotoContext _dbContext;

        public ImageController(FotoContext dbContext) 
        {
            _dbContext = dbContext;
        }
        // GET: api/Image/7
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var conn = new SqlConnection(_dbContext.ConnectionString);
            var sql = "select Id, Image, Category from Fotos where Id = @id";
            var param = new { id = id };
            var images = conn.Query<Foto>(sql, param);
            var image = images.FirstOrDefault();
            if (image == null)
            {
                return null;
            }
            //Byte[] b = System.IO.File.ReadAllBytes(@"C:\Users\josef\Downloads\katt.jpg");   // You can use your own method over here.         
            return File(image.Image, "image/jpeg");
        }
    }
}
