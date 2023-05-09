import { useEffect, useRef } from 'react';

const FlappyBird = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bird = {
      x: 100,
      y: 250,
      velocity: 0,
      gravity: 0.5,
      jump: -10,
      width: 25,
      height: 25,
      color: '#fff',
    };
    const pipes = [];
    const pipeWidth = 50;
    const pipeGap = 100;
    const pipeSpeed = 2;
    let score = 0;

    function draw() {
      // clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw bird
      ctx.fillStyle = bird.color;
      ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

      // draw pipes
      pipes.forEach((pipe) => {
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.height);
        ctx.fillRect(
          pipe.x,
          pipe.height + pipeGap,
          pipeWidth,
          canvas.height - pipe.height - pipeGap
        );
      });

      // draw score
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText(`Score: ${score}`, 10, 30);

      // update bird
      bird.velocity += bird.gravity;
      bird.y += bird.velocity;

      // update pipes
      pipes.forEach((pipe) => {
        pipe.x -= pipeSpeed;

        if (pipe.x < -pipeWidth) {
          pipes.shift();
          score += 1;
        }

        if (
          bird.x + bird.width > pipe.x &&
          bird.x < pipe.x + pipeWidth &&
          (bird.y < pipe.height ||
            bird.y + bird.height > pipe.height + pipeGap)
        ) {
          restart();
        }
      });

      // check collision with ceiling and floor
      if (bird.y < 0 || bird.y + bird.height > canvas.height) {
        restart();
      }

      requestAnimationFrame(draw);
    }

    function restart() {
      bird.y = 250;
      bird.velocity = 0;
      pipes.length = 0;
      score = 0;
    }

    function jump() {
      bird.velocity = bird.jump;
    }

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        jump();
      }
    });

    setInterval(() => {
      const height = Math.floor(Math.random() * (canvas.height - pipeGap));
      pipes.push({
        x: canvas.width,
        height: height,
      });
    }, 2000);

    draw();

  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="1000"
      height="700"
      style={{ border: '1px solid #fff', background: '#000' }}
    ></canvas>
  );
};

export default FlappyBird;
