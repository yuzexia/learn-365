var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', (req, res) => {
    // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    superagent.get('https://cnodejs.org/')
        .end((err, sres) => {
            //常规错误
            if (err) return next(err);

            //sres.text里面存储这网页的html内容，将它传给cheeroi.load之后
            //就可以得到一个实现了jQuery接口的变量，我们习惯性地将它命名为'$'
            //剩下就是jQuery的事情了。
            // console.log(sres);
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each((idx, ele) => {
                var $ele = $(ele);
                var $name = $($('#topic_list .user_avatar img')[idx]);
                // console.log($(name).attr('title'))
                items.push({
                    title: $ele.attr('title'),
                    href: $ele.attr('href'),
                    author:$name.attr('title')
                });
            });
            res.send(items);
        })
});

app.listen(3000, () => {
    console.log('app listener port is 3000');
})