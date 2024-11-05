document.addEventListener('DOMContentLoaded', function () {
    // Attach click events for each brand name
    document.querySelector('.brand-name-acc').addEventListener('click', function () {
        showFullscreenImage('/images/acc-.jpeg');
    });

    document.querySelector('.brand-name-ultratech').addEventListener('click', function () {
        showFullscreenImage('/images/ultra.png');
    });

    document.querySelector('.brand-name-asian').addEventListener('click', function () {
        showFullscreenImage('/images/asian.png');
    });

    document.querySelector('.brand-name-fevicol').addEventListener('click', function () {
        showFullscreenImage('/images/fevicol.jpeg');
    });
});

function showFullscreenImage(imageUrl) {
    const modal = document.getElementById('fullscreen-modal');
    const fullscreenImage = document.getElementById('fullscreen-image');
    
    fullscreenImage.src = imageUrl; // Set the source of the image
    modal.style.display = 'flex'; // Show the modal
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreen-modal');
    modal.style.display = 'none'; // Hide the modal
}

// Function to open the overlay with product details
function openOverlay(productName, imagePath, productPrice) {
    // Create the overlay element
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Create the content for the overlay
    const overlayContent = `
        <div class="overlay-content">
            <h2>${productName}</h2>
            <img src="${imagePath}" alt="${productName}">
            <p>${productPrice}</p>
            <button onclick="closeOverlay()">Close</button>
        </div>
    `;

    // Set the inner HTML of the overlay
    overlay.innerHTML = overlayContent;

    // Append the overlay to the body
    document.body.appendChild(overlay);
}

// Function to close the overlay
function closeOverlay() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Add event listener to close the overlay when clicking outside the content
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('overlay')) {
        closeOverlay();
    }
});
// Function to open the overlay with product details
// Function to open the overlay with product details
