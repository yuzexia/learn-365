console.time();
const os = require('os');   // 加载核心模块os
const add = require('./main.js');
const d = 1;
const a = b = c = 2;


console.log(add(3));
console.log(os.cpus());  // 获取os的cups信息
console.log(a, b, c, d);
console.log(typeof a, typeof b, typeof c, typeof d);

console.timeEnd();   // 获取执行完成所耗费的时间

