function openOverlay(productName, imagePath, productPrice) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const overlayContent = `
        <div class="overlay-content">
            <h2>${productName}</h2>
            <img src="${imagePath}" alt="${productName}">
            <p>${productPrice}</p>
            <button onclick="closeOverlay()">Close</button>
        </div>
    `;

    overlay.innerHTML = overlayContent;
}