using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace EntityFinder
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Company",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Company", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Phone",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Phone", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Email",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Email", id = UrlParameter.Optional }
            );


        }
    }
}
