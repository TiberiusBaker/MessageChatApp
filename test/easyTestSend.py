import requests
import json

# URL of the Node.js server endpoint
url = 'http://localhost:3000/send'  # Update the URL with your server endpoint

# JSON data to send in the request body
data = {
    'name': 'test',
    'message': 'test message'
}

# Convert Python dictionary to JSON string
json_data = json.dumps(data)

# Set the headers to indicate JSON content
headers = {'Content-Type': 'application/json'}

# Make the POST request
response = requests.post(url, data=json_data, headers=headers)

# Print the response from the server
print(response.text)
