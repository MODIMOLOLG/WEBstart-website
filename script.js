setTimeout(() => {
    document.getElementById("AllContainer").style.display = "flex";
}, 1550);

setTimeout(() => {
    document.getElementById("bg").style.opacity = "100%";
    
    document.getElementById("AllContainer").style.opacity = "100%";
}, 1600);

var IsTopbarOpen = false
document.getElementById("menu").addEventListener("click", () => {
    if(!IsTopbarOpen){
        IsTopbarOpen=true;
        document.getElementById("SideBar").style.marginLeft="1rem";
        document.getElementById("globalBlur").style.backdropFilter = "blur(5px)";
        document.getElementById("globalBlur").style.pointerEvents = "all";
        document.getElementById("globalBlur").addEventListener("click", () => {
            closeTopbar();
        });
    }
    else{
        closeTopbar();
    }
});
function closeTopbar() {
    document.getElementById("SideBar").style.marginLeft="-22rem";
    document.getElementById("globalBlur").style.backdropFilter = "none";
    document.getElementById("globalBlur").style.pointerEvents = "none";
    IsTopbarOpen=false;
}

document.getElementById("form").addEventListener("click", () => {
    FormOpen();
    window.scroll({
        top: document.getElementById("formAct").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });
});
document.getElementById("formAct").addEventListener("click", () => {
    FormOpen();
});

var IsFormOpen = false;
function FormOpen() {
    if(!IsFormOpen){
        setTimeout(() => {
            window.scroll({
                top: document.getElementById("formAct").getBoundingClientRect().top + window.scrollY - 100,
                behavior: 'smooth'
            });
        }, 500);

        document.getElementById("inv").classList.remove("ImagePictureBackAnim");
        document.getElementById("formAct").classList.remove("ImageCardBackAnim");
    
        document.getElementById("inv").style.filter = "blur(15px) brightness(30%)";
        document.getElementById("formAct").style.height = "44rem";
        document.getElementById("formAct").style.cursor = "auto";
        document.getElementById("infoForm").style.height = "0";

        document.getElementById("formContainer").style.top = "0";

        IsFormOpen = true;
    }
}

document.getElementById("submit").addEventListener("click", () => {

    document.getElementById("inv").style.filter = "blur(0) brightness(30%)";
    document.getElementById("infoForm").textContent = "Your enquery was succesfully sent!";
    document.getElementById("formAct").style.height = "20rem";


    document.getElementById("infoForm").style.height = "100%";

    document.getElementById("formContainer").style.top = "20rem";
});

document.getElementById("n1").addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
    closeTopbar();
});
document.getElementById("n2").addEventListener("click", () => {
    window.scroll({
        top: document.getElementById("p2").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });
    closeTopbar();
});
document.getElementById("n3").addEventListener("click", () => {
    window.scroll({
        top: document.getElementById("p3").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });
    closeTopbar();
});
document.getElementById("n4").addEventListener("click", () => {
    window.scroll({
        top: document.getElementById("p4").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });
    closeTopbar();
});
document.getElementById("n5").addEventListener("click", () => {
    window.scroll({
        top: document.getElementById("p5").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });
    closeTopbar();
});
document.getElementById("n6").addEventListener("click", () => {
    window.scroll({
        top: document.getElementById("p6").getBoundingClientRect().top + window.scrollY - 200,
        behavior: 'smooth'
    });
    closeTopbar();
});
document.getElementById("n7").addEventListener("click", () => {
    window.scroll({
        top: 9999999,
        behavior: 'smooth'
    });
    closeTopbar();
});