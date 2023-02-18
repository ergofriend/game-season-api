export const newResponse = (data: object, status = 200) =>
  new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
