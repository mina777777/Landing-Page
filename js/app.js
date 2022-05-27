// class="your-active-class"
const section1= document.getElementById("section1");
const section3= document.getElementById("section3");
console.log(section1)
const show = document.getElementById('show');
window.onscroll = function() {
    if(this.scrollY >= 466) {
        show.classList.add("show");
    }else {
        show.classList.remove("show");
    }
}
window.onscroll = function() {
    if(this.scrollY > 446) {
        section1.classList.add("your-active-class")
    }else {
        section1.classList.remove("your-active-class")
    }
    if(this.scrollY > 1600) {
        section3.classList.add("your-active-class")
    }else {
        section3.classList.remove("your-active-class")
    }
}
// get Links from HTML 
const linkOne = document.getElementById('linkOne');
const linkTwo = document.getElementById('linkTwo');
const linkThree = document.getElementById('linkThree');
const linkFour = document.getElementById('linkFour');
linkOne.addEventListener('click',function(){
    window.scrollTo({
        top:446,
        behavior:"smooth"
    })
})
linkTwo.addEventListener('click',function(){
    window.scrollTo({
        top:982,
        behavior:"smooth"
    })
})
linkThree.addEventListener('click',function(){
    window.scrollTo({
        top:1628,
        behavior:"smooth"
    })
})
linkFour.addEventListener('click',function(){
    window.scrollTo({
        top:2186,
        behavior:"smooth"
    })
})
