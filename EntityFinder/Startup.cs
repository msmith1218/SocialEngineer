using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EntityFinder.Startup))]
namespace EntityFinder
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
