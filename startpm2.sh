clear
echo "Starting up"
pm2 start npm --name "dotnet" -- run start-pro
echo "Service started"