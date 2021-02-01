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
        let randomHeight = Math.random() * 200;
        let pipeLeft = 500;
        let pipeBottom = randomHeight;
        const pipe = document.createElement('div');
        pipe.classList.add('pipe');
        game.appendChild(pipe);
        pipe.style.left = pipeLeft + 'px';
        pipe.style.bottom = pipeBottom + 'px';

        function movePipe() {
            pipeLeft -= 2;
            pipe.style.left = pipeLeft + 'px';

            if (pipeLeft === -60) {
                clearInterval(pipeTimer);
                game.removeChild(pipe);
            }
        }

        let pipeTimer = setInterval(movePipe, 20)
        setTimeout(createPipes, 3000);
    }


    createPipes();
})