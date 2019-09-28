$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("user");
  
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#user-area").prepend(row);
  
      }
  
    }
  
  });

  $("#user-submit").on("click", function(event) {
    event.preventDefault();

    var newUser = {
      firstName: $("#first_name").val().trim(),
      lastName: $("#last_name").val().trim(),
      emailAddress: $("#email_address").val().trim(),
      age: $("#age").val().trim(),
      gender: $("#gender").val().trim(),
      password: $("#password").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newUser);

    $.post("/api/new", newUser)
      .then(function() {
  
        var row = $("<div>");
        row.addClass("user");
        
        row.append(moment(newUser.created_at).format("h:mma on dddd"));
        row.append(newUser.firstName);
        row.append(newUser.lastName);
        row.append(newUser.emailAddress);
        row.append(newUser.age);
        row.append(newUser.gender);
        row.append(newUser.password);

  
        $("#user-area").prepend(row);
  
      });
  
    $("#first_name").val("");
    $("#last_name").val("");
    $("#email_address").val("");
    $("#age").val("");
    $("#gender").val("");
    $("#password").val("");
  });