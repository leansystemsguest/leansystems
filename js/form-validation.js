

$(document).ready(function() {
    
    // Setup form validation on the #account-setting element
    $("#callus").validate({
        // Specify the validation rules
        rules: {
            name: {
             required: true
            },
            email: {
                required: true,
				email: true
            },
			subject: {
                required: true
            },
			message: {
                required: true
            }
           
        },
        
        // Specify the validation error messages
        messages: {
            name:  {
				required: "Please enter your name" },
             email: {
                required: "Please enter email",
				email: "Please enter valid email address"
                
            },
			subject: {
                required: "Please enter subject "
            },
			message: {
                required: "Please enter message"
            }
           
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });
	
	
	
 
  });/*end document ready*/
  
 