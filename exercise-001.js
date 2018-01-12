function maximum(a){                //找最大值
	var max = a[0];
	for(var i = 0;i < a.length;i++){
		if(a[i] > max){
			max = a[i];
		}
	}
	return max;
 }

function maximum1(a) {                       //用reduce遍历数组
	var max=a.reduce(function(prev,cur,index,array){
		if(prev > cur){                     //return prev > cur ? prev : cur;
			return prev;
		}else{
			return cur
		}
	});
	return max;
 }

function maximum2(a) {     //用reduceRight遍历数组
	var max = a.reduceRight(function(prev,cur,index,array){
		if(prev > cur){
			return prev;
		}else{
			return cur
		}
	});
	return max;
 }

 function maximum3(a){
 	var max=a.reduceRight(function(prev,cur,index,array){
 		return prev > cur ? prev : cur;
 	})
 	return max;
 }

function average(b){           
	var n = b.length,sum = b[0];
	for(var i = 0;i<b.length;i++){
		sum += b[i];
	}
	var averageNumber = sum/n;
	return averageNumber;
 }

function average1(b){
 	var n = b.length;
	var sum=b.reduce(function (prev,cur,index,array) {
		return prev + cur;
	}) 
	var  averageNumber = sum/n;
	return averageNumber;
 }

function copyToAnotherArray(c){
	var n = c.length,c2 = [];
	for (var i = 0; i < c.length; i++) {
		c2[i]=c[i];
	}
	return c2;
 }

function reverse(a){
	var n = a.length;
	for (var i = 0; i < n/2; i++) {
		var temp = a[i];
		a[i] = a[n-1-i];
		a[n-1-i] = temp;
	}
	return a;
 }

function matrixMultiplication(a,b){
	var matrix = []; 
	var n1 = a.length, row1 = a[0].length, n2 = b.length,row2 = b[0].length;
	if(row1 == n2){
		for(var i = 0;i < n1; i++){
			var mmm = [];
			for(var j=0;j<row2;j++){
				var temp1=0;
				for(var k=0;k<row1;k++){
					temp1 +=a[i][k]*b[k][j];
				}
				mmm.push(temp1);
			}
			matrix.push(mmm);
		}
	}
	else{
		alert("ERROR");
	}
	return matrix;
}

var a = [[1,2,3],[3,4,5]],b = [[4,5,6],[7,8,9],[10,11,12]];

function absoluteNumber(x) {
    if(x<0){
		return -x;
	}
	else{
		return x;
	}
}

function primalityTest(a){  //应该排除掉浮点数
	if(a < 2){
		return false;
	}
	for(i = 2;i*i <= a; i++){
		if(a % i == 0){
			return false;
		}
	}return true;
 }



function lengthOfHypotenuse(a,b){
	return Math.sqrt(a*a+b*b);
}

function harmonicNumber(n){
	if(Number.isInteger(n)){
		var sum = 0;
		for(var i = 1;i <= n; i++)
			sum += 1/n;
	}else{
		return false;
	}
	return sum;
}