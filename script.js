const p = document.querySelector("p")
const input = document.querySelector(".numberDe")
const inputPara = document.querySelector(".numberPara")
function sortear() {

    const min = Math.ceil(document.querySelector(".numberDe").value)
    const max = Math.floor(document.querySelector(".numberPara").value)
  
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    p.innerHTML = result
}

function zerar() {

    const zero = 0;
   
   p.innerHTML = zero
   input.value=0;
   inputPara.value=0;
  
   
}



