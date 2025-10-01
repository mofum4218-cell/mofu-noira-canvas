// src/crops/pages/noira-pixels/Hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const load = async () => {
      // Supabaseから画像URLを取得
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/pixels.png", 600);

      if (!data?.signedUrl) return;

      const img = new Image();
      img.crossOrigin = "anonymous"; // ← CORS防止
      img.src = data.signedUrl;

      img.onload = () => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = 572;
        canvas.height = 352;

        // 画像を描画
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // ピクセルデータを取得
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 輝度マップ作成
        const detail = 1;
        const grid: number[][] = [];
        for (let y = 0; y < canvas.height; y += detail) {
          const row: number[] = [];
          for (let x = 0; x < canvas.width; x += detail) {
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateBrightness(red, green, blue) / 100;
            row.push(brightness);
          }
          grid.push(row);
        }

        // 粒子クラス
        class Particle {
          x: number;
          y: number;
          speed: number;
          velocity: number;
          size: number;

          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.7;
            this.size = Math.random() * 2 + 0.5;
          }

        update() {
  this.speed = grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
  const movement = (2.5 - this.speed) + this.velocity; // ← let → const
  this.y += movement;
  if (this.y >= canvas.height) {
    this.y = 0;
    this.x = Math.random() * canvas.width;
  }
}
  draw() {
            ctx.beginPath();
            ctx.fillStyle = "white"; // 白粒子
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
          }
        }

        // 粒子初期化
        const particlesArray: Particle[] = [];
        const numberOfParticles = 8000;
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }

        // アニメーションループ
        function animate() {
          ctx.globalAlpha = 0.05;
          ctx.fillStyle = "rgb(0,0,0)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.globalAlpha = 0.2;

          for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.3;
            particlesArray[i].draw();
          }

          requestAnimationFrame(animate);
        }
        animate();

        // 輝度計算
        function calculateBrightness(r: number, g: number, b: number) {
          return Math.sqrt(
            (r * r) * 0.299 +
            (g * g) * 0.587 +
            (b * b) * 0.114
          );
        }
      };
    };

    load();
  }, []);

  return (
    <Wrapper>
      <Canvas id="canvas1" ref={canvasRef}></Canvas>
    </Wrapper>
  );
};

