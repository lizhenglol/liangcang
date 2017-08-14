
		$(".li_4").mouseenter(function(){
			$(this).css({
				"color":"#ccc",
				"background":"#292F34",
			})
			$("#li_4_shop").show();
		})
		$(".li_4").mouseleave(function(){
			$(this).css({
				"color":"",
				"background":"",
			})
			$("#li_4_shop").hide();
		})
		$(".li_6").mouseenter(function(){
			$(this).css({
				"color":"#ccc",
				"background":"#292F34",
			})
			$(".li_6info").show();
		})
		$(".li_6").mouseleave(function(){
			$(this).css({
				"color":"",
				"background":"",
			})
			$(".li_6info").hide();
		})
		$(".header_title_f1 li").mouseenter(function(){
			var i = $(this).index();
			$(this).addClass("f1_title").siblings().removeClass("f1_title");
			$(".header_title_f2 li").eq(i).show().siblings().hide()
		})
		
		$(".header_title_f2 li").mouseleave(function(){
			var i = $(this).index();
			$(".header_title_f1 li").removeClass("f1_title");
			$(".header_title_f2 li").eq(i).slideUp()
		})
		var flag = true;
		$("#search_logo").click(function(){

			if(flag==false){
				flag=true;
				if($("#search_input").val()!=""){
				localStorage.searchValue = $("#search_input").val();
                self.location="search.html";
					return
				}
				$(".search").animate({left:"280px"},300,function(){
					$(".search").css({
					"animation": "",
				})
				});
			}else{
				flag=false;
				$(".search").animate({left:"0px"},300,function(){
					$(".search").css({
					"animation": "0.1s  linear ss",
				})
				});
			}
			
		   
		})
		var nav = document.getElementById("header");
		var nav2 = document.getElementById("main");
        var backTop = document.getElementById("backTop");
			document.onscroll = function(){
			
			var t = document.body.scrollTop || document.documentElement.scrollTop;
			if(t >= nav2.offsetTop){
			
			nav.className = "fixed";
			}else{
			
			nav.className = " ";
			}
			if(t >= nav2.offsetTop){
			
			$("#backTop").fadeIn()
			}else{
			
			$("#backTop").fadeOut()
			}
			}
        $("#service_our").mouseover(function(){
        	$("#hand").animate({
        		left: "-20px"
        	},500)
        	    		
        	
        })
        $("#service_our").mouseleave(function(){
        	$("#hand").animate({
        		left: "0px",
        	},500)
        })
       $("#footer_left_code").mousemove(function(){
       	$("#twocode_out").fadeIn()
       })
       $("#footer_left_code").mouseleave(function(){
       	$("#twocode_out").hide()
       	
       })               	
