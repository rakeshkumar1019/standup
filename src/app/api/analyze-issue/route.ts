import { NextRequest } from 'next/server';
import { analyzeIssue } from '@/lib/issue-analyze';

export async function POST(request: NextRequest) {
  try {
    const { issueDescription } = await request.json();
    const analysis = await analyzeIssue(issueDescription);
    return Response.json(analysis);
  } catch (error) {
    console.error('Failed to analyze issue:', error);
    return Response.json({ error: 'Failed to analyze issue' }, { status: 500 });
  }
}

export async function GET() {
  return new Response('Method not allowed testß', { status: 405 });
}