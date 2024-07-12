import React, { useRef, useEffect } from 'react';

const StarsBackground = ({ width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width || window.innerWidth;
    canvas.height = height || window.innerHeight;

    let stars = [];
    const numStars = 100; // Reduced number of stars for minimalism

    class Star {
      constructor(x, y, radius, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
        this.alpha = 0.5 + Math.random() * 0.5;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha = this.alpha; // Use alpha for fading effect
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.y += this.velocity;
        if (this.y - this.radius > canvas.height) {
          this.y = -this.radius;
          this.x = Math.random() * canvas.width; // Randomize x position when reset
        }
        this.draw();
      }
    }

    function init() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.2; // Smaller max size
        const velocity = Math.random() * 0.2; // Slower velocity
        stars.push(new Star(x, y, radius, velocity));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => star.update());
    }

    init();
    animate();
  }, [width, height]);

  return <canvas ref={canvasRef} style={{ display: 'block', zIndex: 1, position: 'absolute', top: 0, left: 0 }} />;
};

export default StarsBackground;
