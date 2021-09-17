import { authorize } from '@liveblocks/node';
import type { NextApiRequest, NextApiResponse } from 'next';

const secret = process.env.NEXT_PUBLIC_LIVE_BLOCKS_SECRETS || '';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  /**
   * Implement your own security here.
   *
   * It's your responsibility to ensure that the caller of this endpoint
   * is a valid user by validating the cookies or authentication headers
   * and that it has access to the requested room.
   */
  const room = req.body.room;
  const result = await authorize({ room, secret });
  return res.status(result.status).end(result.body);
}
