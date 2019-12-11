using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FotoPortfolioBackend.Model
{
    public class Foto
    {
        
        public int Id { get; set; }
        public byte[] Image { get; set; }
        public string Category { get; set; }
    }
}
