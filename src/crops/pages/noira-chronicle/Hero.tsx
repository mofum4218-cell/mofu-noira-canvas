/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import styled from "styled-components";

/* ====== Styled ====== */
const Spread = styled.article`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-auto-rows: auto;
  background: #fff;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MagHeader = styled.header`
  grid-column: 1 / 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 1024px) {
    grid-column: 1 / 2;
  }
`;

const MagTitle = styled.h1`
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

const IssueInfo = styled.p`
  font-size: 12px;
  color: #777;
  margin: 0;
`;

const Main = styled.main`
  grid-column: 1 / 2;
  padding: 40px;
  position: relative;

  @media (max-width: 1024px) {
    grid-column: 1 / 2;
    padding: 24px;
  }
`;

const ArticleHeader = styled.header`
  margin-bottom: 20px;
`;

const ArticleTitle = styled.h2`
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 20px;
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.4;
`;

const Byline = styled.address`
  font-size: 14px;
  color: #777;
  margin-bottom: 30px;
  font-style: normal;
`;

const Figure = styled.figure`
  margin-bottom: 30px;
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 51, 102, 0.2);
  mix-blend-mode: multiply;
`;

const FigCaption = styled.figcaption`
  font-size: 12px;
  color: #777;
  font-style: italic;
  margin-top: 8px;
`;

const ArticleText = styled.section`
  column-count: 2;
  column-gap: 30px;
  margin-bottom: 30px;

  p {
    margin-bottom: 15px;
    font-size: 15px;
    color: #222;
  }

  .drop-cap::first-letter {
    font-size: 3.5em;
    float: left;
    line-height: 0.8;
    margin-right: 8px;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    column-count: 1;
  }
`;

const PullQuote = styled.blockquote`
  background: transparent;
  border-top: 2px solid #ff3366;
  border-bottom: 2px solid #ff3366;
  padding: 30px 0;
  margin: 40px 0;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 300;
  text-align: center;
  column-span: all;
  letter-spacing: -0.5px;
  font-family: 'Roboto Condensed','Helvetica Neue',Arial,sans-serif;

  p { margin: 0; }
`;

const QuoteAttr = styled.cite`
  display: block;
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SubSection = styled.section`
  margin: 10px 0 20px;

  h3 {
    font-size: 18px;
    margin: 25px 0 10px;
    font-weight: 700;
    color: #ff3366;
    text-transform: none;
  }

  p {
    margin-bottom: 15px;
    font-size: 15px;
  }
