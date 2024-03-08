document.addEventListener("DOMContentLoaded", function() {
    // Select all accordion items
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    // Loop through each accordion item
    accordionItems.forEach(item => {
      // Select button and content for each item
      const btn = item.querySelector(".accordion-btn");
      const content = item.querySelector(".accordion-content");
  
      // Add click event listener to the button
      btn.addEventListener("click", function() {
        // Toggle the active class on the content
        content.classList.toggle("active");
        // Toggle the display property to show/hide content
        content.style.display = content.classList.contains("active") ? "block" : "none";
        // Toggle the active class on the button
        btn.classList.toggle("active");
  
        // Toggle the max-height property to control accordion content visibility
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });