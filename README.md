# docs

docker build -t wkrcodes/docs .
docker run -it -p 8181:8080 --rm --name wkrcodes-docs wkrcodes/docs