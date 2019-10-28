using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FoodTable.Model;
using FoodTableBackend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoodTableBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodInfoController : ControllerBase
    {
        private readonly FoodDBContext _dbContext;
        public FoodInfoController(FoodDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        // GET: api/Food
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/Food/5
        [HttpGet("{FoodId}")]
        public IEnumerable<FoodInfo> Get(string FoodId)
        {
            var conn = new SqlConnection(_dbContext.ConnectionString);

            var sql = "SELECT TheNorwegianFoodTable.FoodID, TheNorwegianFoodTable.Food_Item, FoodCategory " +
                        "FROM TheNorwegianFoodTable " +
                        "INNER JOIN TheNorwegianFoodTableCategory " +
                        "ON TheNorwegianFoodTable.FoodCategory = TheNorwegianFoodTableCategory.FoodId " +
                        "WHERE TheNorwegianFoodTableCategory.FoodId  = @FoodId";

            return conn.Query<FoodInfo>(sql, new { FoodId = FoodId });
            ;
        }

        //// POST: api/Food
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/Food/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
