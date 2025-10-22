FROM webapp.io/react
2
WORKDIR /app
3
COPY . .
4
RUN npm install
5
RUN BACKGROUND npm start
6
EXPOSE WEBSITE localhost:8000
7
RUN npm run reflect-run https://$DEPLOYMENT_HOST
