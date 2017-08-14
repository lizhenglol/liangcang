        var min_box = document.getElementById("min_box1");
		var min_Fdbox = document.getElementById("min_Fdbox");
		var min_Bigbox = document.getElementById("min_Bigbox");
		min_box.onmouseover = function() {
			min_Bigbox.style.display = "block";
		    min_Fdbox.style.display = "block"
		}
		min_box.onmouseout = function() {
			min_Bigbox.style.display = "";
			min_Fdbox.style.display = ""
		}
		min_box.onmousemove = function() {
			var e = event || arguments[0];
			var x = e.clientX - min_box.offsetLeft - min_Fdbox.offsetWidth / 2;
			var y = e.clientY - min_box.offsetTop - min_Fdbox.offsetHeight / 2;
			if (x <= 0) {
				min_Fdbox.style.left = 0 + "px";
			} else if (x >= (min_box.offsetWidth - min_Fdbox.offsetWidth)) {
				min_Fdbox.style.left = min_box.offsetWidth - min_Fdbox.offsetWidth + "px";
			} else {
				min_Fdbox.style.left = x + "px";

			}
			if (y <= 0) {
				min_Fdbox.style.top = 0 + "px";
			} else if (y >= (min_box.offsetHeight - min_Fdbox.offsetHeight)) {
				min_Fdbox.style.top = min_box.offsetHeight - min_Fdbox.offsetHeight + "px";
			} else {
				min_Fdbox.style.top = y + "px";

			}
			var wk = 700 / 350;
			var hw = 700 / 350;
          min_Bigbox.style.backgroundPosition=wk*(-min_Fdbox.offsetLeft)+"px"+" "+hw*(-min_Fdbox.offsetTop)+"px"
		}