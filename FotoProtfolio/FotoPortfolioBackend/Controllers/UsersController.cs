using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace FotoPortfolioBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpPost]
        [Route("Login")]
        public JObject loginService([FromBody] JObject loginJson)
        {
            JObject retJson = new JObject();
            string username = loginJson["username"].ToString();
            string password = loginJson["password"].ToString();
            if (username == "admin" && password == "admin")
            {
                retJson.Add(new JProperty("authentication ", "successful"));
            }
            else
            {
                retJson.Add(new JProperty("authentication ", "unsuccessful"));
            }
            return retJson;
        }
    }
}