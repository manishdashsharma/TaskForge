#!/bin/bash

# Check if the .env.development file exists
if [ ! -f .env.development ]; then
  echo "Error: .env.development file not found! Please create this file."
  exit 1
fi

# Check if the docker-compose.dev.yml file exists
if [ ! -f docker-compose.dev.yml ]; then
  echo "Error: docker-compose.dev.yml file not found! Please create this file."
  exit 1
fi

# Set prefixes for TaskForge resources
TASKFORGE_IMAGE_PREFIX="taskforge"  # Change this to your image name prefix if necessary
MONGO_VOLUME="mongo-data"
NETWORK_NAME="queue-net"

# Notify the user about the cleanup process
echo "Starting cleanup process for TaskForge..."

# Stop all running TaskForge containers
echo "Stopping all TaskForge containers..."
docker stop mongo_container client server > /dev/null 2>&1

# Remove all TaskForge containers
echo "Removing all TaskForge containers..."
docker rm mongo_container client server > /dev/null 2>&1

# Remove all TaskForge images
echo "Removing all TaskForge Docker images..."
docker rmi $(docker images -q --filter "reference=mongo*") > /dev/null 2>&1
docker rmi $(docker images -q --filter "reference=client*") > /dev/null 2>&1
docker rmi $(docker images -q --filter "reference=server*") > /dev/null 2>&1

# Remove the MongoDB volume
echo "Removing the MongoDB Docker volume..."
docker volume rm $MONGO_VOLUME > /dev/null 2>&1

# Optionally remove the TaskForge network
echo "Removing the TaskForge Docker network..."
docker network rm $NETWORK_NAME > /dev/null 2>&1

echo "Cleanup complete. All TaskForge containers, images, and volumes have been removed."

# Define the services to start (default: both server and client)
SERVICES="server client"

# Check if an argument is passed (server or client)
if [ $# -eq 1 ]; then
  if [ "$1" == "server" ]; then
    SERVICES="server"
  elif [ "$1" == "client" ]; then
    SERVICES="client"
  else
    echo "Invalid argument: '$1'. Please use 'server' or 'client'."
    exit 1
  fi
fi

# Notify the user about the services starting
echo "Starting $SERVICES using Docker Compose..."

# Start the services with Docker Compose
docker-compose --env-file .env.development -f docker-compose.dev.yml up --build $SERVICES

# Notify user of successful start
echo "$SERVICES have been successfully started!"
