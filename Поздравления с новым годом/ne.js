const canvas = document.getElementById("particles");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let particlesArray = [];

// Создаем частицы
function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: `rgba(255, 255, 255, ${Math.random()})`
    };
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
        particlesArray.push(createParticle());
    }
}

// Рисуем частицы
function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Движение
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Если частица выходит за экран, возвращаем её
        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
    });
}

// Анимация
function animate() {
    drawParticles();
    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// Запуск
initParticles();
animate();


// Получаем элементы
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

// Когда пользователь нажимает на кнопку, модальное окно открывается
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (кнопка закрытия), модальное окно закрывается
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь кликает в любом месте за пределами модального окна, оно закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
