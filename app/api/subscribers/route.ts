import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
} 