`;

const Sidebar = styled.aside`
  grid-column: 2 / 3;
  background-color: #000;
  color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1024px) {
    grid-column: 1 / 2;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 800;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;
  padding-bottom: 10px;
`;

const DotPattern = styled.div`
  position: absolute;
  top: 0; right: 0;
  width: 150px; height: 150px;
  background-image: radial-gradient(circle, white 2px, transparent 2px);
  background-size: 15px 15px;
  opacity: .2;
`;

const Timeline = styled.section`
  margin-bottom: 30px;
  flex-grow: 1;
`;

const TLItem = styled.article`
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
  border-left: 1px solid rgba(255,255,255,.3);
  padding-bottom: 20px;
`;

const TLDot = styled.div`
  position: absolute;
  left: -5px; top: 5px;
  width: 10px; height: 10px;
  background-color: #ff3366;
  border-radius: 50%;
`;

const TLYear = styled.h4`
  font-weight: 800;
  margin: 0 0 5px;
  font-size: 18px;
`;

const SquareGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
  gap: 10px;
  margin-bottom: 30px;
`;

const Square = styled.figure<{ $overlay?: string }>`
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  margin: 0;

  img { width: 100%; height: 100%; object-fit: cover; }

  .overlay {
    position: absolute;
    inset: 0;
    mix-blend-mode: multiply;
    background-color: ${({ $overlay }) => $overlay || "transparent"};
  }
`;

const KeyWorks = styled.section`
  margin-top: 40px;

  h3 { color: #fff; margin: 0 0 15px; }
`;

const WorkItem = styled.article`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255,255,255,.3);

  &:last-child { border-bottom: none; }
`;

const WorkTitle = styled.h4`
  font-weight: 800;
  margin: 0 0 5px;
  font-size: 16px;
`;

/* ====== Component ====== */
export const Hero: React.FC = () => {
  return (
    <Spread className="noira-chronicle">
      {/* header */}
      <MagHeader>
        <MagTitle>ART HISTORY QUARTERLY</MagTitle>
        <IssueInfo>SPRING 2025 • ISSUE 38</IssueInfo>
      </MagHeader>

      {/* main */}
      <Main>
        <ArticleHeader>
          <ArticleTitle>Andy Warhol: Beyond the Icon</ArticleTitle>
          <SubTitle>
            Examining the lasting influence of pop art's most famous provocateur, and why his work continues to resonate in contemporary visual culture.
          </SubTitle>
          <Byline>By Alexandra Martin • Photography courtesy of The Andy Warhol Foundation</Byline>
        </ArticleHeader>

        <Figure className="main-image">
          <img
            src="https://assets.codepen.io/406785/warhol1.webp"
            alt="Andy Warhol working in his silver-walled studio, The Factory, 1965"
          />
          <ImgOverlay aria-hidden="true" />
          <FigCaption>
            Warhol at work in his studio, "The Factory," New York City, 1965. The silver-walled space became a nexus for artists, musicians, and celebrities.
          </FigCaption>
        </Figure>

        <ArticleText className="article-text">
          <p className="drop-cap">
            Few artists have permeated popular culture as thoroughly as Andy Warhol. More than three decades after his death, his vision continues to inform how we understand celebrity, consumer culture, and the very notion of what constitutes art. While his silk-screened Marilyns and Campbell's soup cans have become visual shorthand for Pop Art, Warhol's true legacy lies in his radical reconceptualization of the artist's role in society.
          </p>
          <p>
            Born Andrew Warhola in Pittsburgh to working-class immigrants, Warhol's journey from commercial illustrator to art world superstar embodied the American dream, even as his work offered subtle critiques of consumerism and celebrity worship. His famous proclamation that "in the future, everyone will be world-famous for 15 minutes" proved remarkably prescient in our age of viral fame and social media influencers.
          </p>
          <p>
            While critics initially dismissed his appropriation of commercial imagery as superficial, Warhol's deadpan embrace of mass culture concealed more complex intentions. "I want to be a machine," he once stated, yet his work reveals a deep fascination with human desire, mortality, and the mechanisms of fame.
          </p>

          <PullQuote className="pull-quote">
            <p>"Art is what you can get away with."</p>
            <QuoteAttr>— Andy Warhol</QuoteAttr>
          </PullQuote>

          <p>
            Perhaps most revolutionary was Warhol's understanding of the artist as brand. Through his silver-wigged persona, deadpan interviews, and entrepreneurial ventures like Interview magazine, he crafted a public image as carefully as any of his silkscreens. This approach anticipated today's boundary-blurring between art, commerce, and personal branding.
          </p>
          <p>
            His studio, famously dubbed "The Factory," functioned simultaneously as production facility, social club, and performance space. Through this innovative model, Warhol challenged the romantic notion of the solitary artist, instead embracing collaboration and mechanical reproduction. The Factory became home to a revolving cast of collaborators—from socialites to street people—all participants in what might be considered Warhol's greatest creation: his scene.
          </p>

          <SubSection>
            <h3>Beyond the Silkscreen</h3>
            <p>
              While his silkscreened images remain his most recognizable work, Warhol's experimentation extended far beyond this technique. His pioneering films like "Empire" (1964)—an eight-hour static shot of the Empire State Building—challenged conventional notions of narrative and viewership in ways that anticipated both structural film and social media's celebration of the mundane.
            </p>
            <p>
              His work with The Velvet Underground demonstrated his understanding that cultural influence could extend beyond traditional artistic boundaries. By bringing together experimental music, performance art, and multimedia presentation, these collaborations helped establish the template for interdisciplinary art that dominates contemporary practice.
            </p>
          </SubSection>

          <SubSection>
            <h3>The Business of Being Warhol</h3>
            <p>
              Perhaps most prescient was Warhol's understanding of the increasingly blurred boundaries between art and commerce. While previous generations of artists had sought to position themselves outside market considerations, Warhol openly embraced the commercial aspects of artmaking, accepting portrait commissions from wealthy clients and declaring, "Making money is art and working is art and good business is the best art."
            </p>
          </SubSection>
        </ArticleText>
      </Main>

      {/* sidebar */}
      <Sidebar>
        <DotPattern aria-hidden="true" />
        <SidebarTitle>The Warhol Timeline</SidebarTitle>

        <Timeline>
          {[
            ["1928", "Born in Pittsburgh, Pennsylvania to immigrant parents from present-day Slovakia."],
            ["1949", "Graduates from Carnegie Institute of Technology with a degree in Pictorial Design."],
            ["1962", "First solo exhibition of his Campbell's Soup Cans at Ferus Gallery in Los Angeles."],
            ["1969", "Founds Interview magazine, combining celebrity, art, fashion, provocative interviews."],
            ["1964", `Opens "The Factory", silver-painted studio & cultural hub for artists, musicians, celebrities.`],
            ["1968", "Survives assassination attempt by Valerie Solanas; it affects his later work and outlook."],
            ["1987", "Dies in New York at age 58 from complications following gallbladder surgery."],
          ].map(([year, text]) => (
            <TLItem key={year}>
              <TLDot aria-hidden="true" />
              <TLYear>{year}</TLYear>
              <p>{text}</p>
            </TLItem>
          ))}
        </Timeline>

        <SquareGrid>
          <Square $overlay="rgba(255, 51, 102, 0.5)">
            <img src="https://assets.codepen.io/406785/marilyn.jpg" alt="Warhol's Marilyn Monroe artwork" />
            <div className="overlay" aria-hidden="true" />
          </Square>
          <Square $overlay="rgba(0, 204, 255, 0.5)">
            <img src="https://assets.codepen.io/406785/soup.webp" alt="Warhol's Campbell's Soup Cans artwork" />
            <div className="overlay" aria-hidden="true" />
          </Square>
          <Square $overlay="rgba(255, 204, 0, 0.5)">
            <img src="https://assets.codepen.io/406785/chair.jpg" alt="Warhol's Electric Chair artwork" />
            <div className="overlay" aria-hidden="true" />
          </Square>
          <Square $overlay="rgba(0, 204, 102, 0.5)">
            <img src="https://assets.codepen.io/406785/andy-warhol.jpg" alt="Portrait of Andy Warhol" />
            <div className="overlay" aria-hidden="true" />
          </Square>
        </SquareGrid>

        <KeyWorks>
          <h3>KEY WORKS</h3>
          {[
            ["Campbell's Soup Cans (1962)", "32 canvases, each depicting a variety of Campbell's soup, helped define Pop Art's engagement with consumer culture."],
            ["Marilyn Diptych (1962)", "Created shortly after Monroe's death, this iconic work explores celebrity worship and mortality through repetition."],
            ["Empire (1964)", `Eight-hour film consisting of a single static shot of the Empire State Building, challenging conventional cinema.`],
            ["Silver Clouds (1966)", "Interactive installation of silver helium-filled balloons, blurring the boundary between sculpture and environment."],
          ].map(([title, text]) => (
            <WorkItem key={title}>
              <WorkTitle>{title}</WorkTitle>
              <p>{text}</p>
            </WorkItem>
          ))}
        </KeyWorks>
      </Sidebar>
    </Spread>
  );
};

