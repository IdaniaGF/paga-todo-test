# TO RUN DE APP WITHIN A DOCKER CONTAINER RUN THE FOLLOWING COMMANDS

1. Go to /zurich-test dir
2. Create the image: docker build -t zurich-test .
3. Run the container: docker run -it -p 3000:3000 -v /app/node_modules -v .:/app zurich-test

Install dependencies ONLY while running the container:

1. Get the container id: docker ps (the first 4 digits)
2. Install the dependencies whitin the container:
   docker exec <container_id> <command> -> docker exec 1234 yarn add react-router-dom
3. Copy node_modules container to the host:
   docker cp <container_id>:/app/<container directory> <host directory>
