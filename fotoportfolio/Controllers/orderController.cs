using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using fotoportfolio.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dapper;

namespace fotoportfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class orderController : ControllerBase
    {
        private FotoDbContext _dbContext;

        public orderController(FotoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // POST: api/order
        [HttpPost]
        public void Post([FromBody] string value)
        {
            var conn = new SqlConnection(_dbContext.ConnectionString);

            var sql = $"INSERT INTO [dbo].[order]([name],[email],[message],[price],[date]) VALUES ('Josefine','josefine.magnussen@hotmail.com','Hei','baby','2019-05-10')";
        }
    }
}
