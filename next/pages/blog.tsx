import type { NextPage } from 'next';
import VimLayout from '../components/layouts/vim/VimLayout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <VimLayout title="Blog">
        <div>Hello</div>
      </VimLayout>
    </div>
  );
};

export default Home;
