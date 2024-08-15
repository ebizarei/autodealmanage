FROM node:20.14.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the Next.js app
RUN npm run build

CMD ["npm", "run", "start"]
