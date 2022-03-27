FROM node:latest

# Creates directory
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Copy and installs bot requirements
COPY package.json /usr/src/bot
RUN npm install

# Copy files over
COPY . /usr/src/bot

# Start the bot
CMD ["node", "index.js"]