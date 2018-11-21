const checkBtn = document.querySelector(".check");
const nextBtn = document.querySelector(".next");

const firstLight = document.querySelector(".one");
const secondLight = document.querySelector(".two");
const thirdLight = document.querySelector(".three");
const fourthLight = document.querySelector(".four");
const fifthLight = document.querySelector(".five");

const line = document.querySelector(".line");

const descriptionArea = document.querySelector(".describe p");

let allSignals = [];

const Signal = function (numberFirst, cssFirstClass, blinkOne, numberSecond, cssClassSecond, blinkTwo, lineColor, description) {
    this.numberFirst = numberFirst;
    this.cssFirstClass = cssFirstClass;
    this.blinkOne = blinkOne;
    this.numberSecond = numberSecond;
    this.cssClassSecond = cssClassSecond;
    this.blinkTwo = blinkTwo;
    this.lineColor = lineColor;
    this.description = description;
}

Signal.prototype.addSignal = function () {
    allSignals.push(this);
}

const S1 = new Signal("three", "red", "false", "0", "none", "false", "none", "Sygnał S1: STOP");
const S2 = new Signal("one", "green", "false", "0", "none", "false", "none", "Sygnał S2: Jazda z największą dozwoloną prędkością w odstępie osłoniętym tym semaforem i przy następnym semaforze.");
const S3 = new Signal("one", "green", "true", "0", "none", "false", "none", "Sygnał S3: Jazda z największą dozwoloną prędkością w odstępie osłoniętym tym semaforem, a przy następnym semaforze z prędkością nie przekraczającą 100 km/h.");
const S4 = new Signal("two", "yellow", "true", "0", "none", "false", "none", "Sygnał S4: Jazda z największą dozwoloną prędkością w odstępie osłoniętym tym semaforem, a przy następnym semaforze z prędkością nie przekraczającą 40 lub 60 km/h.");
const S5 = new Signal("two", "yellow", "false", "0", "none", "false", "none", "Sygnał S5: Jazda z największą dozwoloną prędkością w odstępie osłoniętym tym semaforem, a na następnym semaforze sygnał S1 STOP.");
const S6 = new Signal("one", "green", "false", "four", "yellow", "false", "green", "Sygnał S6: Jazda z prędkością nie przekraczającą 100 km/h w odstępie osłoniętym tym semaforem, a przy następnym semaforze z największą dopuszczalną prędkością.");
const S7 = new Signal("one", "green", "true", "four", "yellow", "false", "green", "Sygnał S7: Jazda w odstępie osłoniętym tym semaforem i przy następnym semaforze z prędkością nie przekraczającą 100 km/h.");
const S8 = new Signal("two", "yellow", "true", "four", "yellow", "false", "green", "Sygnał S8: Jazda z prędkością nie przekraczającą 100 km/h w odstępie osłoniętym tym semaforem, a przy następnym semaforze z prędkością nie przekraczającą 40 lub 60 km/h.");
const S9 = new Signal("two", "yellow", "false", "four", "yellow", "false", "green", "Sygnał S9: Jazda z prędkością nie przekraczającą 100 km/h w odstępie osłoniętym tym semaforem, a na następnym semaforze sygnał S1 STOP.");
const S10 = new Signal("one", "green", "false", "four", "yellow", "false", "none", "Sygnał S10: Jazda z prędkością nie przekraczającą 40 km/h w odstępie osłoniętym tym semaforem, a przy następnym semaforze z największą dopuszczalną prędkością.");
const S11 = new Signal("one", "green", "true", "four", "yellow", "false", "none", "Sygnał S11: Jazda z prędkością nie przekraczającą 40 km/h w odstępie osłoniętym tym semaforem, a przy następnym semaforze z prędkością nie przekraczającą 100 km/h.");
const S12 = new Signal("two", "yellow", "true", "four", "yellow", "false", "none", "Sygnał S12: Jazda z prędkością nie przekraczającą 40 km/h w odstępie osłoniętym tym semaforem, a przy następnym semaforze z prędkością nie przekraczającą 40 lub 60 km/h.");
const S13 = new Signal("two", "yellow", "false", "four", "yellow", "false", "none", "Sygnał S13: Jazda z prędkością nie przekraczającą 40 km/h w odstępie osłoniętym tym semaforem, a na następnym semaforze sygnał S1 STOP.");
const S10a = new Signal("one", "green", "false", "four", "yellow", "false", "yellow", "Sygnał S10a: Jazda z prędkością nie przekraczającą 60 km/h w odstępie osłoniętym tym semaforem, a przy następnym semaforze z największą dopuszczalną prędkością.");
const S11a = new Signal("one", "green", "true", "four", "yellow", "false", "yellow", "Sygnał S11a: Jazda z prędkością nie przekraczającą 60 km/h w odstępie osłoniętym tym semaforem, a przy następnym semaforze z prędkością nie przekraczającą 100 km/h.");
const S12a = new Signal("two", "yellow", "true", "four", "yellow", "false", "yellow", "Sygnał S12a: Jazda z prędkością nie przekraczającą 60 km/h w odstępie osłoniętym tym semaforem, a przy następnym semaforze z prędkością nie przekraczającą 40 lub 60 km/h.");
const S13a = new Signal("two", "yellow", "false", "four", "yellow", "false", "yellow", "Sygnał S13a: Jazda z prędkością nie przekraczającą 60 km/h w odstępie osłoniętym tym semaforem, a na następnym semaforze sygnał S1 STOP.");
const Sz = new Signal("three", "red", "false", "five", "white", "true", "none", "Sygnał zastępczy Sz. (Przejazd przy szczególnych założeniach z prędkością 20 lub 40 km/h");

