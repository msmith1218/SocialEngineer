using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EntityFinder.Controllers
{
    public class SpecialController : Controller
    {
        public String GetApiKey()
        {
            var model = new EntityFinder.Models.Special();
            return model.ApiKey();
        }



    }
}