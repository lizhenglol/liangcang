        var box1_ul =document.getElementById("box1_ul");
		var point =document.getElementById("box2_ul").getElementsByTagName("li");
		var min_box1 =document.getElementById("min_box");
		var box_button1 =document.getElementById("box_button1");
		var box_button2 =document.getElementById("box_button2");
		var min_Bigbox = document.getElementById("min_Bigbox")
//		var action_box_right =document.getElementById("action_box_right")
//		var action_box_left =document.getElementById("action_box_left")
		var action_a=0;
		var time =setInterval(lb,3000)
		box_button1.onclick=function(){
			lb2()
			clearInterval(time)
		}
		box_button2.onclick=function(){
			lb()
			clearInterval(time)
		}
		var arr = ['http://imgs-qn.iliangcang.com/ware/upload/orig/2/381/381814.jpg',
					'http://imgs-qn.iliangcang.com/ware/upload/orig/2/381/381815.jpg',
					'http://imgs-qn.iliangcang.com/ware/upload/orig/2/381/381816.jpg',
					'http://imgs-qn.iliangcang.com/ware/upload/orig/2/381/381817.jpg',
					'http://imgs-qn.iliangcang.com/ware/upload/orig/2/381/381818.jpg']
		
		function lb(){
			
			if(action_a==5){
				box1_ul.style.marginLeft="0";
				action_a=0;
			}
			action_a++;
			startMove(box1_ul,{"margin-left":action_a*(-350)});
			for (var i = 0; i < point.length; i++) {
				point[i].className="";

				
				
			}
			point[action_a>=5?0:action_a].className="action_box_point_now"
			min_Bigbox.style.backgroundImage="url("+arr[action_a]+")";
			    
		}
		function lb2(){
			
			if(action_a==0){
				box1_ul.style.marginLeft="0";
				action_a=5;
			}
			action_a--;
			startMove(box1_ul,{"margin-left":action_a*(-350)});
			for (var i = 0; i < point.length; i++) {
				point[i].className=""
			}
			    point[action_a<=-1?5:action_a].className="action_box_point_now"
			min_Bigbox.style.backgroundImage="url("+arr[action_a]+")";
			    
		}
		min_box.onmousemove=function(){
			clearInterval(time)
			
		}
		min_box.onmouseout=function(){
			time =setInterval(lb,3000)
			
		}
		for (var i = 0; i < point.length; i++) {
			point[i].index=i;

			
			point[i].onclick=function(){

				
				clearInterval(time)
				startMove(box1_ul,{"margin-left":this.index*(-350)});
			for (var j = 0; j < point.length; j++) {
				point[j].className="";
				
				
			}
			    action_a=this.index
			    point[action_a].className="action_box_point_now";
			    min_Bigbox.style.backgroundImage="url("+arr[action_a]+")";
			    
			}
		}

