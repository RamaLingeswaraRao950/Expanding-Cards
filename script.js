const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        applyGlowEffect(panel);
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
        panel.style.boxShadow = ''; // Remove glow from non-active panels
    });
}

function applyGlowEffect(panel) {
    panel.style.boxShadow = '0 0 20px 10px rgba(255, 0, 0, 0.7)'; // Apply radium glow
}
