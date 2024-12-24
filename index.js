// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animasyonları
function initSkillBars() {
    const skillPers = document.querySelectorAll('.skill-per');
    
    skillPers.forEach(skillPer => {
        const per = skillPer.getAttribute('per');
        skillPer.style.width = per + '%';
    });
}

// Scroll animasyonları
function reveal() {
    const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('load', initSkillBars);
window.addEventListener('scroll', reveal);
