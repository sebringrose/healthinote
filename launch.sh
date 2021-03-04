#!/bin/sh
echo "Waiting 3 seconds for deployer interrupt ..."
sleep 3

if [ -f /usr/local/bin/add_config.sh ]; then
  /usr/local/bin/add_config.sh
fi

if [ -f /sandbox/config.json ]; then
  export SI=`jq -r '.googleAnalytics.siteId' /sandbox/config.json`
fi
if [ "$SI" = "null" ]; then
  export SI=`jq -r '.googleAnalytics.siteId' /app/config.json`
fi

echo "rewriting ###siteId### to sandbox value: $SI"
find /app/public/ -type f -exec /replacer.sh $SI {} \;

echo "Starting ..."
npm run docker