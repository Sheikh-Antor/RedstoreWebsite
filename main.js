var toggleImg=document.getElementById('toggleImg');
var menuItems=document.getElementById('menuItems');
menuItems.style.maxHeight="0px";


toggleImg.addEventListener('click',function(){
if( menuItems.style.maxHeight=="0px"){
        menuItems.style.maxHeight="200px"
    }else{
        menuItems.style.maxHeight="0px"
    }

})
