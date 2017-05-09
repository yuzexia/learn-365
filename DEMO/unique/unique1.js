Array.prototype.unique = function() {
	var res = [this[0]];
	for (var i = 1; i < this.length; i++) {
		var repeat = false;
		for (var j = 0; j < res.length; j++) {
			if (this[i] == res[j]) {
				repeat = true;
				break;
			}
		}

		if (!repeat) {
			res.push(this[i]);
		}
	}
	return res;
}

var arr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
console.log(arr.unique())