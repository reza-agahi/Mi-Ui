1. install node.js(using nvm: https://github.com/creationix/nvm), sqlite3 and libsqlite3-dev
2. run "npm install" from the root directory
3. run "node model/index.js" from the root directory for creating database
4. compile insertion c++ code with "g++ -o insert insert.cpp -l sqlite3 -std=c++11"
   in ./src folder and test sqlite insertion in c++
5. follow this rule for setting imageUrl column of database (in sqlQuery function of insert.cpp): "/images/imageName.jpg"
6. run web based dashboard with "npm start" and get it at localhost:3000
7. npm install -g nodemon for node process management