S1.addSignal();
S2.addSignal();
S3.addSignal();
S4.addSignal();
S5.addSignal();
S6.addSignal();
S7.addSignal();
S8.addSignal();
S9.addSignal();
S10.addSignal();
S11.addSignal();
S12.addSignal();
S13.addSignal();
S10a.addSignal();
S11a.addSignal();
S12a.addSignal();
S13a.addSignal();
Sz.addSignal();

function randomItem() {
    let index = Math.floor(Math.random() * allSignals.length);
    let item = allSignals[index];
    allSignals.splice(index, 1);
    if (allSignals.length === 0) {
        descriptionArea.textContent = "To już wszystkie sygnały! Może spróbujesz jeszcze raz?:)"
        // removeAllClasses();
        nextBtn.textContent = "start";
    }
    return item;
}

function removeAllClasses() {
    firstLight.className = "circle one";
    secondLight.className = "circle two";
    thirdLight.className = "circle three";
    fourthLight.className = "circle four";
    fifthLight.className = "circle five";
    line.className = "line";
    descriptionArea.textContent = "";
}

function showItem() {
    const newItem = randomItem();
    if (newItem) {
        removeAllClasses();
        if (newItem.blinkOne === "true") {
            document.querySelector(`.${newItem.numberFirst}`).classList.add(`${newItem.cssFirstClass}`);
            document.querySelector(`.${newItem.numberFirst}`).classList.add("anim");
        } else {
            document.querySelector(`.${newItem.numberFirst}`).classList.add(`${newItem.cssFirstClass}`);
            document.querySelector(`.${newItem.numberFirst}`).classList.remove("anim");
        }
        if (newItem.numberSecond === 0) {
            fourthLight.className = "circle four";
            fifthLight.className = "circle five";
        } else if (newItem.numberSecond === "four" || newItem.numberSecond === "five") {
            if (newItem.blinkTwo === "true") {
                document.querySelector(`.${newItem.numberSecond}`).classList.add(`${newItem.cssClassSecond}`);
                document.querySelector(`.${newItem.numberSecond}`).classList.add("anim");
            } else {
                document.querySelector(`.${newItem.numberSecond}`).classList.add(`${newItem.cssClassSecond}`);
            }
        }
        if (newItem.lineColor === "none") {
            line.className = "line"
        } else if (newItem.lineColor === "yellow") {
            line.classList.add("yellow");
        } else if (newItem.lineColor === "green") {
            line.classList.add("green");
        }
        checkBtn.addEventListener("click", () => {
            descriptionArea.textContent = newItem.description;
        })
        nextBtn.textContent = "następne";
    } else {
        nextBtn.addEventListener("click", removeAllClasses);
        setTimeout(() => {
            location.reload();
        }, 2000)
        return;
    }
}

nextBtn.addEventListener("click", showItem)

checkBtn.addEventListener("click", (newItem) => {
    descriptionArea.textContent = newItem.description;
})