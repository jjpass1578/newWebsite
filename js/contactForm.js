$("#contactFormSubmit").click(function contactFormSubmit(){
    $.ajax({
        url:"http://www.fvi-grad.com:4004/email",
        method:"post",
        data: $("#contactForm").serialize(),
        success: function(){
            $("#contactFormSubmit").text("Submitted");
        },
        beforeSend: function(){
            $("#contactFormSubmit").text("Submitting");
            $("#contactFormSubmit").off("click")
        },
        error: function(){
            $("#contactFormSubmit").text("Resubmit")
            $("#contactFormSubmit").on("click", contactFormSubmit);
        }
    });
})
$("#contactFormSubmit").on("click", contactFormSubmit);