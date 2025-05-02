window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000);
};

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function goToCake() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('cake-page').style.display = 'block';
    document.getElementById('bgMusic').play();
    initCake();
}

function initCake() {
    const canvas = document.getElementById('cakeCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;
    ctx.fillStyle = 'pink';
    ctx.fillRect(50, 100, 200, 100);
    ctx.fillStyle = 'brown';
    ctx.fillRect(50, 190, 200, 10);

    let cut = false;

    canvas.addEventListener('mousedown', function(e) {
        if (!cut) {
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stop);
        }
    });

    function draw(e) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    function stop() {
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stop);
        cut = true;
        triggerCelebration();
    }
}

function triggerCelebration() {
    alert('Yay! Cake cut! Enjoy party poppers & fireworks!');
    setTimeout(() => {
        document.getElementById('cake-page').innerHTML = '<button onclick="goToFinal()">Click if you love me</button>';
    }, 2000);
}

function goToFinal() {
    document.getElementById('cake-page').style.display = 'none';
    document.getElementById('final-page').style.display = 'block';
    popHearts();
}

function popHearts() {
    const heartsDiv = document.getElementById('hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsDiv.appendChild(heart);
    }
          }
