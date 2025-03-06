# Scenario

This Project is an interview coding challenge. We have provided these starter files to serve as a starting point. You are not required to use these files if you are more comfortable starting your own project or working in a different framework.

## Challenge:

We have provided the initial structure for a TODO list. Most components have been pre-wired for you. We expect you to:
1. Implement a put route on the backend in the `app.ts` file.
2. Implement a database persistence layer on the backend that will retain data between sessions.
3. Write a test suite that includes tests for each implemented backend route.

## Getting Started
We have provided Dockerfiles and a docker-compose.yml file for this project. Follow the steps below to start the project using Docker.

### Prerequisites
Ensure you have both Docker and Docker Compose installed.

### Starting the Project
1. Open a terminal and navigate to the directory where this README.md is located.
2. Run the following command to build and start the Docker containers:
   ```sh
   docker-compose up --build
   ```
3. Once the containers are built and running, you can view the project in your browser at:
   ```sh
   http://localhost:4200
   ```

### Stopping the Containers
To stop the containers:
1. In the terminal where you started them, press `Ctrl + C`.
2. Then run the following command to remove the containers from your Docker daemon:
   ```sh
   docker-compose down
   ```
