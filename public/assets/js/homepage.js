
  // Or with jQuery
  $(document).ready(function(){
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
    $("#submit-btn").on("click", insertNewTask);
    
    function insertNewTask(event){
      event.preventDefault();
      const task ={
        user_code: $("#user-name").val().trim(),
        tasks:  $("#user-task").val().trim(),
        task_frequency: $("#user-frequency").val().trim(),
        complete: false
      }
      $.post("/", task);
      $("#user-name").val("");
      $("#user-task").val("");
      $("#user-frequency").val("");
    
    }
     
    
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

// QUOTE CAROUSEL
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
  
});