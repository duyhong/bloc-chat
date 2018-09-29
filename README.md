## Bloc Chat

An application that sends and receives messages in real time using AngularJS and Firebase.

Add a username:
![Screenshot of adding username](/app/assets/images/username.PNG)

Add a room:
![Screenshot of adding a room](/app/assets/images/addRoom.png)

Chat in a room:
![Screenshot of a chat room](/app/assets/images/blocchat.png)

Rooms and messages created in Firebase database:
![Screenshot of a chat room](/app/assets/images/Firebase DB.PNG)

## Pull Down the Code

Start by cloning the repository:

```
$ git clone https://github.com/duyhong/bloc-chat.git <your-frontend-project-name>
```

## Reset Git

This will be your personal project. So all of the past commit history that I used to build this app aren't needed. Also you will want to be able to push/pull code from your personal remote (Github) repository and NOT my repository.

Remove the existing local Git repository:

```
$ rm -r -f .git
```

Initialize a new Git repository, add all of these existing files, and commit them:

```
$ git init
$ git add .
$ git commit -m "initial commit"
```

Go to Github and create a new repository. Add that new repository as the proper remote. Then push your initial commit.

```
$ git remote add origin <URL TO NEW GITHUB REPO>
$ git push origin master
```

## Configuration

The project uses Node to run a JS server in development. This will be important when we want to use urls /album or /collection instead of the basic album.html or collection.html.

Install the project dependencies by running:

```
$ npm install
```

## Run the Application

Run the application server:

```
$ npm start
```

The server will start up. To stop the server, press `cntrl + c`.


## Directory Structure

```
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── bloc-logo-white.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```
