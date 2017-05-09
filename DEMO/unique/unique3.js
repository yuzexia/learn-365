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
console.log(arr.unique())