# Notes app

A front-end, single page web app that allows you to create a list of notes. 
For this challenge, use of existing web frameworks, libraries or even a test library is allowed (i.e. no Angular, React, Jasmine, jQuery etc.).
(NB: notes do not need to be permanently stored for this challenge. If the user refreshes their web page, they'll lose their notes, and that's fine.)

User stories
------------
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```
As a programmer
I can create a new note
So I can record something I need to remember
```
```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

Installation
------------
- ```git clone https://github.com/lauraweston/notes-app.git```
- ```npm install```

Usage
-----
- From command line, run: ```npm run server```
- In browser, go to: ```http://localhost:8080/```

Testing
-------
- Open index.html in browser with query string: ```index.html?test=true```
- View test messages in the browser console  
(The test library can be found in ```test/testLibrary.js```)