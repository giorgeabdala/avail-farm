docker build -t avail-farm-app .
docker stop avail-farm-app
docker rm avail-farm-app
docker run -d --name avail-farm-app avail-farm-app