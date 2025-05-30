import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email }
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'You are already on the waitlist!' },
        { status: 200 }
      );
    }

    // Insert new subscriber
    const subscriber = await prisma.subscriber.create({
      data: {
        email
      }
    });

    return NextResponse.json({ 
      message: 'Successfully joined the waitlist!',
      subscriber
    });
  } catch (error) {
    console.error('Error in waitlist POST:', error);
    return NextResponse.json(
      { error: 'Failed to add subscriber' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error('Error in waitlist GET:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
} 