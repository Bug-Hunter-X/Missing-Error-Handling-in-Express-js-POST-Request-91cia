# Missing Error Handling in Express.js POST Request

This repository demonstrates a common error in Express.js applications: missing error handling for missing request bodies in POST requests.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version.

## Bug

The original code lacks proper checks for the existence of the request body (`req.body`). If a client sends a POST request without a body, the server will attempt to access undefined properties which can lead to unexpected behavior or crashes.

## Solution

The solution involves adding validation to ensure `req.body` exists and contains the expected data before proceeding with the request processing.  This prevents errors and provides more robust error handling.