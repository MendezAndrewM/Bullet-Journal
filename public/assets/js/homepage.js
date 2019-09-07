
$(document).ready(function () {
  
  //////////  Global Variables  ///////////////////////////////////////////////
  const goalsContainer = $(".goals-container");
  let goals;

  
  //////////  Event Handlers  /////////////////////////////////////////////////
  $(document).on("click", "button.delete", deleteGoal);
  $("#submit-btn").on("click", insertNewGoal);
  $(document).on("click", "button.complete", markComplete)


  //////////  Display Goals  //////////////////////////////////////////////////
  function initializeGoalRows() {
    goalsContainer.empty();
    const rowsToAdd = [];
    const button = [];
    for (let i = 0; i < goals.length; i++) {
      rowsToAdd.push(createNewGoalRow(goals[i]));
      button.push(buttonTest(goals[i]))
    }
    goalsContainer.prepend(rowsToAdd)
  }

  function createNewGoalRow(goal) {
    const newGoalRow = $([
      "<p>",
      "User: ",
      goal.user_code,
      "</p>",
      "<span>",
      "Goal: ",
      goal.goal_name,
      "</span>",
      `<button class='complete btn btn-primary' id = '${goal.id}'>✓</button>`,
      `<button class='delete btn btn-danger'id = ${goal.id}>x</button>`,
    ].join("")
    );
    if (goals.complete) {
      newGoalRow.find("span").css("text-decoration", "line-through")
    }
    return newGoalRow
  }

  function buttonTest(goal) {
    `<button class='complete btn btn-primary'>${goal.user_code}</button>`
  }


  ////////// CRUD Functions ///////////////////////////////////////////////////

  function getGoals() {
    $.get("/api/goals", function (data) {
      goals = data;
      console.log(goals)
      initializeGoalRows();
    })
  }

  function insertNewGoal(event) {
    event.preventDefault();
    const goal = {
      user_code: $("#user-name").val().trim(),
      goal_name: $("#user-goal").val().trim(),
      complete: false
    }
    if (!goal.user_code || !goal.goal_name) {
      alert("PLease fill out entire form")
    }
    else {
      alert("New goal added!")
      console.log(goal)
      $.post("/api/goals", goal);
      $("#user-name").val("");
      $("#user-goal").val("");
    }
  };

  function markComplete(event) {
    event.stopPropagation();
    id = $(this).attr("id")
    $.ajax({
      method: "PUT",
      url: `/api/goals/${id}`,
      data: { id: id, complete: true }
    }).then(getGoals)
  }

  function deleteGoal(event) {
    event.stopPropagation();
    id = $(this).attr("id")
    console.log(id)
    $.ajax({
      method: "DELETE",
      url: "/api/goals/" + id
    }).then(getGoals)
  }

  ////////// Initiate goals and carousel  ////////////////////////////////////
  $('.carousel').carousel();
  $('select').formSelect();
  getGoals();

});