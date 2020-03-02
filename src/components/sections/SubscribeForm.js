import React, { Component } from 'react';
import styled from 'styled-components';
import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import addToMailchimp from 'gatsby-plugin-mailchimp';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import { StyledContainer } from '../common/Navbar/style';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/womxnin',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/womxn.in',
  }
];
export default class SubscribeForm extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
        <Section id="join" accent="secondary">
        <StyledContainer style={{ position: 'relative', display: 'inline-block' }}>
          <h2>join womxnin!<SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons></h2>
          <p>(we won't spam you)</p> <br/>
           <form onSubmit={this._handleSubmit}>
                        <input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="first"
                            name="first"
                        />
                        <input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="last"
                            name="last"
                        />
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="email"
                            name="email"
                        />
                        <input type="submit" id="subbtn"
                        />
            </form>

            
          </StyledContainer>
          </Section>
        );     
    }
}

const SocialIcons = styled.div`
  display: inline;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;