import React from 'react'
import styled from 'styled-components'
import { alert, passive, darkBackground, darkAccentBackground } from '../colors'

const FooterWrapper = styled.footer`
  background: ${darkBackground};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  z-index: 5;
  h1 {
    margin: 0;
  }
`
const FooterItem = styled.span`
  padding: 5px 20px;
`

const Mode = styled(FooterItem)`
  background: ${props => props.background};
  font-weight: 800;
`

const Size = styled(FooterItem)`
  background: ${darkAccentBackground};
  margin-left: auto;
  cursor: pointer;
  @media (max-width: 600px) {
    display: none;
  }
`

const Date = styled(FooterItem)`
  background: ${darkBackground};
  @media (max-width: 600px) {
    display: none;
  }
`
export default class Footer extends React.Component {
  state = {
    isEditing: false,
  }

  toggleEdit = () => {
    if (this.state.isEditing) {
      document.body.contentEditable = 'false'
      document.designMode = 'off'
    } else {
      document.body.contentEditable = 'true'
      document.designMode = 'on'
    }
    this.setState({ isEditing: !this.state.isEditing })
  }

  componentDidMount = () => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 73 || e.keyCode === 27) {
        this.toggleEdit()
      }
    })
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', _e => {}, false)
  }

  render() {
    const { isEditing } = this.state
    return (
      <FooterWrapper>
        {isEditing ? (
          <Mode background={alert}>INSERT</Mode>
        ) : (
          <Mode background={passive}>NORMAL</Mode>
        )}
        <FooterItem>pham.html</FooterItem>

        <Size onClick={this.toggleEdit}>Toggle INSERT Mode</Size>
        <Date>Last Updated: 03/07/2020</Date>
      </FooterWrapper>
    )
  }
}
