console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='new value';
var img=document.getElementById('madi');
function moveRight(){
marginLeft=marginLeft+10;
    
}
img.onclick=function(){
img.style.marginLeft='100px';
var interval=setInterval(moveRight,100)
};