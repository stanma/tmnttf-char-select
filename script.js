$('#reset').click(() => {
  $('input[type=checkbox]').each(function()
  {
    this.checked = false;
  });
});

$(document).ready(function(){
  let req="http://localhost:3000/posts";
  $.ajax({
    url : req,
    type : "GET",
    dataType : "jsonp",
    success : function(response) {
      console.log(response[0]);
    }
  });
});