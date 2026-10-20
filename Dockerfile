FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app
COPY server ./server
COPY dist ./dist

EXPOSE 8080
CMD ["node", "server/index.js"]
