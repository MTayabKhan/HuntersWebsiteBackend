# Introduction
 
 The brief was to make a CRUD application using the things we learned in training.
 
 * **Project Management:** I used Jira, a fully expanded board with 2 sprints. Here is the link: https://evilvillainy.atlassian.net/jira/software/projects/QP2/boards/10/roadmap

* **Version Control System:** Github, easier to work with and user friendly.

* **Database:** I used mySQL, which updates at midnight, something I found out in a way I didn't want to.

* **Java SE and Spring Boot:** created application in Java and used Springboot to bring it to life.

* **Testing:** Tried to get at least 80% test coverage using Junit and MockMVC.

* **Front-end development:** Visual Studio Code, with a javascript that worked as an API and a CSS to make it look nice.

## Planning

I made a scrum board in Jira and created User Stories and Epics, from there I made multiple tasks related to the user stories and assigned them to 2 different sprints depending on what I wanted to work on first. 

https://evilvillainy.atlassian.net/jira/software/projects/QP2/boards/10/roadmap

![Jira1](https://i.imgur.com/iQM1v1a.png)

I had some issues overflow but I managed to work through every one I needed to.


![Jira2](https://i.imgur.com/He3HxMG.png)

I set up 2 Git repositories and attempted feature branch modelling but failed horrifically at keeping track, as you can see from this graph of the backend product.

![gitHubNetWorkGraph](https://i.imgur.com/PjjlVZX.png)

# Database

I created one Database with one table to track all my Hunters in one place and for it to be referred to easily by my code.

mySQL:

![HuntersDatabase](https://i.imgur.com/HMFFYVn.png)

It has 4 columns, id (auto generated), echoes (integer), name(varchar), old_blood_feared(boolean).

I also had a schema and dummy database for testing, which was the same but had some dummy figures in it.

Here it is in Eclipse:

![TestingDatabase](https://i.imgur.com/hVInhA7.png)

## Back-end and Testing

The back end was created using Java in Spring Boot Framework, and I had to map my code correctly to make sure it worked:

![screenshotOfBackEndCode](https://i.imgur.com/TIeHV2m.png)

### Testing:

I used JUnit to test on this project.

![6SuccesfulTests](https://i.imgur.com/YmlOlej.png)

And I managed a good coverage in this project too:

![coverage](https://i.imgur.com/2rWOcf2.png)


My tests consisted of using MockMVC to imitate the controller class and to imitate HTTP requests like a user would, allowing me to see the outcomes of the HTTP and make changes if needed. I tested 90% of the programs to make sure everything worked as well as it could.

![testexample](https://i.imgur.com/A4bS76W.png)


## FRONT END:

My frontend was created in HTML, I imported a javascript document for the methods I use and a CSS file to style it. 

![incrediblyHorribleWebsite](https://i.imgur.com/oAoCrul.png)

The vibe I wanted to go for was of an early 2000s website. The crud functionality is done by 2 forms, and 5 buttons that do every function that is required. 

![getAllFunctionExample](https://i.imgur.com/tXNnIk0.png)


The JS was the API integration and it works pretty well.







