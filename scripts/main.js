var bannerImg = document.querySelector('img');

bannerImg.onclick = function () {
    var imgsrc = bannerImg.getAttribute('src');
    
    if (imgsrc === 'images/banner1.jpg') {
        bannerImg.setAttribute('src', 'images/banner2.jpg');
    } else {
        bannerImg.setAttribute('src', 'images/banner1.jpg');
    }
};

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool ' + storedName;
}

myButton.onclick = function () {
    setUserName();
};

