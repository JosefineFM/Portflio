using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FotoPortfolioBackend.Model
{
    public class natureImage
    {
        public int id { get; set; }
        public string name { get; set; }
        public byte[]  img { get; set; }
        public string season { get; set; }
        public string locationCountry { get; set; }
        public string locationTown { get; set; }
    }
}
