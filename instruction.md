This demo include front end and back end</br>
Front-end:</br>

Back-end </br>

1.Install dependencies: </br>
yarn init </br>
yarn add express cors mysql2 nodemon typescript </br>
yarn add sequelize sequelize-cli </br>

2.Start the server(Create index.tsx which is configured with the same name in the package.json and add express code, then set up the start scripts in the package.json). </br>

yarn start </br>

Day 1: </br>
Add index.tsx </br>
Configure the package.json </br>
1.F:\reactjs\reactfullstackdemo\server> sequelize init </br>

Question: </br>
1.F:\reactjs\reactfullstackdemo\server> sequelize init </br>
'sequelize' is not recognized as an internal or external command, operable program or batch file. </br>
Solution: </br>
Add the installation path of sequelize to the system envrionment path.</br>

Key point:
After installing sequelize, we initiailze the sequelize using sequelize init,then we can create files in the model folder.
each file in this filder stands for a table. </br>
