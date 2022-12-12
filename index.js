// Set the background color of a redparagraphRed in your javaScript file:
// At first: the text background colors are not set. (background color is white)
// After you click the button, the colors are changed.


// Өөрийн javaScript файл дахь догол мөрний дэвсгэр өнгийг тохируулна уу:
// Эхэндээ: текстийн дэвсгэр өнгийг тохируулаагүй байна. (арын дэвсгэр нь цагаан)
// Та товчлуур дээр дарсны дараа өнгө өөрчлөгдөнө.



let paragraphRed = document.createElement("p");

paragraphRed.innerHTML = "Click to Set background color";
console.log(paragraphRed);
document.body.appendChild(paragraphRed);

paragraphRed.style.backgroundColor = "white";


(document.getElementsByClassName(btn));
document.getElementsByClassName("btn").addEventListener("click", myFunction);

function color () {
  // document.getElementsByClassName("p").innerHTML = "red";
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++){
    color = color + symbols[Math.floor(Math.random)]
  }
document.p.style.backgroundColor = color;
  }




// button.addEventListener("click", () => paragraphRed);

// function paragraphRed () {
//   backgroundColor ("red");
// } 



let paragraphYellow = document.createElement("p");

paragraphYellow.innerHTML = "Click to Change another color";
console.log(paragraphYellow);
document.body.appendChild(paragraphYellow);

paragraphYellow.style.backgroundColor = "white";












