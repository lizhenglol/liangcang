
$("#button").click(function(){
	var username = $("#mobile").val();
	var password = $("#code").val();
	$.ajax({
	type:"post",
	url:"http://lc.shudong.wang/api_user.php",
	data:{"status":"login",username:username,password:password},
	success:function(data){
		data=JSON.parse(data);
        
//		alert(data.message)
        if(data.code==0){
        localStorage.token = data.data.token
		console.log(localStorage.token)
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
				
                self.location='index.html'; 
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