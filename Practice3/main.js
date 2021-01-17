const carrot = document.querySelector('.carrot');
const rabbit = document.querySelector('.rabbit');
const findRabbit = document.querySelector('.findRabbit');

findRabbit.addEventListener('click', () => {
  console.log('clicked');
  rabbit.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
