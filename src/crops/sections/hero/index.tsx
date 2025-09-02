import React from "react";

type HeroProps = {
  title: string;
  subtitle: string;
};

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => (
  <section style={{ padding: "4rem" }}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </section>
);

