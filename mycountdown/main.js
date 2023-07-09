'use strict';

{
  // alert('こんにちは');
  document.getElementById('t1').innerHTML = 'Hello world!!';
  document.getElementById('t1').innerHTML = new Date().toLocaleString();

  setInterval(function () {
    document.getElementById("d2").innerHTML = new Date().toLocaleString();
  }, 1000);


  //   function check() {
  //     const countdown = endTime - new Date().getTime();

  //     timer.textContent = countdown;
  //   }

  //   const timer = document.getElementById('timer');
  //   const btn = document.getElementById('btn');
  //   let endTime;

  //   //終了時刻を求める
  //   btn.addEventListener('click',() => {
  //   endTime = new Date().getTime() + 3 * 1000;
  //  setInterval(check,100);
  //   });


}