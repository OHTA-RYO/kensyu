// 'use strict';

{
  const $display = document.querySelector('.display-textarea');
  let displayLength = $display.textContent.length;

  function numberClick(text){
    if(text === '÷' || text === '×' || text === '+' || text === '-' || text === '=' || text === 'AC'){
      $display.textContent = '';
    }
    else if(displayLength < 9){
      $display.textContent += (text);
      displayLength++;
      console.log(displayLength);
    }//↓から足し算の計算を入れる。
    else if (text === '+'){
      $display.textContent = $display.textContent + $display.textContent;
    }

  }

  // function kigouClick(text){
  //   $display.textContent = (text);

  //   console.log(text);
  //   console.log($display.textContent);

  // }



  // function click(text) {
  //   $display.textContent = click(text);
  //   click(text);
  //   console.log($display);
  //   console.log($number);
  // }
}