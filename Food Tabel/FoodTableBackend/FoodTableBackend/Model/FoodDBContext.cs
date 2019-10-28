using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodTable.Model
{
    public class FoodDBContext
    {
        public string ConnectionString { get; }

        public FoodDBContext(string connStr)
        {
            ConnectionString = connStr;
        }
    }
}
