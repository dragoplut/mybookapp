/**
 * Created by oleksandr on 01.02.16.
 */
'use strict';

$(function(){
    var source = '{{#each .}}' +
        '<div id="{{ID}}" class="book-list">' +
        '<img src="{{cover}}">' +
        '<a class="book-list-title" href="#">{{title}}</a>' +
        '<a class="book-list-author" href="#">by {{author}}</a>' +
        '</div>' +
    '{{/each}}';
    var template = Handlebars.compile(source);
    var html = template(books);
    $('.main-book-list').append(html);
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
