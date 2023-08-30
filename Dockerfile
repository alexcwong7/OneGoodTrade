# Use an official Node.js runtime as a parent image
FROM node:12.21.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Expose port 8080 for the app to listen on
EXPOSE 8080

# Start the app
CMD [ "npm", "start" ]
