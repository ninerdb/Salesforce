// Code goes here

$(document).ready(function(){
  console.log("jQuery");
  
   var zipcode = $("#name").val();
    $.ajax({
      url:"https://api.github.com/users",
      type:'GET',
      crossDomain: true,
      dataType:'json',
      success: function(data){
        var htmlStr = '';
         $.each(data, function(index){
       // htmlStr += v.id + ' ' + v.login + '<br />';
        htmlStr += '<tr><td>' +data[index].login + '</td><td>' + +data[index].id + '</td><td>'  + '<img width="50" height="50" src= "' + data[index].avatar_url + '">' + '</td></tr>' ;
        });
        $("#content").append(htmlStr);
      }
    });
  })