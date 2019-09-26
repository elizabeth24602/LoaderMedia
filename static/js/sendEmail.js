function sendMail(contactForm) {
    emailjs.send("outlook", "loader_media", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "pricing": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

var template_params = {
   "from_name": "from_name_value",
   "from_email": "from_email_value",
   "pricing": "pricing_value"
}

var service_id = "default_service";
var template_id = "loader_media";
emailjs.send(service_id, template_id, template_params);