# Can of Books

**Authors**: Maximo Vincente Mejia, Dustin Apodaca
**Version**: 1.0.1

## Overview

An application  to track what books have impacted you, and what's recommended to read next.

## Getting Started

***Steps to get started with the application:***

- Set up repositories for the front and back end to be able to pair program
- In the backend, we added Mongoose to the server, and ensure the Mongo is running locally.
  - Build a Mongoose Book Schema with the valid keys
  - Use the schema to craft a Book Model
  - Create a books route
  - be able to return books collection as JSON to client
- In the Frontend create a BestBooks component, make a GET request to the server /books route, in the componentDIDMount function
  - Store the data returned from the server in the application state
  - Render all books returned in a carousel.
  - Use react Router to navigate between Home and About pages
  - Add an About page at path /about

## Architecture

JavaScript, React, Node.js, Express, MongoDB, Mongoose

## Change Log

10-03-2022 - Application can successfully recieve all books requested from server as JSON and render it in a carousel component

## Time Estimate

- ***Name of Feature:*** Backend - Return Books Collection as JSON to Client
- ***Estimate of time needed to complete:*** 1.5 hour
- ***Start Time:*** 4:00pm EST
- ***Finish Time:*** 5:03pm EST
- ***Actual time needed:*** 1hr 3min

- ***Name of Feature:*** Render requested book collection in a Carousel component
- ***Estimate of time needed to complete:*** 2 hours
- ***Start Time:*** 4:00pm EST
- ***Finish Time:*** 5:42pm EST
- ***Actual time needed:*** 1hr 42min

## Cooperation Plan

Every person on your team is an asset. This is your chance to discover the hidden strengths and areas for growth for each team member.

1. What are the key strengths of each person on the team?

- Dustin - Design, CSS, interpersonal skills, management
- Maximo - Organizational skills, structure and whiteboarding, Constructor functions, Javascript, interpersonal skills, management, team leadership.

2. How can you best utilize these strengths in the execution of your project?

- Dustin - I can assist by taking leadership roles in the design side of the project i.e look and feel, UI, overal asthetic, and a Manager
- Maximo - Making sure that we are on track, meeting deadlines, if something is not met then can assist help get our goals met.

3. In which professional competencies do you each want to develop greater strength?

- Dustin - I want to be less scattered and be more organizationally minded- I feel like version control will help in that area but overall JS skills can be improved.
- Maximo - Improve technical communication skills, proper definitions of code and able to communicate the vision properly. Can improve on design skills, what makes something look good, etc. DOM skills could be better.

4. Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

- Hourly check-ins on where we are in our work.
- Not taking everything so serious and having time to catch up and have small talk etc.
- End of day review to go over what each person did that day and what we need to accomplish tomorrow to stay on track with deadlines.

### Conflict Plan

Your team should agree on a process for handing disagreements, should they arise. It is better to have a plan in place ahead of time so you can all refer back to it when necessary.

1. What will be your group’s process to resolve conflict, when it arises?

- If there is a conflict itcan be resolved by taking a common sense approach to having a round table discussion to reach a resolution that is agreed upon by everyone.

2. How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?

- I think we all understand that we come from different places and have different backgrounds and can respect each other in that. As a team we all support the betterment of one another and will contribute evenly to meet that end.  

4. How will you raise concerns to members who are not adequately contributing?

- Ask clarifying questions to ensure that it is not a problem where they are just stuck and unsure of asking for help etc.

5. How and when will you escalate the conflict if your resolution attempts are unsuccessful?

- If an only if there was blatent non-communication and an unwillingness to cooperate we could then take the matter to the instructor team for a resolution.

### Communication Plan

Before beginning to tackle the project, determine how your group will communicate with each other. This is not an individual effort. Make sure everyone feels comfortable with the identified methods of speaking up.

1. What hours will you be available to communicate?

- Slack messages can be sent at anytime. After 6p.m. PST if we are available we can respond. We agree no hard feelings if there is not an immediate reponse after 6p.m.
- Normal class time for tasks, work, and immediate availability in REMO should be 9a.m. PST - 6pm.m. PST.

2. What platforms will you use to communicate (ie. Slack, phone …)?

- Slack and Remo

3. How often will you take breaks?

- We are all adults and feel that breaks can be tentative and so long as they are announced to the group before someone is leaving it should not be an issue.
- Maybe a one time 30 - 1 hr break agreed upon daily around mid-day.  

4. What is your plan if you start to fall behind?

- Ask for more TA help to get through situations where we are stuck. Getting more eyes on the situation sooner may speed things along.
- If a situtation is not resolve in say 5-10 mins.
- If we reach a detrimental situation and we need to implement crunch time- we all agree that we may need to stay on later into the late evening.
- If someone does extra work into the late hours or is in the zone and able to get things done- agree to not push up until work is reveiwed and shown to the group the following day.

5. How will you communicate after hours and on the weekend?

- Slack with no issues.

6. What is your strategy for ensuring everyone’s voice is heard?

- Listen;
- We all have a mutual respect and understand of one another and the floor is open for anyone and everyone to voice their opinions.

7. How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

- Collaborative reassurance to provide a safe place to be able to communicate.

### Work Plan

Explain your work plan to track whether everyone is contributing equally to all parts of the project, and that each person is working on “meaty” problems. This should prevent “lone wolf” efforts and “siloed” efforts.

NOTE: While researching and experimentation is always encouraged, writing and/or committing code to the project on your own during non-working hours or over the weekend is never acceptable. This puts the entire project at risk. Be explicit in calling out your work hours and the distribution of tasks.

1. How you will identify tasks, assign tasks, know when they are complete, and manage work in general?

- During the start of the day we can go over the daily tasks that we want to try to get done that day.
- Use Github to implement daily ToDo's and assign them accordigly. If a person starts to fall behind for that days task we can ensure that the proper questions are asked so that we can either open tickets to get it resolved or move someone over from a task they may be ahead on to tackle what is lagging.

2. What project management tool will be used?

- Github, Whiteboarding, Trello

### Git Process

Plan out what your team’s Git workflow looks like for coding tasks.

1. What components of your project will live on GitHub?

- All HTML, CSS, JS, assets, Node, .env, etc.

2. How will you share the repository with your teammates?

- One main repo for all work where we are all collaborators who are able to pull, push, merge etc.

3. What is your Git flow?

- Branches should be utilized to handle individual "meaty" problems with commits to that branch every 30 minutes until the functionality of the component is finished. Checkout and merge branch to main and other members can pull.

4. Will you be using a PR review workflow? If so, consider:

- Yes

5. How many people must review a PR?

- The majoritiy of the group.

6. Who merges PRs?

- The repository owner should handle all merge requests once reviewed by the group.

7. How often will you merge?

- After all major functional components are finished a PR request and review should be discussed to merge to main.

8. How will you communicate that it’s time to merge?

- At our table in REMO. Never merge outside of REMO where all parties can be present.

___
