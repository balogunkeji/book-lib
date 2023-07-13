const newBookBtn = document.getElementById('btn');
const addBookBtn = document.getElementById('addBook');
const form = document.getElementById('form');
const mainPage = document.querySelector('#tbody')

newBookBtn.addEventListener('click', () => {
  form.style.display = (form.style.display === 'none' ? 'block' : 'none')
})

addBookBtn.addEventListener('click', addBookToLibrary);

let newLib = []

// book constructor
function Book(author, title, pages, read){
  this.author = author.value;
  this.title = title.value;
  this.pages = pages.value;
  this.read = read.value;
};

const newBk = new Book(author, title, pages, read);

function addBookToLibrary(event){
  event.preventDefault();
  form.style.display = 'none';
  newLib.push(newBk)
  form.reset();
  setData();
  render();
}

function removeBook(title) {
    newLib = newLib.filter((itm) => itm.title !== title);
    render();
  }

function render() {
  mainPage.innerHTML = '';

  newLib.forEach((itm) => {
    const page = `
      <tr>
        <td>${itm.author}</td>
        <td>${itm.title}</td>
        <td>${itm.pages}</td>
        <td>${itm.read}</td>
        <td><button onclick="removeBook('${itm.title}')" id="removeBtn">remove</button></td>
      </tr>
    `;
    mainPage.insertAdjacentHTML('afterbegin', page);
      setData();
  });
}

function setData() {
    localStorage.setItem(`newLib`, JSON.stringify(newLib));
}

function restore() {
  const storedLib = localStorage.getItem('newLib');
  newLib = storedLib ? JSON.parse(storedLib) : [];
  render();
}

restore();

