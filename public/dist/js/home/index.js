"use strict";var a=1;console.log(a);var navList=["首页","免费资源","课程中心","IT学院","学院故事","IT学院","学院故事"],navStr="<ul>";for(var i in navList)navStr+="<li><a>"+navList[i]+"</a></li>";navStr+="</ul>",document.getElementById("navList").innerHTML=navStr;