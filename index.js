// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}



// Scroll to the given ashe during the given time (ms)
function runAnimatedScroll(hash, time) {
  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, time, () => {
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
}


// Main code
// C'est ce qui sera executé quand la page aura chargée
// On attrape la navbar
var $navbar = $('#navbar');
// Pour chaque lien dans la navbar, quand on clic dessus on scroll jusqu'à la cible
$navbar.find('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (event.target.hash && event.target.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      runAnimatedScroll(event.target.hash, 1000);
      $('#navDemo').removeClass('w3-show');
    }
});
// On ajoute un espion qui regarde quand on rentre dans un élément de menu,
// Pour mettre à jour l'apparance de la barre de menu
var $navItems = $('.nav-item');
$navItems.on('scrollSpy:enter', function() {
	$navbar.find('.active').removeClass('active');
	$navbar.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
});
$navItems.scrollSpy();
// Ca c'est pour enlever la selection sur le premier élément de la barre de menu
// quand on arrive sur le header
var $header = $('header');
$header.on('scrollSpy:enter', function() {
	$navbar.find('.active').removeClass('active');
});
$header.scrollSpy();

