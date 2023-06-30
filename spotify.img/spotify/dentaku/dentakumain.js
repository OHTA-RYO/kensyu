'use strict';


{
  let num1 = 1 ;
  let clickCount = 0;



    document.querySelector('#num1').addEventListener('click', () => {
  document.querySelector('.display-textarea').textContent += num1;
  // console.log(num1);
  // document.querySelector(".display-textarea").style.position = "absolute";
  // document.querySelector(".display-textarea").style.left = '100px'; 
  // document.querySelector(".display-textarea").style.top  = '100px'; 
  document.querySelector(".display-textarea").style.fontSize = "60px";
  document.querySelector(".display-textarea").style.textAlign = "right";
  // clickCount++;
  if (clickCount >= 9) {
    num1.disabled = true;
    // num1.textContent = "制限に達しました";
  }
  // for (let num1 = 1; num1 < 9; num1++)
  // document.querySelector('.display-textarea').textContent = num1;
  console.log(num1);

  // display-textarea.style.font-size =';' '64px';



  // .display-textarea.style.position = 'absolute';
  // .display-textarea.style.left = '100px'; 
  // .display-textarea.style.top  = '100px'; 
  
  });

}










// {
//   // const x="oota";
//   // console.log(x);
  
//   const num1 = 1 ;
//   console.log(num1);
  
//   // function display1() {
//   //   console.log(num1)
//   // }
  
//   // #num1.addEventListener('click', showMessage);

// }



// {

//   // const num1 = 1 ;
//   // console.log(num1);
  
  
//   document.querySelector('button').addEventListener('click', () => {
//   // console.log(num1);
//   // document.querySelector('#main-display').textContent = num1;
//   document.querySelector('#main-display').textContent = 1;
  
//   // document.querySelector('#num1').textContent;
  
//   });
  
  
//   // document.querySelector('#main-display').textContent = num1;
  
  
//   }

  // document.querySelector('.pushi-botton1').addEventListener('click', () => {
  //   // document.querySelector('li').textContent = 'Changed!';
  //   // document.querySelectorAll('li')[0].textContent = 'Changed!';
  //   // document.querySelectorAll('li')[1].textContent = 'Changed!';
  //   // document.querySelectorAll('li')[2].textContent = 'Changed!';
  //   document.querySelector('dentaku-display').textContent = 1;
  // });