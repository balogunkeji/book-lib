const newBookBtn = document.getElementById('btn');
const addBookBtn = document.getElementById('addBook');
const popForm = document.getElementById('form');
const mainPage = document.querySelector('main')
newBookBtn.addEventListener('click', () => {
  if(popForm.style.display === 'none'){
    popForm.style.display = 'block';
  } else {
    popForm.style.display = 'none';
  }
})

addBookBtn.addEventListener('click', addBook);


// book constructor
function Book(author, title, pages, read){
  this.author = form.author.value;
  this.title = form.title.value;
  this.pages = form.pages.value;
  this.read = form.read.value;
};
  let newLib = []
  let newBk;
  console.log(newLib)
function addBook(event){
  event.preventDefault();
  popForm.style.display = 'none';

  newBk = new Book(author, title, pages, read);
  newLib.push(newBk)
  form.reset();
  render();
}

function render(){
  let title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const read = document.createElement('p')

  newLib.forEach((itm) => {
    title = itm.title;
  })
  mainPage.appendChild(title)
}
