 
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
    // alert("zeb sucks")
    const goal = {
      user_code: $("#user-name").val().trim(),
      goal_name: $("#user-goal").val().trim(),
      // task_frequency: $("#user-frequency").val().trim(),
      complete: false
    }
    if(!goal.user_code || !goal.goal_name){
      alert("PLease fill out entire form")
    }
    else{
      alert("New goal added!")
    console.log(goal)
    $.post("/api/goals", goal);
    $("#user-name").val("");
    $("#user-goal").val("");
    // $("#user-frequency").val("");
  }
};

  function initializeGoalRows() {
    goalsContainer.empty();
    const rowsToAdd = [];
    const button = [];
    for (let i = 0; i < goals.length; i++){
      rowsToAdd.push(createNewGoalRow(goals[i]));
      button.push(buttonTest(goals[i]))
    }
    goalsContainer.prepend(rowsToAdd)

  }
  function buttonTest(goal){
    `<button class='complete btn btn-primary'>${goal.user_code}</button>`
  }

  function createNewGoalRow(goal){
    const newGoalRow = $([
      "<p>",
      "User: ",
      goal.user_code,
      "</p>",
      "<span>",
      "Goal: ",
      goal.goal_name,
      "</span>",
      `<button class='complete btn btn-primary'>✓</button>`,
      `<button class='delete btn btn-danger'id = ${goal.id}>x</button>`,
      


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
      url: "/api/goals/" + id
    }).then(getGoals)


  }
 








//   /////////////////carousel//////////////////


  $('.carousel').carousel();
  $('select').formSelect();





});




