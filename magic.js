let zombieCnt = 0;
const incrementButton =  document.getElementById("increase");
const decreaseButton = document.getElementById("decrease")
const totalCounter = document.getElementById("counter")
totalCounter.innerHTML = zombieCnt;
const handleIncrease=()=>{
    zombieCnt++;
    console.log("clicked");
    totalCounter.innerHTML = zombieCnt;
}
const handleDecrease =()=>{
    zombieCnt--;
    totalCounter.innerHTML = zombieCnt;
}
incrementButton.addEventListener("click",handleIncrease);
decreaseButton.addEventListener("click", handleDecrease)
