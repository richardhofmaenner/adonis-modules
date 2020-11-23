# Build AdonisJS
FROM node:15-alpine as builder
# Workaround for now, since bodyparser install relies on Git
RUN apk add --no-cache git
# Set directory for all files
WORKDIR /home/node
# Copy over package.json files
COPY package*.json ./
# Install all packages
RUN yarn install
# Copy over source code
COPY . .
# CSS Directory
RUN mkdir public/css
# Make CSS File
RUN touch public/css/app.css
RUN chmod 777 public/css/app.css
# Build SCSS Files for production
RUN yarn run sass-build
# Build AdonisJS for production
RUN yarn build --production


# Install packages on different step,
# since bodyparser install requires git
# but runtime does not need it
FROM node:15-alpine as installer
# Workaround
RUN apk add --no-cache git
# Set directory for all files
WORKDIR /home/node
# Copy over package.json files
COPY package*.json ./
# Install only prod packages
RUN yarn install --production


# Build final runtime container
FROM node:15-alpine
# Install deps required for this project
RUN apk add --no-cache ffmpeg
# Use non-root user
USER node
# Make directory for app to live in
# It's important to set user first or owner will be root
RUN mkdir -p /home/node/app/
# Set working directory
WORKDIR /home/node/app
# Copy over required files from previous steps
# Copy over built files
COPY --from=builder /home/node/build ./build
# Copy over node_modules
COPY --from=installer /home/node/node_modules ./node_modules
# Copy over package.json files
COPY package*.json ./
# Expose port 3333 to outside world
EXPOSE 3333
# Start server up
CMD [ "node", "./build/server.js" ]
