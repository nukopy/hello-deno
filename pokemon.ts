import { serve } from "https://deno.land/std/http/server.ts";

const handler = async (request: Request): Promise<Response> => {
  // extract params
  const requestUrl = new URL(request.url);
  const pokemonNumber = requestUrl.searchParams.get("pokemonNumber");

  // fetch data with params
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
  const resp = await fetch(url, {
    headers: {
      "accept": "application/json",
    },
  });

  // create HTML
  let body = `
    <p>Not Found</p>
    <p>Number: ${pokemonNumber}</p>
  `

  if (resp.status === 200) {
    const data = await resp.json();
    body = `
      <p>Number: ${data.id}</p>
      <p>Name: ${data.name}</p>
      <img src="${data.sprites.front_default}" alt="${data.name}" />
    `
  }

  return new Response(body, {
    headers: {
        "content-type": "text/html",
    },
  });
}

const host = "http://localhost";
const port = 8080;
const serverUrl = `${host}:${port}`;
serve(handler, {
  port,
  onListen: () => {
    console.log(`Listening on ${serverUrl}...`);
    console.log(`Try ${serverUrl}/?pokemonNumber=151 on your browser.`)
  },
});
