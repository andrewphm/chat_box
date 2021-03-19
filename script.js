
//array of responses
const responses = [
  "Sorry man.. I really can't talk... I need to code", "Sorry unless you can help me figure out how to finish this assignment, I need to go.", "I have a good idea, let's do some pair programming!", "must...finish...coding...", "Sure does look nice out..."
]



//event handler that calls two functions when the send button is clicked
$("#click-button").on("click", function(e){

  myResponse();
  setTimeout(computerResponse,2000);

});


//Dynamically makes elements for your response. Can definitely be improved for readability
const myResponse = function(){

  let dt = new Date();
  let time = dt.getHours() + ":" + dt.getMinutes();

  $("ul").append(
    $("<li>")
      .addClass("clearfix")
        .append(
          $("<div>")
            .addClass("message other-message float-right")
            .text($("#message-to-send").val())
          )
        .append(
          $("<div>")
            .addClass("message-data align-right")
            .append(
              $("<span>")
                .addClass("message-data-time")
                .text(time + ", Today")
            )      
        )        
  );
    //scrolls to the bottom after adding elements
  $(".chat-history").scrollTop($(".chat-history")[0].scrollHeight);

}

//Dynamically makes elements for computer response. Can definitely be improved for readability
const computerResponse = function() {
  let dt = new Date();
  let time = dt.getHours() + ":" + dt.getMinutes();
  var reply = responses[Math.floor(Math.random() * responses.length)];

  $("ul").append(
    $("<li>")
        .append(
          $("<div>")
            .addClass("message my-message")
            .text(reply)
          )
        .append(
          $("<div>")
            .addClass("message-data")
            .append(
              $("<span>")
              .addClass("message-data-name")
              .text(" Andrew")
                )
            .append(
              $("<span>")
                .addClass("message-data-time")
                .text(time + ", Today")
              )      
        
          )            
  )
  //scrolls to the bottom after adding elements
  $(".chat-history").scrollTop($(".chat-history")[0].scrollHeight);

}