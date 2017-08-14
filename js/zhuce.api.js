
$("#button").click(function(){
	var username = $("#username").val();
	var password = $("#psw").val();
	var password2 = $("#psw2").val();
	
	if(password !== password2 ){
		$(".alert2").slideDown(1000);
	}else{
		$(".alert2").slideUp(1000);
	
	$.ajax({
	type:"post",
	url:"http://lc.shudong.wang/api_user.php",
	data:{"status":"register","username":username,"password":password},
	success:function(data){
		data=JSON.parse(data);
		console.log(data)
		if(data.code==0){
			alert(data.message)
            self.location='denglu.html'; 
			
		}else{
			alert(data.message)
			
		}
	
		
	}
})
	}
})

