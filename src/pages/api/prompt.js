const openai = require('openai');
openai.apiKey = process.env.OPENAI_API_KEY; // Replace with your own API key

async function generateGameClonePrompt(gameName) {
  const prompt = `Create an arcade-styled ${gameName} clone with Python and Pygame, with a black background and white items, without importing any asset, image, or sound, but you can use libraries if you need. The clone should behave exactly like the original version of ${gameName} (e.g. if on the original version on the iPhone I need to tap on the screen, replace it with tapping on the space bar, or enter, if I need to choose direction on the iPhone, replace it with the keyboard arrows). The game should only stop when the user loses.`;

  const response = await openai.complete({
    engine: 'text-davinci-002',
    prompt: prompt,
    maxTokens: 1024,
    n: 1,
    stop: null,
    temperature: 0.5,
  });

  return response.choices[0].text.trim();
}

module.exports = { generateGameClonePrompt };