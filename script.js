const ImgContainer = document.querySelector(".imgContainer");
const Info = document.querySelector(".info");
const AnimText1 = document.querySelector(".anim-text1");
const AnimText2 = document.querySelector(".anim-text2");



function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

window.addEventListener("scroll",() =>{
   let offSetY = window.scrollY;
   ImgContainer.style.transform = `translateY(${offSetY * 0.1}px)`
   Info.style.transform = `translate(${offSetY * 0.3}px,${offSetY * 0.1}px)`
   AnimText1.style.transform = `translateX(${offSetY * 1.3}px)`
   AnimText2.style.transform = `translateX(${-offSetY * 1.3}px)`
})

const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Coder";
            }, 0);
            setTimeout(() => {
                text.textContent = "Web Developer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Frontend Developer";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);


