import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';


const LOGOSPLUS = [
  {

    link: 'https://cycling74.com/products/max/',
    info: "cycling74_logo",
  },
  {

    link: 'https://www.p5js.org',
    info: "p5_logo",
  },
  {

    link: 'https://dolby.com',
    info: "dolby_logo",
  }
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        cycling74_logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "cycling74_logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        p5_logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "p5_logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        apple_logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "apple_logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        windows_logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "windows_logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        ableton_logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ableton_logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        dolby_logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "dolby_logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="learn" accent>
        <StyledContainer>
          <div>
            <h1>learn + teach</h1>
            <h3>workshops for music creation with</h3>
            <LogoGrid>
              <LogoArt>
                  <Img fluid={data.cycling74_logo.childImageSharp.fluid} />
              </LogoArt>
              <LogoArt>
                  <Img fluid={data.p5_logo.childImageSharp.fluid} />
              </LogoArt>
              <LogoArt>
                  <Img fluid={data.windows_logo.childImageSharp.fluid} />
              </LogoArt>
               <LogoArt>
                  <Img fluid={data.apple_logo.childImageSharp.fluid} />
              </LogoArt>
              <LogoArt>
                  <Img fluid={data.dolby_logo.childImageSharp.fluid} />
              </LogoArt>
              <LogoArt>
                  <Img fluid={data.ableton_logo.childImageSharp.fluid} />
              </LogoArt>
            </LogoGrid>
            
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: .5fr .5fr;
  grid-gap: 59px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  text-align: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 46%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const LogoArt = styled.figure`
  width: 140px;
  right: 65%;
  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 200px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100px;
  }
`;
export default UsedBy;
