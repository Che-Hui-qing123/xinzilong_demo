require.config({
    paths: {
        jquery: './lib/jquery',
        underscore: './lib/underscore',
        backbone: './lib/backbone',
        text: "./lib/text",
        template: "./lib/template-web",
        router: './router',
        zepto: './lib/zepto.min',
        indexHtml: './tpl/index.html',
        imageHtml: './tpl/image.html',
        teacherHtml:'./tpl/page/teacher.html',
        courseHtml: './tpl/course.html',
        wushuHtml:'./tpl/page/wushu.html',
        honorHtml:'./tpl/page/honor.html',
        videoHtml:'./tpl/page/video.html',
        taekwondoHtml:'./tpl/page/taekwondo.html',
        requery:'./tpl/page/requery.html',
        myHtml: './tpl/my.html',
        sm: "./lib/sm.min",

    }, shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'B'
        },
        zepto: {
            exports: "zepto"
        },
        sm: {
            deps: ["zepto"]
        }
    }
})
require(['backbone', 'router'], function (B, router) {
    B.history.start();
})
