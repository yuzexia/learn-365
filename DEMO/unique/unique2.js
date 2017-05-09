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
console.log(arr.unique())