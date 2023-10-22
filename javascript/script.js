const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav =document.getElementById('navBar');

if(bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}
 
if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}



var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tab_items = document.querySelectorAll(".tab_item"); 

tab_lists.forEach(function(list){
  list.addEventListener("click", function(){
    var tab_data = list.getAttribute("data-tc");
    
    tab_lists.forEach(function(list){
      list.classList.remove("active");
    });
    list.classList.add("active");
    
    tab_items.forEach(function(item){
      var tab_class = item.getAttribute("class").split(" ");
      if(tab_class.includes(tab_data)){
        item.style.display = "block";
      }
      else{
        item.style.display = "none";
      }
      
    })
    
  })
})