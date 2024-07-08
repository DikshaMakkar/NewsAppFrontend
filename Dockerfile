FROM node:lts-alpine AS frontend-build  
WORKDIR /app
COPY package*.json ./  
RUN npm install  # Install frontend dependencies

FROM node:lts-alpine AS frontend-runtime
WORKDIR /app
COPY --from=frontend-build /app/node_modules ./node_modules  
COPY . .  
EXPOSE 3000  
CMD [ "npm", "start" ]  

# build
# docker build -t newsapp-frontend-image .
