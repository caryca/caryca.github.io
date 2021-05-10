$(document).ready(function () {
	/*kiedy nastąpi kliknięcie elementu o klasie .js-toggle-nav, czyli nasz guzik - button, wtedy ...*/
	$('js-toggle-nav').click(function () {
	/*...element o klasie .js-menu zostanie rozwinięty*/
    $('js-menu').slideToggle();
    /* jeśli wyświetlany tekst po kliknięciu na guziku będzie 'x', wtedy zamień go na 'menu'*/
    if ($(this).text() == "x")
       $(this).text("Menu")
    else /*w przypadku, gdy napis na guziku to 'menu', to zamień go na 'x'*/
       $(this).text("x");

  });
});