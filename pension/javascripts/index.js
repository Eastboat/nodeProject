var navList=['首页','免费资源','课程中心','IT学院','学院故事','学院故事','学院故事']
	var navStr='<ul>'
	for(var i in navList) {
		navStr += '<li><a>'+navList[i]+'</a></li>';
	}
	navStr+='</ul>'

	document.getElementById("navList").innerHTML=navStr;


	$(function(){
		$('#login').click(function(){
			alert("登录")
		})
	})