
function showImage(imageSrc, title, description) {
    var modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    
    var modal = document.createElement('div');
    modal.className = 'modal';
    
    var image = document.createElement('img');
    image.src = './gallary/' + imageSrc;
    image.alt = title;
    
    var imageTitle = document.createElement('h2');
    imageTitle.textContent = title;

    var imageDescription = document.createElement('p');
    imageDescription.textContent = description;

    modal.appendChild(image);
    modal.appendChild(imageTitle);
    modal.appendChild(imageDescription);

    modalContainer.appendChild(modal);
    document.body.appendChild(modalContainer);

    modalContainer.addEventListener('click', function () {
        document.body.removeChild(modalContainer);
    });
}


// Add this script to update the visit counter
document.addEventListener('DOMContentLoaded', function () {
    let visitCount = localStorage.getItem('visitCount');

    if (visitCount === null) {
        visitCount = 0;
    }

    visitCount++;

    document.getElementById('visit-counter').textContent = 'Visits: ' + visitCount;

    localStorage.setItem('visitCount', visitCount.toString());
});

document.addEventListener('DOMContentLoaded', function () {
    function updateTime() {
        const currentTimeElement = document.getElementById('current-time');
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        currentTimeElement.innerHTML = `<i class='bx bx-time'></i> ${timeString}`;
    }

    function updateDate() {
        const currentDateElement = document.getElementById('current-date');
        const now = new Date();
        const dateString = now.toLocaleDateString();
        currentDateElement.innerHTML = `<i class='bx bx-calendar'></i> ${dateString}`;
    }

    function updateLocation() {
        const currentLocationElement = document.getElementById('current-location');
        currentLocationElement.innerHTML = `<i class='bx bx-map'></i> Jenkinson's Boardwalk 300 Ocean Ave Pt. Pleasant Beach, NJ 08742 732.892.0600`;
    }

    updateTime();
    updateDate();
    updateLocation();

    setInterval(updateTime, 1000);
});



const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
    nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
    nav.classList.remove('active');
    })
}






