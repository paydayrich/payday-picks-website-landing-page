interface Env {
  // Define your environment variables here
  // For example, if you want to use a database or external service
  // DATABASE_URL?: string;
  // WEBHOOK_URL?: string;
}

interface WaitlistRequest {
  email: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request } = context;

  // Set CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Parse the request body
    const body: WaitlistRequest = await request.json();
    
    // Validate email
    if (!body.email || typeof body.email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Here you can add your logic to store the email
    // Options include:
    // 1. Store in Cloudflare KV
    // 2. Send to external webhook (like Zapier, Make.com)
    // 3. Store in external database
    // 4. Send to email service (like ConvertKit, Mailchimp)
    
    // For now, we'll just log it and return success
    console.log('New waitlist signup:', body.email);

    // Example: Send to a webhook (uncomment and configure as needed)
    /*
    if (context.env.WEBHOOK_URL) {
      await fetch(context.env.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: body.email,
          timestamp: new Date().toISOString(),
          source: 'waitlist',
        }),
      });
    }
    */

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully joined waitlist' 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
};