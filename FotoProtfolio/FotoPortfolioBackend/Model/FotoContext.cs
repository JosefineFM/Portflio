using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FotoPortfolioBackend.Model
{
    public class FotoContext : DbContext
    {
        public string ConnectionString { get; }

        public FotoContext(string connStr)
        {
            ConnectionString = connStr;
        }
    }
}
