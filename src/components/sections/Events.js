import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const EVENTS = [
  {
    name: 'femily',
    image: 'femily_logo.jpeg',
    role: '',
  },
  {
    name: 'imagilabs',
    image: 'ImagiLabs_logo.png',
    role: '',
  },
  {
    name: 'liveroom',
    image: 'LiveRoom_logo.png',
    role: '',
  },
  {
    name: 'pbw',
    image: 'pbw_logo.png',
    role: '',
  },
  {
    name: 'wtr',
    image: 'wtr_logo.png',
    role: '',
  },
  {
    name: 'womxnin',
    image: 'womxninlabel_logo.png',
    role: '',
  },
];

const Events = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "events" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        team_work: file(
          sourceInstanceName: { eq: "events" }
          name: { eq: "wtr_logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="events" accent="secondary" style={{ backgroundColor: '#b89bff' }}>
        <Container style={{ position: 'relative'}}>
          <h1>events</h1>
          <h3 style={{textAlign: 'center'}}>girls code fest with <a href="https://www.femilysf.com/girls-code-fest">femily</a></h3>
          <RegisterButton>REGISTER FREE</RegisterButton>
          <EventsGrid>
            {EVENTS.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                </div>
              );
            })}
          </EventsGrid>
        </Container>
      </Section>
    )}
  />
);

const RegisterButton = styled.button`
        font-family: revert;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        margin: 0 auto;
        margin-top: 9px;
        display: block;
        background-color: white;
        cursor: pointer!important;
        border-radius: 63px;
        padding: 19px;
        align-items: center;
        box-sizing: border-box;

        :hover {
            background-color: #2EE59D;
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: #fff;
            transform: translateY(-7px);
        }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: center;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

export default Events;