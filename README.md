# TO RUN DE APP WITHIN A DOCKER CONTAINER RUN THE FOLLOWING COMMANDS

1. Go to /paga-todo-test dir
2. Create the image: docker build -t pagatodo-test .
3. To run the container with volumes: docker run -it -p 3000:3000 -v /app/node_modules -v .:/app pagatodo-test
4. To Run the container without volumes: docker run -it -p 3000:3000 pagatodo-test

Install dependencies ONLY while running the container:

1. Get the container id: docker ps -a (the first 4 digits)
2. Install the dependencies whitin the container:
   docker exec <container_id> <command> -> docker exec 1234 yarn add react-router-dom
3. Copy node_modules container to the host:
   sudo docker cp <container_id>:/app/<container directory> <host directory>
