
$("#dl4").click(function(){
	var username = $("#dl2_use").val();
	var password = $("#dl2_psw").val();
	$.ajax({
	type:"post",
	url:"http://lc.shudong.wang/api_user.php",
	data:{"status":"login",username:username,password:password},
	success:function(data){
		data=JSON.parse(data);

//		alert(data.message)
        if(data.code==0){

		var infoname = data.data.username
		var infotoken = data.data.token
        $.ajax({
	        type:"get",
			url:"http://lc.shudong.wang/api_userinfo.php",
			data:{"status":"info","username":infoname},
			beforeSend:function(request) {
                request.setRequestHeader("token",infotoken);
            },
			success:function(data){
				data=JSON.parse(data);
				
                self.location='cp.html'; 
				console.log(data.data)
				localStorage.use = data.data.username;
				localStorage.avatar = data.data.avatar;
				localStorage.code = data.code;
				
				
			}
        })
        }else{
        	alert(data.message)
        }

	} 
})
})