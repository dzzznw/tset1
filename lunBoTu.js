function byId(id){
    return typeof id=="string"?document.getElementById(id):id;
}
var index=0,time,
    dots=byId("dots").getElementsByTagName("li"),
    pics=byId("banner").getElementsByTagName("div"),
    all=byId("all"),
    len=pics.length;
all.onmouseover=function(){
    if(time){
        clearInterval(time);
    }
};
all.onmouseout=function(){
    time=setInterval(function(){
            index++;
            if(index >= len){
                index = 0;
            }
            changeImg();
        },1800);
};
all.onmouseout();
for(var b=0;b<len;b++){
    dots[b].id=b;
    //给所有的a添加id属性
    dots[b].onclick=function(){
        index=this.id;
        changeImg();
    }
}
function changeImg() {
    //遍历所有图片，以及点击框
    for (var i=0;i<len;i++){
        //所有的图片获得display：none都将隐藏
        pics[i].style.display="none";
        
    }
    //根据index索引找到当前的div，并将它显示出来
        pics[index].style.display="block";
    //根据index索引找到当前的li,点击框的背景色缩着轮播图的变化，变化到相应的点击框
        
}