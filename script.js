const getRandomNumber1To6 = () => Math.floor(Math.random() * 6 + 1);

const changeDiceImage = (playerElement, imageSource) => {
    playerElement.setAttribute("src", imageSource);
}

const claimResult = (randomNumber1, randomNumber2) => {
    if (randomNumber1 > randomNumber2)
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    else if (randomNumber1 < randomNumber2)
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    else
        document.querySelector("h1").innerHTML = "Draw!";
}

const randomNumber1 = getRandomNumber1To6();
const imageSource1 = "./images/dice" + randomNumber1 + ".png";
changeDiceImage(document.querySelector(".img1"), imageSource1);

const randomNumber2 = getRandomNumber1To6();
const imageSource2 = "./images/dice" + randomNumber2 + ".png";
changeDiceImage(document.querySelector(".img2"), imageSource2);

claimResult(randomNumber1, randomNumber2);