using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Dapper;
using fotoportfolio.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace fotoportfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private FotoDbContext _dbContext;

        public ImageController(FotoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/Image/7
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var conn = new SqlConnection(_dbContext.ConnectionString);
            var sql = "select id, img, category from foto where id = @id";
            var param = new { id = id };
            var images = conn.Query<Image>(sql, param);
            var image = images.FirstOrDefault();
            if (image == null)
            {
                return null;
            }
            //Byte[] b = System.IO.File.ReadAllBytes(@"C:\Users\josef\Downloads\katt.jpg");   // You can use your own method over here.         
            return File(image.Img, "image/jpeg");
        }
    }
}
