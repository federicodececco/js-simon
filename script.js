const randomEasy = () => {
    return Math.floor(Math.random() * (99) + 0)
}
/**
 * a function that given two array counts how many distinct itmes the elements appear in the second
 * @param {object} firstArray -  array with elements to confront
 * @param {object} secondArray - array to be confronted
 * @returns the number of times the first' elements appear in the second  
 */
const check = (firstArray, secondArray) => {
    let counter = 0;
    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i])) {
            const elem = secondArray.indexOf(firstArray[i]);
            secondArray.splice(elem, 1)
            counter++
        }

    }
    return counter;
}
const formElm = document.getElementById("inForm")
let randomArray = []
randomArray[0] = document.getElementById("dFirst").innerHTML = randomEasy();
randomArray[1] = document.getElementById("dSecond").innerHTML = randomEasy();
randomArray[2] = document.getElementById("dThird").innerHTML = randomEasy();
randomArray[3] = document.getElementById("dFourth").innerHTML = randomEasy();
randomArray[4] = document.getElementById("dFifth").innerHTML = randomEasy();
/* const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const fourth = document.getElementById("fourth")
const fifth = document.getElementById("fifth") */




let userArray = []


formElm.addEventListener("submit", function (event) {
    event.preventDefault();
    userArray = [document.getElementById("first").value, document.getElementById("second").value, document.getElementById("third").value, document.getElementById("fourth").value, document.getElementById("fifth").value];
    const correct = check(userArray.map(Number), randomArray);
    document.getElementById("correct").innerHTML = `${correct}`


})



const send = document.getElementById("go");
send.addEventListener("click", function () {
    document.getElementById("displaySection").classList.add("d-none")
    document.getElementById("timerSection").classList.remove("d-none")
    document.getElementById("formSection").classList.remove("d-none")
    setTimeout(() => alert("hai perso"), 10000)

})
