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
    //�����е�a���id����
    dots[b].onclick=function(){
        index=this.id;
        changeImg();
    }
}
function changeImg() {
    //��������ͼƬ���Լ������
    for (var i=0;i<len;i++){
        //���е�ͼƬ���display��none��������
        pics[i].style.display="none";
        
    }
    //����index�����ҵ���ǰ��div����������ʾ����
        pics[index].style.display="block";
    //����index�����ҵ���ǰ��li,�����ı���ɫ�����ֲ�ͼ�ı仯���仯����Ӧ�ĵ����
        
}