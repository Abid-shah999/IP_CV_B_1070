window.onload = function() {
  alert("Welcome to Syed Shahriyar Abid Shah's Portfolio!");
};

document.addEventListener("DOMContentLoaded", function() {
  const footer = document.querySelector("footer");

  footer.addEventListener("mouseenter", function() {
    footer.style.backgroundColor = "darkgreen"; 
  });

  footer.addEventListener("mouseleave", function() {
    footer.style.backgroundColor = "saddlebrown"; 
  });


  let messages = [];
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

   
    messages.push({ name, email, message });

    console.log(messages); 
    alert("Message saved locally!");
    
    form.reset();
  });
});

