import '../styles/globals.css';
import type { AppProps } from 'next/app';
import VimLayout from '../components/layouts/vim/VimLayout';
import { H } from 'highlight.run';
import { createClient } from '@liveblocks/client';
import { LiveblocksProvider, RoomProvider } from '@liveblocks/react';
import React from 'react';

const client = createClient({
  authEndpoint: '/api/auth',
});

if (process.env.NODE_ENV !== 'development') {
  H.init('wneyvxe4', {
    networkRecording: {
      recordHeadersAndBody: true,
    },
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LiveblocksProvider client={client}>
      <RoomProvider
        id={'example-live-cursors'}
        /**
         * Initialize the cursor position to null when joining the room
         */
        defaultPresence={() => ({
          cursor: null,
        })}
      >
        <VimLayout title="John Pham">
          <Component {...pageProps} />
        </VimLayout>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
export default MyApp;
