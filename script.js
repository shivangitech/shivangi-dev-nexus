// 1. Theme Toggle Logic (Light Mode vs Dark Mode)
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeBtn.innerText = "☀️ Mode";
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeBtn.innerText = "🌙 Mode";
    }
});

// 2. Dynamic DOM Manipulation Function for Skills
function showSkillDetails(title, description) {
    const previewBox = document.getElementById('dynamic-preview');
    
    // Changing inner HTML smoothly on click
    previewBox.innerHTML = `
        <div style="animation: fadeIn 0.5s ease;">
            <strong style="color: var(--accent); font-size: 18px;">⚡ ${title} Tech-Stack:</strong>
            <p style="margin-top: 5px; font-weight: 400;">${description}</p>
        </div>
    `;
}
