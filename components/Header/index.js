// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerA = document.createElement('div');
    let headDate = document.createElement('span');
    let headTitle = document.createElement('h1');
    let headTemp = document.createElement('span');

    headerA.classList.add('header');
    headDate.classList.add('date');
    headTemp.classList.add('temp');

    headDate.textContent = 'MARCH 28, 2019';
    headTitle.textContent = 'Lambda Times';
    headTemp.textContent = '98°';

    headerA.appendChild(headDate);
    headerA.appendChild(headTitle);
    headerA.appendChild(headTemp);

    return headerA;
}

let header1 = Header();

const hC = document.querySelector('.header-container');
hC.appendChild(header1);

    