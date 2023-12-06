# Innovid-Challenge

## INSTALLATION

- This project requires Node v16 or higher
- Clone repository ``` git clone https://github.com/GabrielLaTorre/Innovid-Challenge.git```
- Go to Innovid-Challenge downloaded folder
- Go to the server folder  ``` cd server ```  and run  ```npm install```
- Go to the client folder  ``` cd client ```  and run  ```npm install```


## SERVER

#### Run server locally:
- Go to the server folder  ``` cd server ```
- Run  ``` npm run dev ```
- Make request to http://localhost:4000

#### Endpoints
- ```GET /tasks```  => list all available tasks
- ```POST /tasks```  => create a new task
- ```DELETE /task/id```  => delete the task associated with the id sent by query parameter


## CLIENT

#### Run client locally:
- Go to the client folder  ``` cd client ```
- Run  ``` npm run dev ```
- Go to the browser and navigate to http://127.0.0.1:5173/
