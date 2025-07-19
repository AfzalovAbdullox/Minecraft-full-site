"use strict";

let mp = document.querySelector(".minecraftpng"),
    mp1 = document.querySelector(".minecraftpng1"),
    mp2 = document.querySelector(".minecraftpng2"),
    mp3 = document.querySelector(".minecraftpng3"),
    mmc = document.querySelector(".minematiccolaction"),
    m = document.querySelector(".Minecraft5"),
    md = document.querySelector(".Minecraft52"),
    ml = document.querySelector(".Minecraft53"),
    med = document.querySelector(".Minecraft54"),
    tmos = document.querySelector(".traylerminecraftvideos"),
    tm2os = document.querySelector(".traylerminecraftvideos2os"),
    tm3os = document.querySelector(".traylerminecraftvideos3os"),
    tm4os = document.querySelector(".traylerminecraftvideos4os"),
    divcollect = document.querySelector(".divcollectimgminecraftfilebigdiv2"),
    imges = document.querySelectorAll(".minecraftcollektpathimgbigdiv"),
    right = document.getElementById("right"),
    left = document.getElementById("left"),
    index = 0,
    mml = document.querySelector(".mineminecraftlogo"),
    mml2 = document.querySelector(".mineminecraftlogo2"),
    mml3 = document.querySelector(".mineminecraftlogo3"),
    mml4 = document.querySelector(".mineminecraftlogo4"),
    gm1 = document.querySelector(".games1"),
    gm2 = document.querySelector(".games2"),
    gm3 = document.querySelector(".games3"),
    gm4 = document.querySelector(".games4"),
    cdf1 = document.querySelector(".containerdf1"),
    cdf2 = document.querySelector(".containerdf2"),
    cdf3 = document.querySelector(".containerdf3"),
    cdf4 = document.querySelector(".containerdf4");


mp.addEventListener("click", () => {
    let url = "/static/img/Homepage_Hero-A-1920_Fall-Game-Drop_2560x932.jpg"
    mp.classList.add("vober")
    mp1.classList.remove("vober")
    mp2.classList.remove("vober")
    mp3.classList.remove("vober")
    mmc.style.backgroundImage = `url(${url})`


})

mp1.addEventListener("click", () => {
    let url = "/static/img/Homepage_Hero_Realms_2560x932_01.jpg"
    mp.classList.remove("vober")
    mp1.classList.add("vober")
    mp2.classList.remove("vober")
    mp3.classList.remove("vober")
    mmc.style.backgroundImage = `url(${url})`
})
mp2.addEventListener("click", () => {
    let url = "/static/img/HP-Takeover_Media-Block-B_GA-Add-ons_1332x888.jpg"
    mp.classList.remove("vober")
    mp1.classList.remove("vober")
    mp2.classList.add("vober")
    mp3.classList.remove("vober")
    mmc.style.backgroundImage = `url(${url})`
})
mp3.addEventListener("click", () => {
    let url = "/static/img/Homepage_Hero_Tips-for-Beginners_2560x932_01.avif"
    mp.classList.remove("vober")
    mp1.classList.remove("vober")
    mp2.classList.remove("vober")
    mp3.classList.add("vober")
    mmc.style.backgroundImage = `url(${url})`
})
m.addEventListener("click", () => {
    tmos.style.display = "flex"
    tm2os.style.display = "none"
    tm3os.style.display = "none"
    tm4os.style.display = "none"
    m.style.backgroundColor = "#3D3938"
    md.style.backgroundColor = "#262423"
    ml.style.backgroundColor = "#262423"
    med.style.backgroundColor = "#262423"
    mml.classList.add("comelogy")
    mml2.classList.remove("comelogy")
    mml3.classList.remove("comelogy")
    mml4.classList.remove("comelogy")

})
md.addEventListener("click", () => {
    tmos.style.display = "none"
    tm2os.style.display = "flex"
    tm3os.style.display = "none"
    tm4os.style.display = "none"
    m.style.backgroundColor = "#262423"
    md.style.backgroundColor = "#3D3938"
    ml.style.backgroundColor = "#262423"
    med.style.backgroundColor = "#262423"
    mml.classList.remove("comelogy")
    mml2.classList.add("comelogy")
    mml3.classList.remove("comelogy")
    mml4.classList.remove("comelogy")


})
ml.addEventListener("click", () => {
    tmos.style.display = "none"
    tm2os.style.display = "none"
    tm3os.style.display = "flex"
    tm4os.style.display = "none"
    m.style.backgroundColor = "#262423"
    md.style.backgroundColor = "#262423"
    ml.style.backgroundColor = "#3D3938"
    med.style.backgroundColor = "#262423"
    mml.classList.remove("comelogy")
    mml2.classList.remove("comelogy")
    mml3.classList.add("comelogy")
    mml4.classList.remove("comelogy")


})
med.addEventListener("click", () => {
    tmos.style.display = "none"
    tm2os.style.display = "none"
    tm3os.style.display = "none"
    tm4os.style.display = "flex"
    m.style.backgroundColor = "#262423"
    md.style.backgroundColor = "#262423"
    ml.style.backgroundColor = "#262423"
    med.style.backgroundColor = "#3D3938"
    mml.classList.remove("comelogy")
    mml2.classList.remove("comelogy")
    mml3.classList.remove("comelogy")
    mml4.classList.add("comelogy")


})

gm1.addEventListener("click", () => {
    cdf1.classList.toggle("vbbb")
    cdf2.classList.remove("vbbb")
    cdf3.classList.remove("vbbb")
    cdf4.classList.remove("vbbb")
})
gm2.addEventListener("click", () => {
    cdf1.classList.remove("vbbb")
    cdf2.classList.toggle("vbbb")
    cdf3.classList.remove("vbbb")
    cdf4.classList.remove("vbbb")
})
gm3.addEventListener("click", () => {
    cdf1.classList.remove("vbbb")
    cdf2.classList.remove("vbbb")
    cdf3.classList.toggle("vbbb")
    cdf4.classList.remove("vbbb")
})
gm4.addEventListener("click", () => {
    cdf1.classList.remove("vbbb")
    cdf2.classList.remove("vbbb")
    cdf3.classList.remove("vbbb")
    cdf4.classList.toggle("vbbb")
})
cdf1.addEventListener("click", () => {
    if (event.target === cdf1) {
        cdf1.classList.toggle("vbbb")
    }
})
cdf2.addEventListener("click", () => {
    if (event.target === cdf2) {
        cdf2.classList.toggle("vbbb")
    }
})
cdf3.addEventListener("click", () => {
    if (event.target === cdf3) {
        cdf3.classList.toggle("vbbb")
    }
})
cdf4.addEventListener("click", () => {
    if (event.target === cdf4) {
        cdf4.classList.toggle("vbbb")
    }
})

function changeright() {
    if (index > imges.length - 1) {
        index = 0
    }
    if (index < 0) {
        index = imges.length - 1
    }
    divcollect.style.transform = `translateX(${index * -200}px)`

}

right.addEventListener("click", () => {
    index++
    changeright()
})
left.addEventListener("click", () => {
    index--
    changeright()
})











