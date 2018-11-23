$('body > header > nav > ul > li:nth-child(2) > a').on('click', function () {
    let element = $('body > header > nav > ul > li:nth-child(2) > ul');
    console.log(element);

    if (!element.hasClass('clicked')) {
        element.addClass('clicked');
    } else {
        element.removeClass('clicked');
    }
});