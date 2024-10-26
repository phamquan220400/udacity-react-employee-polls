## How to run

Run these following commands in project root directory <br/>

To install all dependencies

```shell
npm install
```

To start project

```shell
npm start
```

To test project

```shell
npm test
```

# Employee Polls Project Overview

You have been asked by the HR department of your company to build an application that employees can use internally. In
order to improve collaboration and transparency within the company, every employee can access the application and create
a poll with two proposed solutions. Employees can then vote on these solutions and see which solutions have the most
votes. In addition, HR has requested you have a dashboard that lists every employee ordered by the number of polls
they've created and answered. To give employees incentive to use your application, HR will give a prize each quarter for
the top employees who have created and answered the most polls.

In the "Employee Polls" Project, you'll build a web app that lets an employee create polls for coworkers. The process
goes like this: An employee is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "
neither" or "both" is not possible.

In your app, users will be able to answer polls, see which polls they haven’t answered, see how other people have voted,
post polls, and see the ranking of users on the leaderboard.

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| password  | String | The user’s password in order to log in the application                                                                                                                                                         |
| name      | String | The user’s first name  and last name                                                                                                                                                                           |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. 

### Questions

Questions include:

| Attribute | Type   | Description                            |
|-----------|--------|----------------------------------------|
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
|-----------|--------|--------------------------------------------------------------------|
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More
details about these properties:

| Attribute     | Type   | Description                                |
|---------------|--------|--------------------------------------------|
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`.
More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
|-----------|--------|------------------------------------------------------------------------------------------------------------------------------|
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database. If one of the parameters are missing,
an error is thrown.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these
properties:

| Attribute  | Type   | Description                                                                             |
|------------|--------|-----------------------------------------------------------------------------------------|
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |

## Project structure

```
.
├── CODEOWNERS
├── LICENSE.txt
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── _DATA.js
    ├── _DATA.test.js
    ├── components
    │   ├── QuestionCard.js
    │   └── QuestionList.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── pages
    │   ├── HomePage.js
    │   ├── LeaderBoard.js
    │   ├── Login.js
    │   ├── Login.test.js
    │   ├── Menu.js
    │   ├── NewQuestion.js
    │   ├── NewQuestion.test.js
    │   ├── NotFound.js
    │   ├── QuestionDetail.js
    │   └── __snapshots__
    │       ├── Login.test.js.snap
    │       └── NewQuestion.test.js.snap
    ├── reportWebVitals.js
    ├── setupTests.js
    └── store
        ├── action
        │   ├── authAction.js
        │   ├── questionAction.js
        │   └── userActions.js
        ├── index.js
        ├── middleware
        │   └── authMiddleware.js
        ├── reducer
        │   ├── authReducer.js
        │   ├── combine.js
        │   ├── questionReducer.js
        │   └── userReducer.js
        └── store.js

```