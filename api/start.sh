#!/bin/bash
source ./.env
npm run start &

# Open localtunnel to the API
lt --port 3000 --subdomain $API_SUBDOMAIN &

# Wait for any process to exit
wait -n

# Exit with status of first process to exit
exit $?