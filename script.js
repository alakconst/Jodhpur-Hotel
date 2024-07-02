// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Add your button click logic here
            console.log("Button clicked!");
        });
    });
});
