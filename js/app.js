document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
    const ground = document.querySelector('ground');
    const game = document.querySelector('.game');

    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 2;
    let gameDone = false;

    function startGame() {
        if(birdBottom > 0) {
            birdBottom -= gravity;
        }
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
    }

    let gameTimer = setInterval(startGame, 20)

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
        if (!gameDone) {
            pipe.classList.add('pipe');
        }
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

            if (pipeLeft > 200 && pipeLeft < 280 && birdLeft === 220 && birdBottom < pipeBottom + 100|| birdBottom === 0) {
                console.log("game over");
                gameOver ();
                clearInterval(pipeTimer);
            }
        }

        let pipeTimer = setInterval(movePipe, 20)
        if(!gameDone) {
            setTimeout(createPipes, 3000);
        }
    }

    createPipes();


    function gameOver () {
        clearInterval(gameTimer);
        gameDone= true;
        document.removeEventListener('keypress', control)
    }


})