function showMenu(){

    var x = document.getElementById("navigation");
    var y = screen.width;
    var mobile = 420;

    if (x.style.display === "none" && y < mobile) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    // if (y > mobile){
    //     x.style.display = "block";
    // }
}




// var hamburger = document.querySelector(".burger");
// // On click
// hamburger.addEventListener("click", function() {
// // Toggle class "is-active"
// hamburger.classList.toggle("is-active");
//     document.getElementById("sideNav").classList.toggle("active");
//     document.getElementById("topNav").classList.toggle("active");
//     // document.getElementById("sideNav").classList.toggle("active");

// // Do something else, like open/close menu
// });
// function showEnv(){
//     document.getElementById("env-extended").classList.toggle("env-active");
// }




