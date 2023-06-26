from flask import Flask, render_template, jsonify, send_from_directory

app = Flask(__name__, static_folder='static', template_folder='static')
app.config['MIME_TYPES'] = {'js': 'application/javascript'}

# Define an API route to serve data to the frontend
@app.route('/api/data')
def get_data():
    # Replace this with your own data retrieval logic
    data = {
        'message': 'Hello from Flask!',
        'numbers': [1, 2, 3, 4, 5]
    }
    return jsonify(data)

# This route will handle all unknown routes and serve the index.html,
# allowing the SPA to handle the routing.
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path.endswith('.js'):
        # Explicitly set the MIME type for JavaScript files
        return send_from_directory(app.static_folder, path, mimetype='application/javascript')
    elif path.endswith('.css'):
        # Explicitly set the MIME type for CSS files
        return send_from_directory(app.static_folder, path, mimetype='text/css')
    elif path:
        # Attempt to serve any other static files
        return send_from_directory(app.static_folder, path)
    else:
        # Default to index.html
        return send_from_directory(app.static_folder, 'index.html')

# Run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()
