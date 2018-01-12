function to2(n){          //p55 1.1.9
	var s = "";
	for(n ; n > 0 ; n=parseInt(n/2)){
		console.log(n);
		s = (n%2) + s;
	}
	return s;
}

function transposition(a){   //p56 1.1.13
	var row = a.length, column = a[0].length;
	var newmatrix = [];
	for(i = 0;i < column;i++){
		var newrow=[];
		for(j = 0;j < row; j++){
			newrow.push(a[j][i]);
		}
		newmatrix.push(newrow);
	}
	return newmatrix;
 }

function toLn(n){          //p58 1.1.20
	if(n==1){
		return 0;
	}else{
		console.log(n);
		return Math.log(n)+arguments.callee(n-1);	
	}
}



function nBynBooleanArray(n){     //P59   1.1.30 没有做对T T
	var s = [];
	for(var i = 0;i < n ; i++){
		var row = [];
		for(var j = 0;j < n; j++){
			if(maxCommonDivisor(i,j) == 1){
				row.push(1);
			}
			else 
				{
				row.push(0)
			}
		}
		s.push(row);
	}
	return s;
 }

function maxCommonDivisor(a,b) {    //求最大公约数
	var max = Math.max(a,b),min = Math.min(a,b);
 	if(max%min == 0){
		console.log(max,min);
 		return min;
 	}
 	else{
 		return arguments.callee(min,(max%min));
 	}
 }