# customer-management-mfe/Dockerfile
FROM node:14-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the entire app and build
COPY . .
RUN npm run build

# Expose the port the app will run on and start the app
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
