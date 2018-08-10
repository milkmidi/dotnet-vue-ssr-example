using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnet_example.Models;
using VueDotnetSSR.Models;
namespace dotnet_example.Controllers {

  [Route("api/[controller]")]
  public class ValueController : Controller {

    [HttpGet]
    public JsonResult getAll() {
      
      var initialMessages = FakeMessageStore.FakeMessages.OrderByDescending(m => m.Date).Take(2);

      var initialValues = new ClientState() {
        Messages = FakeMessageStore.FakeMessages,
        LastFetchedMessageDate = initialMessages.Last().Date
      };

      return Json(initialValues);
    }

  

  }
}