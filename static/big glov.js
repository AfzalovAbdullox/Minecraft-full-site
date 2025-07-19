let // dele = document.querySelector(".details"),
    // delek = document.querySelector(".detailk"),
    // deled = document.querySelector(".detaild"),
    pcdown = document.querySelector(".pcdownloadminecraftos"),

    consedelet = document.querySelector(".conseptionowerworld"),
    conseption = document.querySelectorAll(".conseption"),
    mix = document.querySelector(".mipmox"),
    content = document.querySelector(".container"),
    fontermail = document.querySelector(".domineminecraftinfomicrosoft"),
    consterog = document.querySelector(".conetiosminecraftforwindowsormacprogreasmarketplase"),
    gm1 = document.querySelector(".games1"),
    gm2 = document.querySelector(".games2"),
    gm3 = document.querySelector(".games3"),
    gm4 = document.querySelector(".games4"),
    cdf1 = document.querySelector(".containerdf1"),
    cdf2 = document.querySelector(".containerdf2"),
    cdf3 = document.querySelector(".containerdf3"),
    cdf4 = document.querySelector(".containerdf4");


// dele.addEventListener("click", () => {
//
//     dele.classList.add("bofe")
//     deled.classList.remove("bofe2")
//     delek.classList.remove("bofe3")
//     consterog.style.display = "flex"
//     fontermail.style.display = "none"
//
//
// })
// delek.addEventListener("click", () => {
//     delek.classList.add("bofe3")
//     dele.classList.remove("bofe")
//     deled.classList.remove("bofe2")
//
// })
// deled.addEventListener("click", () => {
//     deled.classList.add("bofe2")
//     dele.classList.remove("bofe")
//     delek.classList.remove("bofe3")
//
// })
consedelet.addEventListener("click", () => {
    mix.classList.toggle("noni12sdd")
    content.classList.toggle("nodelaud")
    conseption.forEach(item => {
        item.classList.toggle("delete")


    })

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














































