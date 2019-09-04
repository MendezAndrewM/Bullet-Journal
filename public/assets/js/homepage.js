

// Or with jQuery
$(document).ready(function () {

  const taskContainer = $(".task-container");
  // let newTaskUser;
  // let newTask;
  // let newTaskFreq ;


  // $("#submit-btn").on("click", function(){
  //   alert("zeb you suck")
  //    newTaskUser = $("#user-name").val();
  //    console.log(newTaskUser)
  //    newTask = $("#user-task").val();
  // console.log(newTask)
  //   newTaskFreq = $("#user-frequency").val();
  //   console.log(newTaskFreq)
  // });
  let tasks = []
  function getTasks() {
    $.get("/api/tasks", function (data) {
      tasks = data;
      console.log(tasks)
      initializeTaskRows();
    })
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
    $.post("/", task);
    $("#user-name").val("");
    $("#user-task").val("");
    $("#user-frequency").val("");
  };

  function initializeTaskRows() {
    taskContainer.empty();
    const rowsToAdd = [];
    for (let i = 0; i < tasks.length; i++){
      rowsToAdd.push(createNewTaskRow(tasks[i]));
    }
    taskContainer.prepend(rowsToAdd)

  }

  function createNewTaskRow(task){
    const newTaskRow = $([
      "<span>",
      task.user_code,
      task.tasks,
      "<span>"


    ].join("")
);
if (tasks.complete){
  newTaskRow.find("span").css("text-decoration", "line-through")
}
return newTaskRow
  }
  getTasks();








  //   let userName = $("#user-name");
  //   let userTask = $("#user-task");
  //   let userFrequency = $("#user-frequency")





  //   const url = window.location.search;
  //   let taskId;
  //   if (url.indexOf("?task_id=") !== -1) {
  //     taskId = url.split("=")[1];
  //     getTasks(taskId);
  //   }
  //   // If there's no authorId we just get all posts as usual
  //   else {
  //     getTasks();
  //   }

  //   function getTasks(task) {
  //     taskId = task || "";
  //     if (taskId) {
  //       taskId = "/?task_id=" + taskId;
  //     }
  //     $.get("/" + taskId, function(data) {
  //       console.log("Tasks", data);
  //       tasks = data;
  //       if (!tasks || !tasks.length) {
  //         displayEmpty(task);
  //       }
  //       else {
  //         initializeRows();
  //       }
  //     });
  //   }
  //   function initializeRows() {
  //     blogContainer.empty();
  //     var postsToAdd = [];
  //     for (var i = 0; i < posts.length; i++) {
  //       postsToAdd.push(createNewRow(posts[i]));
  //     }
  //     blogContainer.append(postsToAdd);
  //   }


  /////////////////carousel//////////////////


  $('.carousel').carousel();





});