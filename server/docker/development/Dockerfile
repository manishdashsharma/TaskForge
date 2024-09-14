# Use the Node.js base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the base tsconfig.json
COPY ../tsconfig.json /usr/src/

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["npm", "run", "dev"]
