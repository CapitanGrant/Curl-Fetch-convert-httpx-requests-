## Curl & Fetch to Python httpx & Requests Converter WebSite

This Python script is designed to make your life easier when working with HTTP requests in Python.  It quickly converts curl and fetch commands into equivalent Python code using the popular `httpx` or `requests` libraries.

### Why use this?

* **Save Time:**  Avoid manually translating curl/fetch commands into Python code. 
* **Improved Readability:** Python code is often more readable than curl or fetch commands.
* **Seamless Integration:** Easily integrate HTTP requests into your Python projects.
* **Powerful Features:**  Leverage the full power of `httpx` and `requests` for more advanced tasks.

### Installation

```bash
Step 1. git clone https://github.com/CapitanGrant/Curl-Fetch-convert-httpx-requests-

Step 2. pip install -r requirements.txt

Step 3. uvicorn app.main:app --reload

Step 4. http://127.0.0.1:8000

Example:
Curl command:

curl -X POST 'https://api.example.com/users' \
  -H 'Content-Type: application/json' \
  -d '{"name": "John Doe", "email": "john.doe@example.com"}'

Output:

import requests

response = requests.post(
    'https://api.example.com/users',
    headers={'Content-Type': 'application/json'},
    json={'name': 'John Doe', 'email': 'john.doe@example.com'}
)

