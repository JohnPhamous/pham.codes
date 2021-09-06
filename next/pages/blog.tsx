import type { NextPage } from 'next';
import VimLayout from '../components/layouts/vim/VimLayout';

const Home: NextPage = () => {
  return (
    <div>
      <VimLayout title="Blog">
        <div>Hello</div>
      </VimLayout>
    </div>
  );
};

export default Home;
