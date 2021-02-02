import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import MediaPlayer from '@common/MediaPlayer';
// import { CirclePlayer } from '@common/CirclePlayer';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>womxn led music creation</h2>
              <p>
                documentation of songwriting, tool building, <br /> performance,
                production, engineering, <br /> mix, and master
              </p>
            </div>
          </Grid>
          <Grid inverse>
            <div>
              <h2>
                wom·xn <br />
              </h2>
              <h2>/ˈwimin/ <MediaPlayer></MediaPlayer></h2>
              <p>
                a non-spelling of "women" used to question societal and internal gender bias and how it is enforced by norms
                <br />
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
            <div>
              <h2><a href="https://www.eventbrite.com/e/hijack-befriend-your-mac-tickets-94038267991" style={{color: "black", textDecoration: "none"}}>womxn led workshops</a></h2>
              <p>
                tech, new and old for making music
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 20px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 3fr 2fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

// const PlayWord = styled.div`
//   background: url("http://image.flaticon.com/icons/svg/10/10430.svg");
// `;

export default About;
