export const newResponse = (data: object, status = 200) =>
  new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    },
  })
