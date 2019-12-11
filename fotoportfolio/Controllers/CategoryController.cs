using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using fotoportfolio.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fotoportfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private FotoDbContext _dbContext;

        public CategoryController(FotoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/Category
        [HttpGet("{category}", Name = "GetFotoCategory")]
        public IEnumerable<Image> GetFoto(string category)
        {
            var conn = new SqlConnection(_dbContext.ConnectionString);
            var sql = $"select id, 0, category from  foto where category = @category";
            var param = new { category = category };
            return conn.Query<Image>(sql, param);
        }

    }
}