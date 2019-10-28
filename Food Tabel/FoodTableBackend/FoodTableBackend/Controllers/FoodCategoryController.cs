
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Dapper;
using FoodTableBackend.Model;
using System.Data.SqlClient;
using FoodTable.Model;


namespace FoodTableBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodCategoryController : ControllerBase
    {
        private readonly FoodDBContext _dbContext;


        public FoodCategoryController(FoodDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        // GET: api/FoodCategory
        [HttpGet]
        public IEnumerable<FoodCategoryModel> Get()
        {
            var conn = new SqlConnection(_dbContext.ConnectionString);
                      
            var sql = "SELECT FoodId,FoodItem FROM FoodTable.dbo.TheNorwegianFoodTableCategory";
            return conn.Query<FoodCategoryModel>(sql); 
        }

        // GET: api/FoodCategory/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/FoodCategory
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/FoodCategory/5
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
