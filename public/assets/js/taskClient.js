 
$(document).ready(function () {

    const taskContainer = $(".task-container");
    let tasks;
  
  
    $(document).on("click", "button.delete", deleteTask);
    // $(document).on("click", "button.complete", toggleComplete);
  
  console.log("hello")
  if(document.location.pathname === '/tasks'){
    function getTasks() {
      $.get("/api/tasks", function (data) {
        tasks = data;      
        console.log(tasks)
        initializeTaskRows();        
      })
    } 
    getTasks(); 
  }
  else if (document.location.pathname === '/daily'){
    function getDailyTasks() {
      $.get("/api/daily", function (data) {        
        tasks = data;      
        console.log(tasks)
        initializeTaskRows();
        
      })
    }
    getDailyTasks();
  }
  else if (document.location.pathname === '/weekly'){
    function getWeeklyTasks() {
      $.get("/api/weekly", function (data) {        
        tasks = data;      
        console.log(tasks)
        initializeTaskRows();
        
      })
    }
    getWeeklyTasks();
  }
  else if (document.location.pathname === '/monthly'){
    function getMonthlyTasks() {
      $.get("/api/monthly", function (data) {        
        tasks = data;      
        console.log(tasks)
        initializeTaskRows();
        
      })
    }
    getMonthlyTasks();
  }
  
  
  
    $("#submit-btn").on("click", insertNewTask);
  
  
    function insertNewTask(event) {
      event.preventDefault();
    //   alert("zeb sucks")
      const task = {
        user_code: $("#user-name").val().trim(),
        tasks: $("#user-task").val().trim(),
        task_frequency: $("#user-frequency").val().trim(),
        complete: false
      }
      console.log(task)
      $.post("/api/tasks", task);
      $("#user-name").val("");
      $("#user-task").val("");
      $("#user-frequency").val("");
    };
  
    function initializeTaskRows() {
      taskContainer.empty();
      const rowsToAdd = [];
      const button = [];
      for (let i = 0; i < tasks.length; i++){
        rowsToAdd.push(createNewTaskRow(tasks[i]));
        button.push(buttonTest(tasks[i]))
      }
      taskContainer.prepend(rowsToAdd)
  
    }
    function buttonTest(task){
    }
    
    function createNewTaskRow(task){
      const newTaskRow = $([
        "<p>",
        "User: ",
        task.user_code,
        "</p>",
        "<span>",
        "Task: ",
        task.tasks,
        "</span>",
        `<button class='complete btn btn-primary'>✓</button>`,
        `<button class='delete btn btn-danger'id = ${task.id}>x</button>`,
        `<button class='complete btn btn-primary'>${task.user_code}</button>`
        
  
  
      ].join("")
  );
  if (tasks.complete){
    newTaskRow.find("span").css("text-decoration", "line-through")
  }
  return newTaskRow
    }
    // getTasks();
    // getDailyTasks();
  
  
    function deleteTask(event){
      event.stopPropagation();
      id = $(this).attr("id")
      console.log(id)
      $.ajax({
        method: "DELETE",
        url: "/api/tasks/" + id
      }).then(getTasks)
  
  
    }
   
  
  
  
  
  
  
  
  
  //   /////////////////carousel//////////////////
  
  
    $('.carousel').carousel();
  
  
  
  
  
  });
  
  
  
  
  