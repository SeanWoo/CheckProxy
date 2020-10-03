using CheckProxy.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CheckProxy.Services
{
    public class Engine : ICore
    {
        public string[] CheckPorts(string ip, IEnumerable<string> ports)
        {
            throw new NotImplementedException();
        }

        public string[] CheckProxys(IEnumerable<string> proxys)
        {
            throw new NotImplementedException();
        }
    }
}
