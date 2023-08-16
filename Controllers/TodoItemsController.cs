using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using my_new_app.Models;
using my_new_app.Data;


namespace my_new_app.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TodoItemsController : ControllerBase
    {
        //private readonly alex_table_db _context;
        private readonly HephaestusDbContext _context;

        //public TodoItemsController(alex_table_db context)
        public TodoItemsController(HephaestusDbContext context)
        {
            _context = context;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<alex_table>>> GetTodoItems()
        {
            return await _context.alex_table.ToListAsync();
        }

    }
}
