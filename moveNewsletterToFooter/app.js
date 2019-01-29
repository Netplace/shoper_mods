$("document").ready(function () {
    if ( $("#box_newsletter").length > 0 ) {

        // zmienna pozycja przyjmuje dwie wartości 0 lub 1, wartość 0 oznacza umieszczenie newslettera ponad linkami w stopce, a wartość 1 oznacza umieszczenie newslettera pod linkami w stopce

        var pozycja = 1;

        if (0 === pozycja) {
            $(".footer .innerfooter ul.overall").before( $("#box_newsletter").detach() )
        } else if (1 === pozycja) {
            $(".footer .innerfooter ul.overall").after( $("#box_newsletter").detach() )
        }

    }
})