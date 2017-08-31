//*****元素显示隐藏******/
	function showsty(obj,num){
		
		for(var i=0;i<obj.length;i++){
			if(i==num){
				obj[i].style.display="block";
			}
			else{
				obj[i].style.display="none";
			}
		}
	}
	function showadd(obj,num,cls){
		for(var i =0;i<obj.length;i++){
			if(i==num){
				obj[i].classList.add(cls);
			}
			else{
				obj[i].classList.remove(cls);
			}
		}
	}



/*******GET POST**********/
function get(url,func){
	var request =new XMLHttpRequest();
	request.open("GET", url, true);
	request.send();
	request.onreadystatechange=function(){
		if(request.readyState==4&&request.status==200){
			var data=request.responseText;
			func(data);
		}
	}
}
function post(arg,url,func){
	var request=new XMLHttpRequest;
	request.open("POST", url, true);
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.send(arg);
	request.onreadystatechange=function(){
		if(request.readyState==4&&request.status==200){
			var data=request.responseText;
			func(data);
			
		}
		
	}
	
}