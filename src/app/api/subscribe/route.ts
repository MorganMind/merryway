import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Create tmp directory if it doesn't exist
    const tmpDir = join(process.cwd(), 'tmp');
    try {
      await mkdir(tmpDir, { recursive: true });
    } catch {
      // Directory might already exist
    }

    // Read existing emails
    const filePath = join(tmpDir, 'subscribers.json');
    let subscribers: string[] = [];
    
    try {
      const data = await readFile(filePath, 'utf-8');
      subscribers = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 200 }
      );
    }

    // Add new email
    subscribers.push(email);
    
    // Write back to file
    await writeFile(filePath, JSON.stringify(subscribers, null, 2));

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
