 
$(document).ready(function () {

  const goalsContainer = $(".goals-container");
  let goals;


  $(document).on("click", "button.delete", deleteGoal);
  // $(document).on("click", "button.complete", toggleComplete);

console.log("hello")

  function getGoals() {
    $.get("/api/goals", function (data) {
      goals = data;      
      console.log(goals)
      initializeGoalRows();
    })
  }



  $("#submit-btn").on("click", insertNewGoal);


  function insertNewGoal(event) {
    event.preventDefault();
    alert("zeb sucks")
    const goal = {
      user_code: $("#user-name").val().trim(),
      goal_name: $("#user-goal").val().trim(),
      // task_frequency: $("#user-frequency").val().trim(),
      complete: false
    }
    console.log(goal)
    $.post("/api/goals", goal);
    $("#user-name").val("");
    $("#user-goal").val("");
    // $("#user-frequency").val("");
  };

  function initializeGoalRows() {
    goalsContainer.empty();
    const rowsToAdd = [];
    for (let i = 0; i < goals.length; i++){
      rowsToAdd.push(createNewGoalRow(goals[i]));
    }
    goalsContainer.prepend(rowsToAdd)

  }

  function createNewGoalRow(goal){
    const newGoalRow = $([
      "<p>",
      goal.user_code,
      "</p>",
      "<span>",
      goal.goal_name,
      "</span>",
      "<button class='complete btn btn-primary'>✓</button>",
      `<button class='delete btn btn-danger'id = ${goal.id}>x</button>`


    ].join("")
);
if (goals.complete){
  newGoalRow.find("span").css("text-decoration", "line-through")
}
return newGoalRow
  }
  getGoals();


  function deleteGoal(event){
    event.stopPropagation();
    id = $(this).attr("id")
    console.log(id)
    $.ajax({
      method: "DELETE",
      url: "/api/goals/" +id
    }).then(getGoals)


  }








//   /////////////////carousel//////////////////


  $('.carousel').carousel();





});





// // Or with jQuery
// $(document).ready(function () {

//   const taskContainer = $(".task-container");
//   $(document).on("click", "button.complete", toggleComplete);
//   $(document).on("click", "button.delete", deleteTask);

//   let tasks = []
//   function getTasks() {
//     $.get("/api/tasks", function (data) {
//       tasks = data;
//       console.log(tasks)
//       initializeTaskRows();
//     })
//   }

//   $("#submit-btn").on("click", insertNewTask);

//   function insertNewTask(event) {
//     event.preventDefault();
//     const task = {
//       user_code: $("#user-name").val().trim(),
//       tasks: $("#user-task").val().trim(),
//       task_frequency: $("#user-frequency").val().trim(),
//       complete: false
//     }
//     $.post("/api/tasks", task);
//     $("#user-name").val("");
//     $("#user-task").val("");
//     $("#user-frequency").val("");
//   };

//   function initializeTaskRows() {
//     taskContainer.empty();
//     const rowsToAdd = [];
//     for (let i = 0; i < tasks.length; i++) {
//       rowsToAdd.push(createNewTaskRow(tasks[i]));
//     }
//     taskContainer.prepend(rowsToAdd)
//   }

//   function createNewTaskRow(task) {
//     const newTaskRow = $([
//       "<p>",
//       task.user_code,
//       "</p>",
//       "<span>",
//       task.tasks,
//       "</span>",
//       "<button class='complete btn btn-primary'>✓</button>",
//       "<button class='delete btn btn-danger'>x</button>"
//     ].join("")
//     );

//     newTaskRow.find("button.delete").data("id", task.id);
//     if (task.complete) {
//       newTaskRow.find("span").css("text-decoration", "line-through")
//     }
//     return newTaskRow
//   }

//   function updateTask(task) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/tasks",
//       data: task
//     }).then(getTasks)
//   }

//   function toggleComplete(event) {
//     event.stopPropagation();
//     const task = $(this).parent().data();
//     console.log(task)
//     task.complete = !task.complete;
//     updateTask(task);
//   }

//   function deleteTask(event) {
//     event.stopPropagation();
//     const id = $(this).data("id");
//     $.ajax({
//       method: "DELETE",
//       url: "/api/tasks/" + id
//     }).then(getTasks);
//   }

//   getTasks();

//   $('.carousel').carousel();

// });