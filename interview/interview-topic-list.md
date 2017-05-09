## inter-topic-list

#### 请用JavaScript 实现一个方法，该方法能够判断两个字符串是否匹配, 如:

```
function isMatch(str1, str2) {
  // ...
}
isMatch('something', 'ginhtemos')  // true
isMatch('aaa', 'aa')  //false
isMatch('abb', 'baa')  //false
isMatch('hello', 'olelh')  //true
```
> 解题思路

> 将两个str进行重排

```
function isMatch(str1, str2){
	var str1 = str1.split('').sort().join(''),
			str2 = str2.split('').sort().join('');

	if(str1 === str2){
		return true;
	} else {
		return false;
	}
}
```