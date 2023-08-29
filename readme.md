This demo include front end and back end
Front-end:

Back-end

1.Install dependencies:
yarn init
yarn add express cors mysql2 nodemon typescript
yarn add sequelize sequelize-cli

2.Start the server(Create index.tsx which is configured with the same name in the package.json and add express code, then set up the start scripts in the package.json).

yarn start

Day 1:
Add index.tsx
Configure the package.json
1.F:\reactjs\reactfullstackdemo\server> sequelize init

Question:
1.F:\reactjs\reactfullstackdemo\server> sequelize init
'sequelize' is not recognized as an internal or external command,
operable program or batch file.
Solution:
Add the installation path of sequelize to the system envrionment path.
