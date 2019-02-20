clear
echo "Starting up"
pm2 start npm --name "dotnet:5000" -- run start-pro
echo "Service started"