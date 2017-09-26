#### Node.js 事件循环

- Node.js是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高

- Node.js每一个API都是异步的，并作为一个独立的线程运行，使用异步函数调用，并处理并发

- Node.js中的所有事件机制基本都是用设计模式中观察者模式实现的。

- Node.js单线程类似进入while(true)事件循环，直到没有观察者退出，每个异步事件都生成一个事件观察者，如有事件发生就调用该回调函数

#### 事件驱动程序

> Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）
在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

![](http://www.runoob.com/wp-content/uploads/2015/09/event_loop.jpg)

> 整个事件驱动的流程就是这么实现的，非常简洁。有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

```js
// 引入events模块
var events = require('events');

// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
```
> 程序绑定事件处理程序

```js
eventEmitter.on('eventName',eventHandler);
```

> 触发事件
```js
eventEmitter.emit('eventName');
```