using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CheckProxy.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CheckProxy.Pages
{
    public class CheckPortModel : PageModel
    {
        private ICore _core;

        private string _ip;
        private List<int> _ports;

        [BindProperty]
        public string IP { get; set; }
        [BindProperty]
        public string Ports { get; set; }

        public CheckPortModel(ICore core) => _core = core;

        public void OnGetAsync()
        {

        }

        public void OnPostAsync()
        {
            
        }
    }
}
