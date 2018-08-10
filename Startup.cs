﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
namespace dotnet_example {
  public class Startup {
    public Startup(IHostingEnvironment env) {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();
      Configuration = builder.Build();
    }

    public Startup(IConfiguration configuration) {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services) {
      services.AddMvc();

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
      Console.Write("Press any key to continue...");
      if (env.IsDevelopment()) {
        app.UseDeveloperExceptionPage();
        app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
          HotModuleReplacement = true
        });
      } else {
        app.UseExceptionHandler("/Home/Error");
      }

      app.UseStaticFiles();

      app.UseMvc(routes => {
        routes.MapRoute(
            name: "default",
            template: "{controller=Home}/{action=Index}/{id?}");

        routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
      });
    }
  }
}