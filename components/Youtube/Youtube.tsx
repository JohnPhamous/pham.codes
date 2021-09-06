import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styles from './Youtube.module.css';

interface Props {
  videoId: string;
  title: string;
}

const Youtube = ({ videoId, title }: Props) => {
  return (
    <div>
      <LiteYouTubeEmbed
        activatedClass={styles.activated}
        iframeClass={styles.iframe}
        playerClass={styles.player}
        wrapperClass={styles.wrapper}
        id={videoId}
        announce="Watch"
        title={title}
      />
    </div>
  );
};

export default Youtube;
