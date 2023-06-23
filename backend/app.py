from flask import Flask, render_template, send_from_directory, jsonify

app = Flask(__name__, static_folder='static', template_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

# Define an API route to serve data to the frontend
@app.route('/api/data')
def get_data():
    # Replace this with your own data retrieval logic
    data = {
        'message': 'Hello from Flask!',
        'numbers': [1, 2, 3, 4, 5]
    }
    return jsonify(data)

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()