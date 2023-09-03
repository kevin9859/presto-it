const navbar = document.getElementById('navbar');
const handleScroll = function(){
  const scrolled = window.scrollY;
 
  if(scrolled > 80){
  navbar.classList.add("scrolled");
}else{
  navbar.classList.remove("scrolled");
}
} 

document.addEventListener('scroll',handleScroll);