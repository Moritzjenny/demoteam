from flask import Flask, render_template, jsonify, send_from_directory, request
try:
    from . import mailService
except ImportError:
    import mailService
# fix windows registry stuff
import mimetypes


app = Flask(__name__, static_folder='static', template_folder='static')

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

# Add this line to set the MIME type for JavaScript files
app.config['MIME_TYPES'] = {
    '.js': 'application/javascript'
}   

# Define an API route to serve data to the frontend
@app.route('/api/data', methods=['POST'])
def submit_form():
    try:
        # Get the JSON data from the request body
        request_data = request.json
        print(request_data)

        # Insert the data into the database
        # sqlService.insert_contact_info(request_data['type']['label'], request_data['firstName'], request_data['name'], request_data['mail'], request_data['phone'], request_data['message'])

        # Send email
        mailService.send_mail(request_data['firstName'], request_data['name'], request_data['mail'], request_data['street'], request_data['plz'], request_data['place'], request_data['message'])

        response_data = {
            'status': 'success',
            'message': 'Data received and processed successfully',
            'data': request_data,
        }

        return jsonify(response_data)

    except Exception as e:
        print(e)
        response_data = {
            'status': 'error',
            'message': str(e)  # Convert exception to string for JSON serialization
        }
        return jsonify(response_data), 500

# This route will handle all unknown routes and serve the index.html,
# allowing the SPA to handle the routing.
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # Check if path is for a static file and serve it
    if "." in path:
        return send_from_directory(app.static_folder, path)
    # Serve index.html for all other paths
    return send_from_directory(app.static_folder, 'index.html')


# Run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()
