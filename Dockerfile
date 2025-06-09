<<<<<<< HEAD
# Use Node.js LTS
FROM node:18-alpine

# Create app directory
=======
# Base image
FROM node:20-alpine

# Set working directory
>>>>>>> 1b206d614589b0df7079994e41120cafce736271
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
<<<<<<< HEAD
RUN npm install
=======
RUN npm install --legacy-peer-deps
>>>>>>> 1b206d614589b0df7079994e41120cafce736271

# Copy project files
COPY . .

<<<<<<< HEAD
# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
=======
# Build the application
RUN npm run build

# Expose port
EXPOSE 8000

# Start the application
>>>>>>> 1b206d614589b0df7079994e41120cafce736271
CMD ["npm", "start"]
