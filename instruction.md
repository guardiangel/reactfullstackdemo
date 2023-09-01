This demo includes front end and back end</br>
a) Front-end:</br>

1.  Change to the client directory and Create the app:
    yarn create react-app . --template typescript
2.  Add dependencies:
    yarn add axios
    yarn add @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom formic yup @mui/x-data-grid
3.  Start the server
    yarn start

b) Back-end </br>

1. Install dependencies: </br>
   yarn init </br>
   yarn add express cors mysql2 nodemon </br>
   yarn add sequelize sequelize-cli </br>

2. Start the server(Create index.tsx which is configured with the same name in the package.json and add express code, then set up the start scripts in the package.json). </br>
   yarn start </br>

Day 1 : </br>

1. Add index.tsx </br>
2. Configure the package.json </br>
3. F:\reactjs\reactfullstackdemo\server> sequelize init </br>

Question: </br>

1. F:\reactjs\reactfullstackdemo\server> sequelize init </br>
   'sequelize' is not recognized as an internal or external command, operable program or batch file. </br>
   Solution: </br>
   Add the installation path of sequelize to the system envrionment path.</br>

Key point:</br>

1. After installing sequelize, we initiailze the sequelize using sequelize init,then we can create files in the model folder. </br>
   each file in this filder stands for a table. </br>
2. Modify the database connection in the config.json of config folder.</br>
3. Adjust index.js in the root directory:</br>
   db.sequelize.sync().then(() => {</br>
   const port = 3001;</br>
   app.listen(port, () => {</br>
   console.log("Server listen at " + port);</br>
   });</br>
   });</br>

Day 2:</br>

1. Create Model and insert record to the table.</br>
2. See PostModel.js and PostModelRoute.js</br>

Key Point:</br>

1. When importing the model in the routes, don't refer to the specific files, the example is as follows:</br>
   //Don't refer to the specific file, such as ../models/PostModel guiquansun20230830</br>
   const { PostTab } = require("../models");</br>
   See PostModel.js for more details.</br>
2. The request in the sequelize is asynchronous by default, needs to add async and await on the request.See PostModelRoute.js for more details.</br>

Day 3:

1. Create post list

Day 4:

1. Create post detail and add button in the post list page
