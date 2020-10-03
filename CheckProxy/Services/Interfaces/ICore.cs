using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CheckProxy.Services.Interfaces
{
    public interface ICore
    {
        string[] CheckProxys(IEnumerable<string> proxys);
        string[] CheckPorts(string ip, IEnumerable<string> ports);
    }
}
