import NextLink from 'next/link';
import Typewriter from '../Typewriter/Typewriter';

const VimHeader = () => {
  return (
    <Header>
      <NextLink href="/">
        <a>
          <Brand aria-label="John Pham at Seattle">
            <Typewriter>
              <BrandName>JohnPham</BrandName>@Seattle
            </Typewriter>
          </Brand>
        </a>
      </NextLink>

      <LinksContainer>
        <li>
          <StyledLink href="mailto:john@pham.codes">email</StyledLink>
        </li>
        <li>
          <StyledLink href="https://www.linkedin.com/in/johnphamous/" target="_blank">
            linkedin
          </StyledLink>
        </li>
        <li>
          <StyledLink href="https://twitter.com/JohnPhamous" target="_blank">
            tweet
          </StyledLink>
        </li>
        {/* <li>
          <NextLink href="/blog" passHref>
            <StyledLink aria-label="Blog">_blog</StyledLink>
          </NextLink>
        </li> */}
        <li>
          <NextLink href="/bucket-list" passHref>
            <StyledLink aria-label="Bucket List">_bucketList</StyledLink>
          </NextLink>
        </li>
        <li>
          <NextLink href="/the-phamous" passHref>
            <StyledLink aria-label="The Phamous">_thePhamous</StyledLink>
          </NextLink>
        </li>
      </LinksContainer>
    </Header>
  );
};

export default VimHeader;

const Header = styled('header', {});

const Brand = styled('h1', {
  paddingTop: '$s32',
  margin: 0,
  width: 'fit-content',
  fontSize: '$h1',
  color: '$secondaryAccent',
  cursor: 'pointer',
});

const BrandName = styled('span', {
  color: '$link',

  '&:focus, &:hover': {
    textDecoration: 'underline',
  },
});

const LinksContainer = styled('ul', {
  margin: 0,
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '$s24',
  rowGap: '$s8',
  listStyle: 'none',
});

const StyledLink = styled('a', {
  position: 'relative',
  //   2ch to account for the ::before and ::after contents
  paddingRight: '3ch',
  display: 'inline-block',

  '&::before': {
    content: `()`,
    position: 'absolute',
    right: '1ch',
    color: '$accent',
  },
  '&::after': {
    content: `;`,
    position: 'absolute',
    right: '0ch',
    color: '$textPrimary',
  },
});
