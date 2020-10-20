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

        [BindProperty]
        public string IP { get; set; }
        [BindProperty]
        public List<string> Ports { get; set; }

        public List<string> OpenPorts { get; set; }

        public CheckPortModel(ICore core) => _core = core;
        public void OnGetAsync()
        {
            OpenPorts = new List<string>();
        }
        public void OnPostAsync()
        {
            //TODO: Process ports on the core.
            OpenPorts = Ports;
        }
    }
}
