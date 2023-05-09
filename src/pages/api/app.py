from flask import Flask, request
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = "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"

# Route for generating game code
@app.route('/generate', methods=['POST'])
def generate_game():
    # Get game name from the request data
    game_name = request.form['game_name']

    # Generate game code using OpenAI's API
    prompt = f"Create an arcade-styled {game_name} game with Python and Pygame. The game should have a black background and white objects. You cannot import any images or sounds. The game should be similar to Flappy Bird."
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )

    # Return generated game code
    return response.choices[0].text

if __name__ == '__main__':
    app.run()