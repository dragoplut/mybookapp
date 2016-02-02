/**
 * Created by oleksandr on 01.02.16.
 */
'use strict';

$(function(){
    var source = $('#books-template').html();
    var template = Handlebars.compile(source);
    var html = template(books);
    $('.main-book-list').append(html);
});

Handlebars.registerHelper('loop', function(count, options){
    var out = '';
    console.info(options, count);
    while (count--){
        out += options.fn();
    }
    return out;
});


/**
 * Render rating "stars" html string
 * Param required: integer, from '0' to '5', step: '0.5'
 * @param tmpRating
 * @returns {string}
 */
function renderRating(tmpRating){

    var renderRating = '<span class="star-orange">';
    for (var j = 0; j < 5; j++) {
        if (tmpRating >= 1) {
            renderRating += '<i class="fa fa-star"></i>';
        } else if (tmpRating == 0.5) {
            renderRating += '<i class="fa fa-star-half-o"></i>';
        } else {
            renderRating += '<i class="fa fa-star-o"></i>';
        }
        tmpRating = tmpRating - 1;
    }
    renderRating += '</span>';

    return renderRating;
}
