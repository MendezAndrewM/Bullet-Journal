 
$(document).ready(function () {

    const taskContainer = $(".task-container");
    const btnContainer = $(".btn-container")
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
       initializeButtons();
        
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
        buttonTest();
        
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
      const task = {
        user_code: $("#user-name").val().trim(),
        tasks: $("#user-task").val().trim(),
        task_frequency: $("#user-frequency").val().trim(),
        complete: false
      }
      if(!task.user_code || !task.tasks || !task.task_frequency){
        alert("PLease fill out entire form")
      }
      else{
        alert("New task added!")
      console.log(task)
      $.post("/api/tasks", task);
      $("#user-name").val("");
      $("#user-task").val("");
      $("#user-frequency").val("");
    }
  };
  
    function initializeTaskRows() {
      taskContainer.empty();
      const rowsToAdd = [];      
      for (let i = 0; i < tasks.length; i++){
        // console.log(tasks[i])
        rowsToAdd.push(createNewTaskRow(tasks[i]));       
      }      
      taskContainer.prepend(rowsToAdd)      
    }
    function initializeButtons(){
      btnContainer.empty();
      const button = [];
      
      for (let i = 0; i < tasks.length; i++){
        console.log(tasks[i].user_code)
        button.push(buttonTest(tasks[i]));       
      }     
      console.log(button)
      btnContainer.append(button)
  }

    // function buttonTest(task){      
    //   `<button class='complete btn btn-primary'>${task.user_code}</button>` 

    // }
    
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
  
  
  
  
  