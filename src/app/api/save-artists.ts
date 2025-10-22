import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Save artists
    const artists = req.body.artists;
    const filePath = path.join(process.cwd(), 'artists.json');
    fs.writeFileSync(filePath, JSON.stringify(artists));
    res.status(200).json({ message: 'Artists saved!' });
  } else if (req.method === 'GET') {
    // Read the list
    const filePath = path.join(process.cwd(), 'artists.json');
    const savedArtists = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.status(200).json(savedArtists);
  }
}
