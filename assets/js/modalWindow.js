const modal1 = document.querySelector('#modal1');
const openModal1 = document.querySelector('#modal-opener1');
const closeModal1 = document.querySelector('.close1');

openModal1.addEventListener('click', () => {
    modal1.showModal();
})

closeModal1.addEventListener('click', () => {
    modal1.close();
})

const modal2 = document.querySelector('#modal2');
const openModal2 = document.querySelector('#modal-opener2');
const closeModal2 = document.querySelector('.close2');

openModal2.addEventListener('click', () => {
    modal2.showModal();
})

closeModal2.addEventListener('click', () => {
    modal2.close();
})

const modal3 = document.querySelector('#modal3');
const openModal3 = document.querySelector('#modal-opener3');
const closeModal3 = document.querySelector('.close3');

openModal3.addEventListener('click', () => {
    modal3.showModal();
})

closeModal3.addEventListener('click', () => {
    modal3.close();
})