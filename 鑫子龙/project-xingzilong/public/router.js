define([
    'backbone', 'template', 'text!indexHtml',
    'jquery', 'text!imageHtml', 'text!courseHtml',
    'text!myHtml', 'zepto', "sm", 'text!teacherHtml',
    'text!wushuHtml',
    'text!requery', 'text!honorHtml', 'text!videoHtml', 'text!taekwondoHtml'
], function (B, template, html, $, imageHtml,
    courseHtml, myHtml, zepto, sm, teacherHtml,
    wushuHtml, requery, honorHtml, video, taekwondo) {
        var Router = B.Router.extend({
            routes: {
                '': 'index',
                'image': 'image',
                'object': 'object',
                'my': 'my',
                'teacher': 'teacher',
                'wushu': 'wushu',
                'requery': 'requery',
                'honor': 'honor',
                'video': 'video',
                'taekwondo': 'taekwondo'
            }, index: function () {
                var IndexView = B.View.extend({
                    el: $('body'),
                    template: template.compile(html),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }, events: {
                        'click .alert': 'Buttontext'
                    }, Buttontext: function () {
                            zepto.confirm('呼叫电话:18250900852', function () {
                            });
                    }
                })
                var indexView = new IndexView
            }, image: function () {
                var ImageView = B.View.extend({
                    el: $('body'),
                    template: template.compile(imageHtml),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }, events: {
                        'click .alert1': 'Buttontext1'
                    }, Buttontext1: function () {
                            zepto.confirm('呼叫电话:18250900852', function () {
                            });
                    }
                })
                var ImageView = new ImageView
            }, object: function () {
                var ObjectView = B.View.extend({
                    el: $('body'),
                    template: template.compile(courseHtml),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }, events: {
                        'click .alert2': 'Buttontext2'
                    }, Buttontext2: function () {
                            zepto.confirm('呼叫电话:18250900852', function () {
                            });
                    }
                })
                var ObjectView = new ObjectView
            }, my: function () {
                var myView = B.View.extend({
                    el: $('body'),
                    template: template.compile(myHtml),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }, events: {
                        'click .alert3': 'Buttontext3'
                    }, Buttontext3: function () {
                            zepto.confirm('呼叫电话:18250900852', function () {
                            });
                    }
                })
                var myView = new myView
            }, teacher: function () {
                var teacherView = B.View.extend({
                    el: $('body'),
                    template: template.compile(teacherHtml),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }
                })
                var teacherView = new teacherView
            }, wushu: function () {
                var wushuView = B.View.extend({
                    el: $('body'),
                    template: template.compile(wushuHtml),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }
                })
                var wushuView = new wushuView
            }, requery: function () {
                var requeryView = B.View.extend({
                    el: $('body'),
                    template: template.compile(requery),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }
                })
                var requeryView = new requeryView
            }, honor: function () {
                var honorView = B.View.extend({
                    el: $('body'),
                    template: template.compile(honorHtml),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }
                })
                var honorView = new honorView
            }
            , video: function () {
                var videoView = B.View.extend({
                    el: $('body'),
                    template: template.compile(video),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }
                })
                var videoView = new videoView
            }
            , taekwondo: function () {
                var taekwondoView = B.View.extend({
                    el: $('body'),
                    template: template.compile(taekwondo),
                    initialize: function () {
                        this.render();
                    }, render: function () {
                        this.$el.html(this.template())
                    }
                })
                var taekwondoView = new taekwondoView
            }
        })
        var router = new Router();
        return router;
    });