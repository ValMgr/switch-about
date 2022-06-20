#!/bin/bash

# Wait for database to be ready
/wait --timeout=5 --port=3306

# Start the API
npm run start &

# Open localtunnel to the API
lt --port 3000 --subdomain switchabout &

# Wait for any process to exit
wait -n

# Exit with status of first process to exit
exit $?