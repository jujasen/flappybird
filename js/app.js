document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
    const sky = document.querySelector('.sky');
    const ground = document.querySelector('ground');
    const game = document.querySelector('.game');

    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 2

    function startGame() {
        if(birdBottom > 0) {
            birdBottom -= gravity;
        }
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
    }

    let timerId = setInterval(startGame,20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if(birdBottom < 400) {
            birdBottom += 100;
            bird.style.bottom = birdBottom + 'px';
            console.log(birdBottom)
        }

    }

    document.addEventListener('keypress', control);

    function createPipes () {
        const pipe = document.createElement('div');
    }
})