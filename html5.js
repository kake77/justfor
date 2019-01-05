

function menu(){
	var element =document.getElementById("nav");
	if(element.clientHeight==50){
	element.style.height=((window.innerHeight)+"px");
	}else{
	element.style.height="50px";
	}
}

function setHeight(){
var element =document.getElementById("banner");
element.style.height=((window.innerHeight)+"px");

element =document.getElementById("banner-spacer1");
element.style.width=(((window.innerWidth-950)/2)+"px");

element =document.getElementById("header1");
element.style.lineHeight=((window.innerHeight*0.1)+"px");
element.style.fontSize=((window.innerHeight*0.07)+"px");


if(window.innerHeight< window.innerWidth){//‰¡’·

element =document.getElementById("block1");
element.style.height=((window.innerHeight/10)+"px");

element =document.getElementById("block2");
element.style.height=((window.innerHeight*0.15)+"px");

element =document.getElementById("block3-1");
element.style.height=((window.innerHeight*0.35)+"px");
element.style.width=((window.innerHeight*0.35)+"px");
element.style.lineHeight=((window.innerHeight*0.12)+"px");
element.style.fontSize=((window.innerHeight*0.12)+"px");

element =document.getElementById("block3-2");
element.style.height=((window.innerHeight*0.35)+"px");
element.style.width=((window.innerHeight*0.35)+"px");
element.style.lineHeight=((window.innerHeight*0.24)+"px");
element.style.fontSize=((window.innerHeight*0.24)+"px");

element =document.getElementById("block3-3");
element.style.height=((window.innerHeight*0.35)+"px");
element.style.width=((window.innerHeight*0.35)+"px");
element.style.lineHeight=((window.innerHeight*0.12)+"px");
element.style.fontSize=((window.innerHeight*0.12)+"px");

element =document.getElementById("banner-spacer1");
element.style.width=(((window.innerWidth-(window.innerHeight*1.05))*0.35)+"px");

element =document.getElementById("banner-spacer2");
element.style.width=(((window.innerWidth-(window.innerHeight*1.05))*0.15)+"px");

element =document.getElementById("banner-spacer3");
element.style.width=(((window.innerWidth-(window.innerHeight*1.05))*0.15)+"px");

element =document.getElementById("circle-spacer1");
element.style.margin=((window.innerHeight*0.055)+"px");

element =document.getElementById("circle-spacer2");
element.style.margin=((window.innerHeight*0.055)+"px");

element =document.getElementById("circle-spacer3");
element.style.margin=((window.innerHeight*0.055)+"px");

element =document.getElementById("block4");
element.style.height=((window.innerHeight/5)+"px");
element.style.lineHeight=((window.innerHeight/5)+"px");
element.style.fontSize=((window.innerHeight/5)+"px");

element =document.getElementById("block5");
element.style.height=((window.innerHeight/5)+"px");
element.style.lineHeight=((window.innerHeight/10)+"px");
element.style.fontSize=((window.innerHeight/10)+"px");

element =document.getElementById("cource1");
element.style.float=("left");

element =document.getElementById("cource2");
element.style.float=("left");

element =document.getElementById("cource3");
element.style.float=("left");

element =document.getElementById("cource-spacer1");
element.style.float=("left");
element.style.width=("5%");

element =document.getElementById("cource-spacer2");
element.style.float=("left");
element.style.width=("7.5%");

element =document.getElementById("cource-spacer3");
element.style.float=("left");
element.style.width=("7.5%");

element =document.getElementById("access1");
element.style.float=("left");
element.style.width=("40%");

element =document.getElementById("access2");
element.style.float=("left");
element.style.width=("40%");
element.style.height=((parseInt(window.getComputedStyle(document.getElementById("access1")).height))+"px");

}else{//c’·

element =document.getElementById("block1");
element.style.height=((window.innerHeight/10)+"px");

element =document.getElementById("block2");
element.style.height=((window.innerHeight*0.2)+"px");

element =document.getElementById("block3-1");
element.style.height=((window.innerWidth*0.28)+"px");
element.style.width=((window.innerWidth*0.28)+"px");
element.style.lineHeight=((window.innerWidth*0.1)+"px");
element.style.fontSize=((window.innerWidth*0.1)+"px");

element =document.getElementById("block3-2");
element.style.height=((window.innerWidth*0.28)+"px");
element.style.width=((window.innerWidth*0.28)+"px");
element.style.lineHeight=((window.innerWidth*0.2)+"px");
element.style.fontSize=((window.innerWidth*0.2)+"px");

element =document.getElementById("block3-3");
element.style.height=((window.innerWidth*0.28)+"px");
element.style.width=((window.innerWidth*0.28)+"px");
element.style.lineHeight=((window.innerWidth*0.1)+"px");
element.style.fontSize=((window.innerWidth*0.1)+"px");

element =document.getElementById("banner-spacer1");
element.style.width=((window.innerWidth*0.05)+"px");

element =document.getElementById("banner-spacer2");
element.style.width=((window.innerWidth*0.03)+"px");

element =document.getElementById("banner-spacer3");
element.style.width=((window.innerWidth*0.03)+"px");

element =document.getElementById("circle-spacer1");
element.style.margin=((window.innerWidth*0.04)+"px");

element =document.getElementById("circle-spacer2");
element.style.margin=((window.innerWidth*0.04)+"px");

element =document.getElementById("circle-spacer3");
element.style.margin=((window.innerWidth*0.04)+"px");

element =document.getElementById("block4");
element.style.height=((window.innerHeight*0.15)+"px");
element.style.fontSize=((window.innerWidth*0.2)+"px");

element =document.getElementById("block5");
element.style.height=((window.innerHeight*0.15)+"px");
element.style.fontSize=((window.innerWidth*0.09)+"px");

element =document.getElementById("cource1");
element.style.float=("none");
element.style.display=("block");
element.style.width=("100%");

element =document.getElementById("cource2");
element.style.float=("none");
element.style.display=("block");
element.style.width=("100%");

element =document.getElementById("cource3");
element.style.float=("none");
element.style.display=("block");
element.style.width=("100%");

element =document.getElementById("cource-spacer1");
element.style.float=("none");
element.style.width=("0");

element =document.getElementById("cource-spacer2");
element.style.float=("none");
element.style.width=("0");

element =document.getElementById("cource-spacer3");
element.style.float=("none");
element.style.width=("0");

element =document.getElementById("cource4");
element.style.width=("70%");

element =document.getElementById("cource5");
element.style.width=("70%");

element =document.getElementById("cource6");
element.style.width=("70%");

element =document.getElementById("access1");
element.style.float=("none");
element.style.width=("auto");

element =document.getElementById("access2");
element.style.float=("none");
element.style.width=("auto");
element.style.height=((parseInt(window.getComputedStyle(element).width))+"px");

}


}

window.onload=setHeight;