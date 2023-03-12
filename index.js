
/*
 let zarovka = document.querySelector('.bulb')

 const rozsvitit = () => {
    zarovka.classList.toggle('bulb--on')
 }

document.addEventListener('keydown', rozsvitit)
*/

const zarovka = document.querySelector('.bulb')

document.addEventListener('keydown', () => {
	zarovka.classList.toggle('bulb--on')
})