document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_whmh2qi', 'template_ubvl8rp', e.target)
    .then(function(response) {
      alert('Message sent successfully');
    }, function(error) {
      console.error("Failed...", error);
      alert("Something went wrong, check console..");
    });
});