//$.ajax({
//	type:"post",
//	url:"http://lc.shudong.wang/api_userinfo.php",
//	data:{"status":"Info","token":token},
//	success:function(data){
//		console.log(data)
//	}
//})

$.ajax({
	type:"get",
	data:{},
	url:"http://lc.shudong.wang/api_position.php",
	success:function(data){
		data=JSON.parse(data)
//		console.log(data.data[0].position_id)
		var position_id = data.data[0].position_id;
	$.ajax({
	type:"get",
	data:{"position_id":position_id},
		url:"http://lc.shudong.wang/api_ad.php",
		success:function(data){
			data=JSON.parse(data)
			console.log(data.data)
			var obj = data.data;
			$.each(obj, function(index,value) {
				var heroStr = tempStr(value);
				var $domObj = $(heroStr);
				$("action_box_ul").append($domObj);
			});
		}
	})
	}
})

