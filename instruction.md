This demo include front end and back end\s\s
Front-end:\s\s

Back-end \s\s

1.Install dependencies: \s\s
yarn init \s\s
yarn add express cors mysql2 nodemon typescript \s\s
yarn add sequelize sequelize-cli \s\s

2.Start the server(Create index.tsx which is configured with the same name in the package.json and add express code, then set up the start scripts in the package.json). \s\s

yarn start \s\s

Day 1: \s\s
Add index.tsx \s\s
Configure the package.json \s\s
1.F:\reactjs\reactfullstackdemo\server> sequelize init \s\s

Question: \s\s
1.F:\reactjs\reactfullstackdemo\server> sequelize init \s\s
'sequelize' is not recognized as an internal or external command, operable program or batch file. \s\s
Solution: \s\s
Add the installation path of sequelize to the system envrionment path.\s\s

Key point:
After installing sequelize, we initiailze the sequelize using sequelize init,then we can create files in the model folder.
each file in this filder stands for a table. \s\s
