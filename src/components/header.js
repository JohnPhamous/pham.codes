import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Typist from 'react-typist'
import '../../node_modules/react-typist/dist/Typist.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Resume from '../../static/john_pham_resume.pdf'

const HeaderContainer = styled.div`
  margin-bottom: 0px;
`

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Title = styled(Link)`
  all: unset;
  cursor: pointer;

  h1 {
    margin-bottom: 0px;

    @media (max-width: 500px) {
      font-size: 28px;
    }
  }
`

const LinkItem = styled.div`
  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`

const Method = styled.span`
  color: rgb(139, 233, 253);
`

const Argument = styled.span`
  color: rgb(255, 121, 198);
`

const Location = styled.span`
  color: rgb(189, 147, 249);
`

const Header = () => {
  return (
    <HeaderContainer>
      <Title to="/">
        <h1>
          <Typist>
            JohnPham<Location>@Riverside</Location>
          </Typist>
        </h1>
      </Title>
      <LinksContainer>
        <LinkItem>
          <a href={Resume}>
            <Method>
              resume(<Argument>this</Argument>)
            </Method>
          </a>
        </LinkItem>
        <LinkItem>
          <Link to="/projects">
            <Method>
              projects(<Argument>this</Argument>)
            </Method>
          </Link>
        </LinkItem>
        <LinkItem>
          <OutboundLink
            href="mailto:johnphammail@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Method>
              email(<Argument>this</Argument>)
            </Method>
          </OutboundLink>
        </LinkItem>
        <LinkItem>
          <OutboundLink
            href="https://github.com/JohnPhamous"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Method>
              github(<Argument>this</Argument>)
            </Method>
          </OutboundLink>
        </LinkItem>
        <LinkItem>
          <OutboundLink
            href="https://www.linkedin.com/in/johnphamous/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Method>
              linkedin(<Argument>this</Argument>)
            </Method>
          </OutboundLink>
        </LinkItem>
        <LinkItem>
          <OutboundLink
            href="https://www.flickr.com/photos/pnt101/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Method>
              design(<Argument>this</Argument>)
            </Method>
          </OutboundLink>
        </LinkItem>
      </LinksContainer>
    </HeaderContainer>
  )
}

export default Header
