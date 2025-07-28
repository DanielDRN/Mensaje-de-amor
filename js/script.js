document.addEventListener('DOMContentLoaded', () => {
    
    const heartContainer = document.getElementById('full-screen-heart-background');
    const numHearts = 30; 

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('span');
        heart.textContent = '❤️'; 

        
        heart.classList.add(
            'absolute',
            'text-pink-300', 
            'opacity-70',    

            
            `text-${Math.floor(Math.random() * 4) * 2 + 3}xl`, 
            `opacity-${Math.floor(Math.random() * 5) * 10 + 20}`
        );

        
        const randomX = Math.random() * 100; 
        const randomY = Math.random() * 100; 
        heart.style.left = `${randomX}%`;
        heart.style.top = `${randomY}%`;
        heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;

        const animations = ['animate-pulse', 'animate-bounce', 'animate-spin']; 
        const randomAnim = animations[Math.floor(Math.random() * animations.length)];
        heart.classList.add(randomAnim);
        heart.style.animationDuration = `${Math.random() * 4 + 2}s`; 
        heart.style.animationDelay = `${Math.random() * 3}s`; 


        heartContainer.appendChild(heart);
    }
});