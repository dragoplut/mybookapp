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
    while (count--){
        out += options.fn();
    }
    return out;
});
