// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log('Received body:', body);

        if (!body.prompt || typeof body.prompt !== 'string' || !body.prompt.trim()) {
            return NextResponse.json(
                { error: 'Prompt is required' },
                { status: 400 }
            );
        }

        const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: body.model || "llama2",
                prompt: body.prompt,
                stream: false
            }),
        });

        if (!ollamaResponse.ok) {
            const errorText = await ollamaResponse.text();
            return NextResponse.json(
                { error: errorText },
                { status: ollamaResponse.status }
            );
        }

        const data = await ollamaResponse.json();
        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Internal server error' },
            { status: 500 }
        );
    }
}