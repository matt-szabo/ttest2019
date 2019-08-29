# T Test

## Usage

The Home page loads the list of teams.
Click on a team row to get its full player list.
Click on List of Teams button to return to main page.

## Approach

For this project I basically took the following approach to develop the solution:

1. Setup components to view Team List and Player List from each team.
2. Create routes using React Router.
3. Create small component for individual player names.
4. Apply the input field filter on the team list.
5. Apply the input field filter on the player list for a team.
6. Add chained promises to PlayerList to retrieve full list of players at once for filter purposes.
7. Minor CSS enhancements.
8. Comments.


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
