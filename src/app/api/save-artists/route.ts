import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { promises as fsPromises } from 'fs';

export async function POST(request: Request) {
  try {
    const { artists } = await request.json();
    const filePath = path.join(process.cwd(), 'artists.json');

    let currentArtists: string[] = [];
    try {
      const fileContents = await fsPromises.readFile(filePath, 'utf8');
      currentArtists = JSON.parse(fileContents);
    } catch (error) {
      console.error('Error fetching artists:', error);
      console.log('File does not exist or cannot be read, starting with empty array');
    }

    const uniqueArtists = [...new Set([...currentArtists, ...artists])];

    await fsPromises.writeFile(filePath, JSON.stringify(uniqueArtists, null, 2), 'utf8');

    return NextResponse.json({ success: true, artists: uniqueArtists });
  } catch (error) {
    console.error('Error saving artists:', error);
    return NextResponse.json(
      { error: 'Error saving artists' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { artist } = await request.json();
    const filePath = path.join(process.cwd(), 'artists.json');

    let fileContents: string = '[]';
    try {
      fileContents = await fsPromises.readFile(filePath, 'utf8');
    } catch (error) {
      console.error('Error fetching artists:', error);
    }

    let savedArtists: string[] = [];
    try {
      savedArtists = JSON.parse(fileContents);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      savedArtists = [];
    }

    const updatedArtists = savedArtists.filter((a: string) => a !== artist);

    await fsPromises.writeFile(filePath, JSON.stringify(updatedArtists, null, 2), 'utf8');

    return NextResponse.json({ success: true, artists: updatedArtists });
  } catch (error) {
    console.error('Error deleting artist:', error);
    return NextResponse.json(
      { error: 'Error deleting artist' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'artists.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }

    const fileContents = await fsPromises.readFile(filePath, 'utf8');
    const savedArtists = JSON.parse(fileContents);
    return NextResponse.json(savedArtists);
  } catch (error) {
    console.error('Error fetching file:', error);
    return NextResponse.json(
      { error: 'Error reading artists' },
      { status: 500 }
    );
  }
}

