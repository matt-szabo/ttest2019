# T Test

https://saqsearchtool.herokuapp.com

## Key Files

### PlayerList.js

Renders a list of players based on the team id passed as a prop via match (part of React Router).
Displays Team Name, TEam Lead, and a list of players.

An input field to allow filtering is available.

In the ComponentDidMount there is a chained promise that first gets a list of players, and then secondly, gets their corresponding names via a Promise.all method.

### TeamList.js

This component acts as the homepage and all teams available are listed.

A user can click on a team name to view their members.

### PlayerName.js

A small component allowing individual player names to be retrieved based on their exact user id.  For example, to show the name of a Team Lead, since this id lives on its own in the team's array separate from the other list of iterable names.

## App.js


In this file the routes to the different pages are setup using React Router.

A Links component is also displayed at the top of the app to show a Button that allows users back to the homepage, or team list view.




## To run locally:

git clone git@github.com:matt-szabo/ttest.git
<br>
npm install
<br>
npm start

thanks
