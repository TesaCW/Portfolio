/*validate function*/
$(document).ready(function(){

	$("#contactForm").submit (function (e) {
		e.preventDefault();
	});

	$("#contactForm").validate({
		rules:
			{
				fName:
					{
						required: true,
						minlength: 2
					},
					
				lName:
					{
						required:true,
						minlength: 2
					},

				fromEmail:
					{
						required:true,
						email:true
					},	
				
				note:
					{
						required: true,
						minlength: 10,
						maxlength: 1000
					}
					
            },
				
		messages:
                {
                fName:
					{
						required: "<li>Please enter your name.</li>",
						minlength: "<li>Your name is not long enough.</li>"
					},
					
				lName:
					{
						required: "<li>Please enter your last name.</li>",
						minlength: "<li>Your last name is not long enough.</li>"
					},
					
				fromEmail:
					{
						required:"<li>Please enter an email.</li>",
						email:"<li>Make sure your email looks like this: name@provider.com</li>"
					},
				
				note:
					{
						required:"<li>Please leave a message</li>",
						minlength:"<li>Please the message longer than 10 characters</li>",
						maxlength:"<li>Please make the message no longer than 100 characters</li>"
					}
				},
				
		
		submitHandler: function() {
				var posting = $.post("http://www.dustinkraft.com/mail/", $('#contactForm').serialize());
				posting.done(function(data) {
					if (data == "OK") {
						$("#success").html("Message was sent successfully");
					}
					else {
						$("#success").html(data);
					}
					});
			}	
	});
});

