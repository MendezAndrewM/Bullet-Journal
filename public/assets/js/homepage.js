
  
$(document).ready(function () {

  const goalsContainer = $(".goals-container");


  $(document).on("click", "button.delete", deleteGoal);
  $(document).on("click", "button.complete", toggleComplete);

console.log("hello")

  let goals = []
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
      "<button class='delete btn btn-danger'>x</button>"


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
  }








//   /////////////////carousel//////////////////


  $('.carousel').carousel();





});