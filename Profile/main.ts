// console.log(1+1);
{
const name:Element | null = document.querySelector('.name');
const rightSaves = document.querySelectorAll('.right-save');
const n = rightSaves.length;

rightSaves.forEach(() => {
name?.addEventListener('click',() => {
rightSaves[0].classList.toggle('right-save');
//↑[0]指定しないとクラスリストが発動しないから
//入れた。。

});
});
// name?.addEventListener('click',() =>{
// rightSaves[n].classList.remove('right-save');
// });
}