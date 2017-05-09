## 数组去重方法
#### 常规方法

> 思路

1. 构建一个新的数组用来存放结果 
2. for循环中每次从原数组取出一个元素，用这个元素循环与结果数组对比
3. 若结果数组中没有该元素，则存到结果数组中

```javascript
Array.prototype.unique = function(){
	var res = [this[0]];
	for(var i = 1;i<this.length;i++){
		var repeat = false;
		for(var j = 0;j<res.length;j++){
			if(this[i] == res[j]){
				repeat = true;
				break;
			}
		}

		if(!repeat){
			res.push(this[i]);
		}
	}
	return res;
}

var arr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
console.log(arr.unique());
//["h", "e", "l", "o", " ", "w", "r", "d", "!"]
```

#### 比上述的方法高效一点

> 思路

1. 先将原数组进行排序

2. 检查原数组中的第i个元素与结果数组中的最后一个元素是否相同（因为已经排序，所以重复元素会在相邻位置）

3. 如果不相同，则将该元素存入结果数组中

```javascript
Array.prototype.unique = function() {
	this.sort(); // 排序
	var res = [this[0]];

	for (var i = 1; i < this.length; i++) {
		if (this[i] !== res[res.length - 1]) {
			res.push(this[i]);
		}
	}
	return res;
}

var arr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
console.log(arr.unique());
//[" ", "!", "d", "e", "h", "l", "o", "r", "w"]
```
> 这种方法会在去重之前进行排序，所以最后返回的结果也是排序之后的。如果要求不改变数组的顺序去重，这种方法是不可取的。

#### 三、利用哈希值

> 思路

1. 创建一个新的数组存放结果
2. 创建一个新的对象
3. for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存放入到第2步建立的对象中。

> 至于如何对比，就是每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，说明重复了。

```javascript
Array.prototype.unique = function() {
	var res = [this[0]],
		obj = {};

	for (var i = 1; i < this.length; i++) {
		if (!obj[this[i]]) {
			res.push(this[i]);
			obj[this[i]] = 1;
		}
	}
	return res;
}

var arr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
console.log(arr.unique());
//["h", "e", "l", "o", " ", "w", "r", "d", "!"]
```
> 这种方法效率最高，在处理长数组的时候很有优势，推荐使用。