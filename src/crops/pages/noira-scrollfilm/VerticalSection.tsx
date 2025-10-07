"use client";
import styled from "styled-components";

const Section = styled.section`
  background: url("/sample/winter.jpg") center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 10rem 2rem;
  min-height: 150vh;
  position: relative;

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  .content {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

export default function VerticalSection() {
  return (
    <Section>
      <div className="overlay"></div>
      <div className="content">
        <h2>Frozen Serenity</h2>
        <p>
          The air whispers with frost as snow falls gently on the world below.
          A quiet calm spreads as the horizon fades into white. Every sound,
          every breath feels suspended in stillness.
        </p>
      </div>
    </Section>
  );
}

