//Initializing the btns in variables
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const hoursHeading = document.querySelector(".hoursHeading");
const minutesHeading = document.querySelector(".minutesHeading");
const secondsHeading = document.querySelector(".secondsHeading");
const headings = document.querySelectorAll(".heading")

//Initializing the events 
startBtn.addEventListener("click", startFun)


function startFun() {

    let myTimer = setInterval(() => {
        secondsHeading.textContent = +secondsHeading.textContent + 1;

        if (secondsHeading.textContent == 60) {
            secondsHeading.textContent = 0;
            minutesHeading.textContent = +minutesHeading.textContent + 1;
            if (minutesHeading.textContent == 60) {
                minutesHeading.textContent = 0
                hoursHeading.textContent = +hoursHeading.textContent + 1;
            }
        }
        headings.forEach(elem => {
            if (Number(elem) < 10) {
                elem.textContent = `0${elem.textContent}`
            } else {
                elem.textContent = elem.textContent
            }
        })

    }, 1000)
    pauseBtn.addEventListener("click", pauseFun)

    function pauseFun() {
        clearInterval(myTimer)
    }
    resetBtn.addEventListener("click", resetFun)

    function resetFun() {
        clearInterval(myTimer)
        headings.forEach(elem => {
            elem.innerHTML = 0;
        })
    }
}