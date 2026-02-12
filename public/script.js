
document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const textElement = document.getElementById('dynamic-typing');
    const textToType = textElement.innerText;
    textElement.innerText = '';
    
    let charIndex = 0;
    const typeSpeed = 50; // ms

    function typeText() {
        if (charIndex < textToType.length) {
            textElement.innerText += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typeSpeed);
        }
    }

    // Start typing after a short delay
    setTimeout(typeText, 500);

    // Uptime Counter Simulation
    const startTime = Date.now();
    const uptimeElement = document.getElementById('uptime-counter');

    function updateUptime() {
        const currentTime = Date.now();
        const diff = Math.floor((currentTime - startTime) / 1000); // in seconds
        
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;

        uptimeElement.innerText = `Uptime: ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateUptime, 1000);

    // 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    console.log('DIO Docker App Initialized.');
});
