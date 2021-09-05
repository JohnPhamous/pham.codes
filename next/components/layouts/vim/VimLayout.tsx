import { styled } from '../../../styles/stitches.config';
import VimFooter from '../../Footer/VimFooter';
import VimHeader from '../../Header/VimHeader';

const VimLayout: React.FC = (props) => (
  <Layout>
    <div>
      <VimHeader />
      <main>{props.children}</main>
    </div>

    <VimFooter />
  </Layout>
);

export default VimLayout;

const Layout = styled('div', {
  background: '$background',
  color: '$textPrimary',
  height: '100%',
});
