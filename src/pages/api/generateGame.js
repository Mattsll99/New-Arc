async function generateGameCode(gameName) {
  const response = await fetch('http://127.0.0.1:5000/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ game_name: gameName })
  });

  const data = await response.json();
  return data;
}

export { generateGameCode };