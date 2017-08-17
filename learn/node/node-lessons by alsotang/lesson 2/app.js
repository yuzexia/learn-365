//引用依赖
var express = require('express');
var utility = require('utility');

//建立express实例
var app = express();

app.get('/',function (req, res) {
    // 从 req.query 中取出我们的 q 参数。
    // 如果是 post 传来的 body 数据，则是在 req.body 里面，不过 express 默认不处理 body 中的信息，
    // 需要引入 https://github.com/expressjs/body-parser 这个中间件才会处理，这个后面会讲到。
    // 如果分不清什么是 query，什么是 body 的话，那就需要补一下 http 的知识了
    var q = req.query.q;
    console.log(req.query);
    // 调用 utility.md5 方法，得到 md5 之后的值
    // utility 的 github 地址：https://github.com/node-modules/utility
    // 里面定义了很多常用且比较杂的辅助方法，可以去看看
    var md5Value = utility.md5(q);

    res.send(md5Value);
});

// 直接使用http://127.0.0.1:3000会报错
// 访问的时候需要加一个search  http://127.0.0.1:3000/?q=white
app.listen(3000, function() {
    console.log('app is running at port 3000');
})

/*
* TypeError: Data must be a string or a buffer
 at TypeError (native)
 at Hash.update (crypto.js:74:16)
 at Object.hash (E:\mine\yuzexia\learn-365\learn\node\node-lessons by alsotang\lesson 2\node_modules\utility\lib\crypto.js:20:7)
 at Object.md5 (E:\mine\yuzexia\learn-365\learn\node\node-lessons by alsotang\lesson 2\node_modules\utility\lib\crypto.js:33:18)
 at E:\mine\yuzexia\learn-365\learn\node\node-lessons by alsotang\lesson 2\app.js:18:28
 at Layer.handle [as handle_request] (E:\mine\yuzexia\learn-365\learn\node\node-lessons by alsotang\lesson 2\node_modules\express\lib\router\layer.js:95:5)
 at next (E:\mine\yuzexia\learn-365\learn\node\node-lessons by alsotang\lesson 2\node_modules\express\lib\router\route.js:137:13)
 at Route.dispatch (E:\mine\yuzexia\learn-365\learn\node\node-lessons by alsotang\lesson 2\node_modules\express\lib\router\route.js:112:3)
 at Layer.handle [as handle_request] (E:\mine\yuzexia\learn-365\learn\node\node-lessons by alsotang\lesson 2\node_modules\express\lib\router\layer.js:95:5)
 at E:\mine\yuzexia\learn-365\learn\node\node-lessons by alsotang\lesson 2\node_modules\express\lib\router\index.js:281:22
* */

//可以看到，这个错误是从 crypto.js 中抛出的。
//这是因为，当我们不传入 q 参数时，req.query.q 取到的值是 undefined，utility.md5 直接使用了这个空值，导致下层的 crypto 抛错。