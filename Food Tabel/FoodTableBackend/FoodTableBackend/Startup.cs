
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using FoodTableBackend.Model;
using FoodTable.Model;

namespace FoodTableBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(Options =>
            {
                Options.AddPolicy("VueCorsPolicy", build =>
                {
                    build.AllowAnyHeader()
                     .AllowAnyMethod()
                     .AllowCredentials()
                     .WithOrigins("http://localhost:8080");
                });

            });


            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            var connStr = Configuration.GetConnectionString("FoodDatabase");
            var foodDbContext = new FoodDBContext(connStr);
            services.AddSingleton(foodDbContext);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors("VueCorsPolicy");
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
