/*
* @Author: sisi
* @Date:   2018-09-17 20:54:32
* @Last Modified by:   sisi
* @Last Modified time: 2018-10-13 15:04:29
*/
window.onload=function(){
	var wrap = document.getElementsByClassName('carousel-inner')[0];
	var left = document.getElementById('carousel-left');
	var right = document.getElementById('carousel-right');
    var slide=document.getElementsByClassName('slide')[0];
	wrap.style.left = '-520px';
	var ind = 0;

	//下一个
	function next() {
		ind++;
		if(ind > 4) {
			ind = 0;
		}
		var newleft;
		if(wrap.style.left == '-2600px') {
			newleft = -520;
		} else {
			newleft = parseInt(wrap.style.left) - 520;
		}
		wrap.style.left = newleft + 'px';

		showCurrentDot();
	}
	//上一个
	function previous() {
		ind--;
		if(ind < 0) {
			ind = 4;
		}
		var newleft;
		if(wrap.style.left == '0px') {
			newleft = -2080;
		} else {
			newleft = parseInt(wrap.style.left) + 520;
		}
		wrap.style.left = newleft + 'px';
		showCurrentDot();
	}
	right.onclick = function() {
		next();
	}
	left.onclick = function() {
		previous();
	}

	var id=setInterval(next, 2000);
	wrap.onmousemove=function(){
		clearInterval(id);
	}
	wrap.onmouseout=function(){
		next();
	}


	var btns = document.getElementsByClassName('carousel-indicators')[0].children;
	function showCurrentDot() {
		var len=btns.length;
		for(var i = 0;i < len; i++) {
			btns[i].className = "";				
		}
		btns[ind].className = "on";
	}
	console.log(btns);
	var btn = [];
	btn.slice.call(btns, 0).forEach(function(item, index, btns) {
		item.onclick = function() {
			var dis = ind - index;
			wrap.style.left = (parseInt(wrap.style.left) + dis * 600) + "px";
			ind = index;
			showCurrentDot();
		}
	})

}