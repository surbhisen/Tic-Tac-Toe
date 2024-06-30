let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let h2 = document.querySelector(".h2");
let newbtn = document.querySelector("#newbtn");
console.log(boxes);

let turn = true;
const winningCombos = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    winner();
  });
});

let reset = ()=>{
    turn = true;
    enable();
    h2.classList.add("hide");
}
let disablebox = () => {
for(let box of boxes){
    box.disabled = true;
}
}
let enable = () => {
for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
}
}
let showwinner = (pos) => {
    h2.innerHTML = `We have a winner ${pos}`;
    h2.classList.remove("hide");
    disablebox();
    
}
let count = () => {
  let counter = 0;
  for(let box of boxes){
      if(box.innerText !== ""){
          counter++;
      }
  } 
  if(counter === 9){
      h2.innerHTML = "It's a draw";
      h2.classList.remove("hide");
  }
}
let winner = () => {
    for(let pattern of winningCombos){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
       if(pos1!="" && pos2!="" && pos3 !=""){
       if(pos1 === pos2 && pos2 === pos3 ){
           console.log("We have a winner", pos1);
           showwinner(pos1);
       }
     
       count();
      }
  
    }
}

resetbtn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);