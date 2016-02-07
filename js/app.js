'use strict';

Handlebars.registerHelper('loop', function(count, options){
    var out = '';
    while (count--){
        out += options.fn();
    }
    return out;
});

$(function (){
    var books = DataModule.getBooks();
    BooksModule.init(books);
});


