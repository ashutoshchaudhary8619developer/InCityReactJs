$(function(){

  var fullUrl =  location.protocol+'//'+location.hostname+(location.port ? ':'+5000: '');

    $("#send").click(function(){      
      var formData = $("#emailForm").serialize();
      $("#msg").text("Email sending Please wait..");
                $.ajax({
                url: fullUrl+'/send',
                type: 'POST',
                data: formData,
                success: function(result) {
                                 $("#msg").empty().text(result);
                         },
                error: function(e) {
                                 $("#msg").empty().text("There is some error to send email, Error code:"+e.status +", Error message:"+e.statusText);
                       },
                dataType: "html",
                timeout: 60000
            });
    });
});
