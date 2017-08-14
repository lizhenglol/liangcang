        var action_box_ul =document.getElementById("action_box_ul");
		var point =document.getElementById("action_box_point").getElementsByTagName("li");
		var action_box =document.getElementById("action_box");
		var box_left =document.getElementById("box_left");
		var box_right =document.getElementById("box_right");
		var action_box_right =document.getElementById("action_box_right")
		var action_box_left =document.getElementById("action_box_left")
		var action_a=0;
		var time =setInterval(lb,3000)
		function lb(){
			
			if(action_a==8){
				action_box_ul.style.marginLeft="0";
				action_a=0;
			}
			action_a++;
			startMove(action_box_ul,{"margin-left":action_a*(-1000)});
			for (var i = 0; i < point.length; i++) {
				point[i].className=""
			}
			    point[action_a>=8?0:action_a].className="action_box_point_now"
		}
		function lb2(){
			
			if(action_a==0){
				action_box_ul.style.marginLeft="0";
				action_a=8;
			}
			action_a--;
			startMove(action_box_ul,{"margin-left":action_a*(-1000)});
			for (var i = 0; i < point.length; i++) {
				point[i].className=""
			}
			    point[action_a<=-1?8:action_a].className="action_box_point_now"
		}
		action_box.onmousemove=function(){
			clearInterval(time)
			box_right.style.display="block"
			box_left.style.display="block"
		}
		action_box.onmouseout=function(){
			time =setInterval(lb,3000)
			box_right.style.display=""
			box_left.style.display=""
		}
		for (var i = 0; i < point.length; i++) {
			point[i].index=i;
			point[i].onclick=function(){
				
				clearInterval(time)
				startMove(action_box_ul,{"margin-left":this.index*(-1000)});
			for (var j = 0; j < point.length; j++) {
				point[j].className="";
				
			}
			    action_a=this.index
			    point[action_a].className="action_box_point_now";
			}
		}