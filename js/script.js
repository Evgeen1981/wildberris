const cartBtn = document.querySelector('.button-cart')
const overlay = document.querySelector('.overlay')
const modalClose = document.querySelector('.modal-close')
const inputSearch = document.querySelector('.form-control > input')
const inputBtn = document.querySelector('.btn-outline-secondary')

// корзина
function showModalCart() {
  overlay.classList.remove('show')
  overlay.classList.add('show')
}

function closeModalCart() {
  overlay.classList.remove('show')
}

// поиск

function search() {
  let searchValue = inputSearch.value
  console.log(searchValue);
}

// получение данных

function getGoods() {
  const navigationLinks = document.querySelectorAll('.navigation-link')

  async function getData() {
    const response = await fetch('./db/db.json')
    const result = await response.json()
    localStorage.setItem('data', JSON.stringify(result))
    console.log(JSON.parse(localStorage.getItem('data')))
  }

  navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      getData()
    })
  })

}


cartBtn.addEventListener('click', showModalCart)
modalClose.addEventListener('click', closeModalCart)
inputSearch.addEventListener('input', search)
inputBtn.addEventListener('click', search)
getGoods()