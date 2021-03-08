$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();


/*=======Input Section=======*/
    $('checkout').click(function(){
        let type = $('#type option: selected') .val();
        let size = $('#size option: selected') .val();
        let crust = $('#crust option: selected') .val();
        let topping = $('#toppings option: selected') .val();
        let number = $('#number') .val();
        console.log(size);

        /*Order Function*/
        let order = (t, s, c, t, n, total) => {
            return {t, s, c, t, n, total};
        };




    });