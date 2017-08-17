
var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
// url 模块是 Node.js 标准库里面的
// http://nodejs.org/api/url.html
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';
var app = express();
// app.get('/', (req, res) => {

superagent.get(cnodeUrl)
    .end((err, res) => {
        if(err) {
            return console.error(err);
        }

        var $ = cheerio.load(res.text);
        var topicUrls = [];
        $('#topic_list .topic_title').each((idx, element) => {
            var $element = $(element);
            // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
            // 我们用 url.resolve 来自动推断出完整 url，变成
            // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
            // 具体请看 http://nodejs.org/api/url.html#url_url_resolve_from_to 的示例
            var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href);
        });
        // console.log(topicUrls);

        var ep = new eventproxy();

        ep.after('topic_html', topicUrls.length, (topics) => {
            topics = topics.map((topicPair) => {
                var topicUrl = topicPair[0];
                var topicHtml = topicPair[1];
                var $ = cheerio.load(topicHtml);
                // console.log(topicHtml)
                console.log('----',$('.topic_full_title').text().trim());
                return ({
                    title:$('.topic_full_title').text().trim(),
                    href : topicUrl,
                    comment1:$('.reply_content').eq(0).find('.markdown-text').text().trim()
                });
            });
        });
        topicUrls.forEach((topicUrl) => {
            superagent.get(topicUrl)
                .end((err, res) => {
                    console.log('fetch' + topicUrl + 'successful');
                    ep.emit('topic_html',[topicUrl, res.text]);
                })
        })
        // res.send(topics);
    })
// })



