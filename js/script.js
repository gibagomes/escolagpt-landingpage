document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-interactive');

    cards.forEach(card => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const title = document.createElement('h3');
        title.textContent = card.dataset.title;

        const description = document.createElement('p');
        description.textContent = card.dataset.description;

        overlay.appendChild(title);
        overlay.appendChild(description);
        card.appendChild(overlay);
    });
});
