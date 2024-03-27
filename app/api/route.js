export function GET() {
  return new Response('{"id":123, "name":"steve"}', { headers: { 'content-type': 'application/json' }, status: 200 });
}

export function POST() {
  return new Response('{"id":123, "name":"steve"}', { headers: { 'content-type': 'application/json' }, status: 200 });
}

export function DELETE() {
  return new Response('{"id":123, "name":"steve"}', { headers: { 'content-type': 'application/json' }, status: 200 });
}
