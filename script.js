const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const xMark = document.querySelector(".x-mark")
const li = document.querySelectorAll(".nav-mobile li")



hamburger.addEventListener("click",()=>{
    console.log(navMobile,window.innerWidth)
    toggleMenu()

})

function toggleMenu () {
    if (window.innerWidth < 1024) {
        navMobile.classList.toggle("active")    
        document.body.style.overflow = "hidden"
    }
}

function closeMenu () {
    navMobile.classList.remove("active")
    document.body.style.overflow = "auto"
}

xMark.addEventListener("click",closeMenu)

li.forEach(li=> {
    li.addEventListener("click",closeMenu)
})
