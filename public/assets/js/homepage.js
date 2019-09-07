
$(document).ready(function () {

  //////////  Event Handlers  /////////////////////////////////////////////////

  $(document).on("click", "button.delete", deleteGoal);
  $("#submit-goalbtn").on("click", insertNewGoal);
  $(document).on("click", "button.complete", markComplete)


  //////////  Global Variables  ///////////////////////////////////////////////
  const goalsContainer = $(".goals-container");
  let goals;


  //////////  Create Buttons  /////////////////////////////////////////////////

  function initializeGoalRows() {
    goalsContainer.empty();
    const rowsToAdd = [];
    
    for (let i = 0; i < goals.length; i++) {
      rowsToAdd.push(createNewGoalRow(goals[i]));
      
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


  // `<button class='complete btn btn-primary'>${goal.user_code}</button>`

  ////////// CRUD Functions ///////////////////////////////////////////////////

  function getGoals() {
    $.get("/api/goals", function (data) {
      goals = data;
      //console.log(goals)
      initializeGoalRows();
    })
  }

  function insertNewGoal(event) {
    event.preventDefault();    
    const goal = {
      user_code: $("#user-goal-name").val().trim(),
      goal_name: $("#user-goal").val().trim(),
      complete: false
    }
    //console.log(goal)
    if (!goal.user_code || !goal.goal_name) {
      alert("Please fill out entire form")
    }
    else {
      alert("New goal added!")
      //console.log(goal)
      $.post("/api/goals", goal);
      $("#user-goal-name").val("");
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

  ////rotating quotes////
  function initQuoteCarousel() {

    var $quotesWrapper = $(".cust-quotes");
    var $quotes = $quotesWrapper.find("blockquote");

    if (!$quotes.length) {
        return;
    }

    var selectNextQuote = function () {
        // keep move first quote in dom to the end to make continous
        var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);

        setTimeout(selectNextQuote, $quote.data("timeout"));
    };
  }
    // initQuoteCarousel();

    // *************rotating $quotes

    
    function initQuoteCarousel() {
      var $quotesWrapper = $(".cust-quotes");
      var $quotes = $quotesWrapper.find("blockquote");
      if (!$quotes.length) {
          return;
      }
      var selectNextQuote = function () {
          // keep move first quote in dom to the end to make continous
          var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);
          setTimeout(selectNextQuote, $quote.data("timeout"));
      };
      setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));
    }
    $(function () {
      initQuoteCarousel();
    });



    // *************adding the JS for the graph
    var xValue = ['Completed', 'Not Completed'];

var yValue = [20, 14, 23];
var yValue2 = [24, 16, 20];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue,
  textposition: 'auto',
  hoverinfo: 'none',
  opacity: 0.5,
  marker: {
    color: 'rgb(158,202,225)',
    line: {
      color: 'rbg(8,48,107)',
      width: 1.5
    }
  }
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rbg(8,48,107)',
      width: 1.5
    }
  }
};

var data = [trace1,trace2];

var layout = {
  title: 'Task and Goal Tracker',
  barmode: 'stack'
};

Plotly.newPlot('myDiv', data, layout, {showSendToCloud:true});
  

});
