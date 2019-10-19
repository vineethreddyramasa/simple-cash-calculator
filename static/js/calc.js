$(document).ready(function () {

        $('#1,#5,#10,#50,#100,#25,#add, #subtract, #multiply, #divide, #power, #dot, #para1, #para2').click(function () {
            var v = $(this).val();
            var total = $('textarea').val($('textarea').val() + v);
            $('textarea').val(eval($('textarea').val()));

        });

        $('#equal').click(function () {
            $('textarea').val(eval($('textarea').val()));
        });


        $('#clear').click(function () {
            $('textarea').val('');
        });

    });