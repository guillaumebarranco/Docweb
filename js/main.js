$(document).ready(function() {

    $('.list_first ul').hide();
    $('.infos').hide();
    $('.container').hide();

    $('.link_techno').each(function() {
        if($(this).attr('data-creator') != null && $(this).attr('data-creator') != undefined) {
            $(this).append('<img style="margin-left: 20px;" src="img/'+$(this).attr('data-creator')+'.png" width="100" />');
        }
    });

    $('.infos ul li a').each(function() {
        $(this).attr('target', '_blank');
        if($(this).attr('class') === 'download') {
            $(this).addClass('pure-button pure-button-primary')
        } else if($(this).attr('class') === 'doc') {
            $(this).addClass('pure-button button-doc');
        }
    });

    $('.list_first').on('click', function() {

        if($(this).hasClass('active')) {
            $(this).find('ul').slideUp();
            $(this).removeClass('active');
        } else {
            $('.list_first').removeClass('active');
            $('.list_first').find('ul').slideUp();
            $(this).find('ul').slideDown();
            $(this).addClass('active');
        }
    });

    $('.list_first a').on('click', function(e) {
        e.preventDefault();
        $('.content').append($(this).text());
        $('.content').append($(this).parent().find('.infos').html());
        $('.list_all').hide();
        $('.container').show();
    });

    $('.container button').on('click', function() {
        $('.container').hide();
        $('.content').empty();
        $('.list_all').show();
    });
});