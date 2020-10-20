using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CheckProxy.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CheckProxy.Pages
{
    public class CheckProxyModel : PageModel
    {
        private ICore _core;
        private List<string[]> _proxys;

        [BindProperty]
        public string Proxys { get; set; }

        public List<string> ValidProxy { get; set; }

        public CheckProxyModel(ICore core) => _core = core;
        public void OnGetAsync()
        {
            ValidProxy = new List<string>();
        }

        public void OnPostAsync()
        {
            _proxys = Proxys.Split('\n').Select(x => x.Split(' ')).ToList();
            //TODO: Process proxy on the core.
            ValidProxy = _proxys.Select(x => x[0]).ToList();
        }
    }
}
