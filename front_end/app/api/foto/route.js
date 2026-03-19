export async function GET() {
  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || 'http://backend:25000';

  try {
    const response = await fetch(`${BACKEND_URL}/foto`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Backend retornou status ${response.status}`);
    }

    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type':
          response.headers.get('content-type') || 'image/jpeg',
        'Cache-Control': 'no-store'
      }
    });

  } catch (error) {
    console.error('Erro no proxy:', error);

    return new Response(
      JSON.stringify({ error: 'Erro ao obter foto do backend' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}