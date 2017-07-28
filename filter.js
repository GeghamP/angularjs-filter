app.filter('startsWith',function(){
	return function(data,input){
		if(typeof input==='undefined'){
			return;
		}
		var res=[];
		for(var i=0;i<data.length;i++){
			if(data[i].toLowerCase().indexOf(input.toLowerCase())===0){
				res.push(data[i]);
			}
		}
		return res;
	};
})
.filter('endsWith',function(){
	return function(data,input){
		if(typeof input==='undefined'){
			return;
		}
		var res=[];
		for(var i=0;i<data.length;i++){
			if(data[i].toLowerCase().lastIndexOf(input.toLowerCase())===data[i].length-1){
				res.push(data[i]);
			}
		}
		return res;
	};
})
