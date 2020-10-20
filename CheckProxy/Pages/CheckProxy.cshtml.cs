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

        public CheckProxyModel(ICore core) => _core = core;
        public void OnGetAsync()
        {

        }

        public void OnPostAsync()
        {
            _proxys = Proxys.Split('\n').Select(x => x.Split(' ')).ToList();

        }
    }
}
