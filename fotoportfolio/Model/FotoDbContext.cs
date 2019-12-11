using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fotoportfolio.Model
{
    public class FotoDbContext
    {
        public string ConnectionString { get; }

        public FotoDbContext(string connStr)
        {
            ConnectionString = connStr;
        }
    }
}
