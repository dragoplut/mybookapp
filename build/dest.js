"use strict";Handlebars.registerHelper("loop",function(e,t){for(var o="";e--;)o+=t.fn();return o});var BooksModule=function(e){function t(e){var t=Handlebars.compile(a),o=t(e);$(".main-book-list").html(o)}function o(e){var o=[];0!==e&&(e=e.toLowerCase());for(var r=0;r<i.length;r++){var a=i[r].title.toLowerCase(),n=i[r].author.toLowerCase();(a.indexOf(e)>-1||n.indexOf(e)>-1||i[r].price===e)&&o.push(i[r])}t(o)}function r(e){var o=$.extend([],i);"rating"==e?o.sort(function(e,t){var o=e.rating,r=t.rating;return o==r?0:r>o?1:-1}):"date"==e&&o.sort(function(e,t){var o=e.date,r=t.date;return o==r?0:r>o?1:-1}),t(o)}var a=$("#books-template").html(),i=e;return function(){t(i)}(),{searchNew:o,sortBy:r}}(DataModule.get),DataModule=function(){var e=[{ID:1,title:"Jewels of Nizam",author:"Geeta Devi",rating:5,price:100,date:2015,cover:"img/book-cover.png"},{ID:2,title:"Cakes & Bakes",author:"Sanjeev Kapoor",rating:5,price:80,date:2012,cover:"img/book-cover%20(1).png"},{ID:3,title:"Jamie's Kitchen",author:"Jamie Oliver",rating:4,price:0,date:2014,cover:"img/book-cover%20(2).png"},{ID:4,title:"Inexpensive Family Meals",author:"Simon Holst",rating:4,price:0,date:2010,cover:"img/book-cover%20(3).png"},{ID:5,title:"Paleo Slow Cooking",author:"Chrissy Gower",rating:4,price:50,date:2014,cover:"img/book-cover%20(4).png"},{ID:6,title:"Cook Like an Italian",author:"Tobie Puttock",rating:4,price:0,date:2013,cover:"img/book-cover%20(5).png"},{ID:7,title:"Suneeta Vaswani",author:"Geeta Devi",rating:5,price:75,date:2007,cover:"img/book-cover%20(6).png"},{ID:8,title:"Jamie Does",author:"Jamie Oliver",rating:4,price:0,date:2008,cover:"img/book-cover%20(7).png"},{ID:9,title:"Jamie's italy",author:"Jamie Oliver",rating:5,price:40,date:2011,cover:"img/book-cover%20(8).png"},{ID:10,title:"Vegetables Cookbook",author:"Matthew Biggs",rating:3,price:120,date:2010,cover:"img/book-cover%20(9).png"}];return{get:e}}();