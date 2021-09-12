

$(function() {
  var _input = document.getElementById("searchTerm");

  _input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("search").click();
    }
  });
      $("#search").on("click",function(){ 
        var input = $("#searchTerm").val();
        var settings = {
          "url": "https://restcountries.eu/rest/v2/name/"+input,
          "method": "GET",
          "timeout": 0,
        };
        
        $.ajax(settings).done(function (response) {
          console.log(response[0]['capital']);
          document.getElementById('output').innerHTML='';
          $('#output').html()
          $('#output').append("<div><h3>" + response[0]['capital'] + "</h3></div>")
        
        for (let i = 0;i<response[0]['borders'].length;i++){
          var settings = {
            "url": "https://restcountries.eu/rest/v2/alpha/"+response[0]['borders'][i],
            "method": "GET",
            "timeout": 0,
          };
          $.ajax(settings).done(function (response1) {
            console.log(response1['capital'])
            $('#output').html()
            $('#output').append("<div><div class='well'><h3>" + response1['capital'] + "</h3></div></div>")
        }
        )
        }})
        
          .fail(function() {
              console.log("error");
              $('#output').html()
              document.getElementById('output').innerHTML='';

            $('#output').append("<div style='background-color:rgb(202, 147, 126)'><div class='well'><h3>Not Found</h3></div></div>")
          })
         
          
          
      });
  });
