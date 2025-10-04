import { streamText } from 'ai'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { z } from 'zod'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Use edge runtime for optimal performance
export const runtime = 'edge'

const chatRequestSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string()
  }))
})

export async function POST(request: Request) {
  try {
    // Check for API key
    const apiKey = process.env.OPENROUTER_API_KEY
    if (!apiKey) {
      return Response.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      )
    }

    // Parse and validate request
    const body = await request.json()
    const { messages } = chatRequestSchema.parse(body)

    if (!messages || messages.length === 0) {
      return Response.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // Create OpenRouter client
    const openrouter = createOpenRouter({
      apiKey,
      headers: {
        'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        'X-Title': 'Opal AI Chat Template',
      },
    })

    // Stream the response
    const result = await streamText({
      model: openrouter('z-ai/glm-4.5-air:free'),
      messages,
      system: 'You are a helpful AI assistant built with the Opal AI template. You provide clear, concise, and accurate responses.',
      maxTokens: 2048,
      temperature: 0.7,
    })

    // Return the streaming response
    return result.toDataStreamResponse()

  } catch (error) {
    console.error('Chat API error:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: 'Invalid request format', details: (error as z.ZodError).errors },
        { status: 400 }
      )
    }

    // Handle OpenRouter API errors
    if (error instanceof Error) {
      // Check for rate limiting
      if (error.message.includes('rate limit')) {
        return Response.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        )
      }

      // Check for authentication errors
      if (error.message.includes('authentication') || error.message.includes('api key')) {
        return Response.json(
          { error: 'Authentication failed. Please check your API key.' },
          { status: 401 }
        )
      }
    }

    // Generic error
    return Response.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

// Note: For production, consider implementing rate limiting middleware
// Example: https://nextjs.org/docs/app/building-your-application/routing/middleware
//
// Rate limits for free tier:
// - 20 requests per minute
// - 50-1000 requests per day (depending on credit purchase)
//
// You can implement rate limiting using services like:
// - Upstash Rate Limit
// - Vercel KV with Redis
// - Custom middleware with memory store (not recommended for production)