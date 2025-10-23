import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


export async function POST(request: Request) {
  try {
    const { artists } = await request.json();
    const filePath = path.join(process.cwd(), 'artists.json');
    console.log('File route:', filePath);
    fs.writeFileSync(filePath, JSON.stringify(artists, null, 2));
    console.log('File done:', artists);
    return NextResponse.json({ message: 'Artists saved!', filePath });
  } catch (error) {
    console.error('Error writing file:', error);
    return NextResponse.json(
      { error: 'Error saving artists', details: error },
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
    const savedArtists = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return NextResponse.json(savedArtists);
  } catch (error) {
    console.error('Error fetching file:', error);
    return NextResponse.json(
      { error: 'Error reading artists' },
      { status: 500 }
    );
  }
}

