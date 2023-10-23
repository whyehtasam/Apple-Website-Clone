
$(document).ready(function() {
    function toggleFooterLists() {
      if (window.matchMedia('(max-width: 480px)').matches) {
        $('.footer-lists').hide(); // Hide .footer-lists by default on mobile
        $('.footer-items h3').click(function() {
            // $(this).parent().find('span').css("transform","rotate(45deg)");
            $(this).find('span').toggleClass('rotate-icon');
          $(this).parent().find('.footer-lists').toggle(150);
        });
      } else {
        $('.footer-lists').show(); // Show .footer-lists by default on larger screens
        $('.footer-items h3').off('click'); // Remove click event on larger screens
      }
    }
  
    // Call the function initially
    toggleFooterLists();
  
    // Add a listener for changes in screen width
    window.addEventListener('resize', toggleFooterLists);
  });
  