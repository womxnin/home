import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import InstagramIcon from '@static/icons/instagram.svg';

const SOCIAL = [
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/womxn_in',
  },
];
export default class SubscribeForm extends React.Component {
  state = {
    name: null,
    email: null,
  };

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        alert(msg);
      })
      .catch(err => {
        console.log('err', err);
        alert(err);
      });
  };
  render() {
    return (
      <Section id="join" accent="secondary">
        <StyledContainer>
          <h2>
            join womxnin!
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </h2>
          <p>(all are welcome &amp; we won't spam you)</p> <br />
          <form onSubmit={this._handleSubmit}>
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="first"
              name="FNAME"
            />
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="last"
              name="LNAME"
            />
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="email"
              name="email"
            />
            <input type="submit" id="subbtn" value="submit" />
          </form>
        </StyledContainer>
      </Section>
    );
  }
}

const StyledContainer = styled(Container)`
  display: block;
  justify-content: flex-end;
  position: relative;
  text-align: left;
  padding-top: 10px;
  form {
    input {
      inline-size: 20%;
      margin: 0 1em 0 0;
      padding: 4px;
      color: white;
    }
    input[type='submit'] {
      border-radius: 4px;
      width: 90px;
      border-color: #4b00ff;
      background-color: transparent;
      color: #4b00ff;
      cursor: pointer;
    }
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
    form {
      input {
        inline-size: -webkit-fill-available;
        margin: 10px;
      }
      input[type='submit'] {
        border-radius: 4px;
        width: 90px;
        border-color: #4b00ff;
        background-color: transparent;
        color: #4b00ff;
        float: right;
      }
    }
  }
`;

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
