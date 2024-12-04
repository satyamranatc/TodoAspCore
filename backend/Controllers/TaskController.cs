namespace backend.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using backend.Models;

    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private List<Task> tasks = new List<Task>
        {
            new Task { Id = 1, Title = "Task 1", TaskDescription = "This is task 1", Level = 1 },
            new Task { Id = 2, Title = "Task 2", TaskDescription = "This is task 2", Level = 2 },
            new Task { Id = 3, Title = "Task 3", TaskDescription = "This is task 3", Level = 3 }
        };

        [HttpGet]
        public ActionResult<List<Task>> GetTasks()
        {
            return Ok(tasks); // Wrap the list in an Ok() response
        }

        [HttpPost]
        public ActionResult<Task> AddTask(Task task)
        {
            Console.Write(task);
            tasks.Add(task); // Add the new task to the list
            return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task); // Return a CreatedAtActionResult with the newly created task
        }
    }

    
}
