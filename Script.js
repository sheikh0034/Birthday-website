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
function goToCake() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('cake-page').style.display = 'block';
    document.getElementById('bgMusic').play();
    initKnife();
}

function initKnife() {
    const knife = document.getElementById('knife');
    let isDragging = false;

    knife.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            triggerCelebration();
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const container = document.getElementById('cake-container');
            const rect = container.getBoundingClientRect();
            let x = e.clientX - rect.left - knife.offsetWidth/2;
            let y = e.clientY - rect.top - knife.offsetHeight/2;
            knife.style.left = x + 'px';
            knife.style.top = y + 'px';
        }
    });
}

function triggerCelebration() {
    const cakeContainer = document.getElementById('cake-container');
    const popper = document.createElement('img');
    popper.src = 'popper.png';
    popper.style.position = 'absolute';
    popper.style.top = '0';
    popper.style.left = '0';
    popper.style.width = '100px';
    cakeContainer.appendChild(popper);

    const firework = document.createElement('img');
    firework.src = 'firework.gif';
    firework.style.position = 'absolute';
    firework.style.top = '0';
    firework.style.right = '0';
    firework.style.width = '150px';
    cakeContainer.appendChild(firework);

    setTimeout(() => {
        document.getElementById('cake-page').innerHTML = '<button onclick="goToFinal()">Click if you love me</button>';
    }, 3000);
}
