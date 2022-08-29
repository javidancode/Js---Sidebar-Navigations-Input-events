
let showsidebar = document.querySelector(".show-sidebar");
let hidesidebar = document.querySelector(".close-sidebar");

let sidebar = document.querySelector(".sidebar");



showsidebar.addEventListener("click",function(){
    if(sidebar.classList.contains("hide")){
        sidebar.classList.remove("hide");
    }
})

hidesidebar.addEventListener("click",function(){
    if(!sidebar.classList.contains("hide")){
        sidebar.classList.add("hide");
    }
})