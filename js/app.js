/**
 * Created by oleksandr on 01.02.16.
 */
'use strict';

for (var i = 0; i < books.length; i++){
    var tmpRating = books[i].rating;
    //var tmpPrice = books[i].price;

    var renderRating = '<span class="star-orange">';

    for (var j = 0; j < 5; j++){
        if (tmpRating >= 1){
            renderRating += '<i class="fa fa-star"></i>';
        } else if (tmpRating == 0.5){
            renderRating += '<i class="fa fa-star-half-o"></i>';
        } else {
            renderRating += '<i class="fa fa-star-o"></i>';
        }
        tmpRating = tmpRating - 1;
    }

    renderRating += '</span>';

    var elemTemplate = '<div id="{{tmpId}}" class="book-list">'+
            '<img src="{{tmpCover}}">'+
            '<a class="book-list-title" href="#">{{tmpTitle}}</a>'+
            '<a class="book-list-author" href="#">by {{tmpAuthor}}</a>'+ renderRating +
        '</div>';

    var template = Handlebars.compile(elemTemplate);

    var html = template({tmpAuthor: books[i].author, tmpCover: books[i].cover, tmpId: books[i].ID, tmpTitle: books[i].title});

    $('.main-book-list').append(html);
}