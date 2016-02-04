/**
 * Created by oleksandr on 01.02.16.
 */
'use strict';

Handlebars.registerHelper('loop', function(count, options){
    var out = '';
    while (count--){
        out += options.fn();
    }
    return out;
});

var BooksModule = (function(get){

    /**
     * Handlebars template
     * Forbidden to change
     * @type {*|jQuery}
     */
    var source = $('#books-template').html();
    var books = get;

    (function init(){
        renderBooks(books);
    }());

    function renderBooks(books){
        console.info('renderBooks');
        var template = Handlebars.compile(source);
        var html = template(books);
        $('.main-book-list').html(html);
    }

    function searchNew (item){
        var result = [];
        if (item != 0){
            item = item.toLowerCase();
        }
        for (var i = 0; i < books.length; i++){
            var searchTitle = books[i].title.toLowerCase();
            var searchAuthor = books[i].author.toLowerCase();
            if (searchTitle.indexOf(item) > -1 || searchAuthor.indexOf(item) > -1 || books[i].price === item){
                result.push(books[i]);
            }
        }
        renderBooks(result);
    }

    function sortBy (option){
        var sorted = $.extend([], books);
        console.info(sorted);
        if (option == 'rating'){
            sorted.sort(function (a, b) {
                var a1 = a.rating;
                var b1 = b.rating;
                if (a1 == b1) return 0;
                return a1 < b1 ? 1 : -1;
            });
        } else if (option == 'date'){
            sorted.sort(function (a, b) {
                var a1 = a.date;
                var b1 = b.date;
                if (a1 == b1) return 0;
                return a1 < b1 ? 1 : -1;
            });
        }
        renderBooks(sorted);
    }
    return {
        searchNew: searchNew,
        sortBy: sortBy
    };
}(DataModule.get));