Workflow for M.Apper

---
Step 0
---
XX Initialize Express app
=======
--
Thacher Notes: Added a few pieces, named the steps, added a line where I thought steps could be split and a few questions(>)
---
Step 0 (Setup)
---
Initialize Express app (express --git --hbs)
Add knex, including migrations
Add .env file and .gitignore
Get API keys for Meetup and Google Maps
Create local databases to hold tables

****** .env and .gitignore

---
Step 1
---
Create OAuth route for user to login with Meetup OAuth
Build index file in handlebars w/basic css layout
Add google map
Add user input for zipcode / pin on map
=======
Step 1 (OAuth and Index/Map Setup)
---
Create OAuth route for user to login with Meetup OAuth

Build index file in handlebars w/basic css layout including login button (to tie into OAuth)
Add user input form for zipcode (placeholders for any other information to be requested from the user)
Add google map to index.hbs
Generate pins on map from test data

***** google map and user functions should be on the front end

---
Step 2
---
Use user zipcode to populate events on map
Ensure that login creates an access token in the database
Build out marker pop-outs to include event info
Add 'RSVP' and 'SAVE' buttons to pop-outs
=======
Step 2 (Map Build Out and Login)
---
Use user zipcode to populate events on map
Build out marker pop-outs to include event info
Add 'RSVP' and 'SAVE' buttons to pop-outs > extra needed from the backend for this?

Ensure call with user zip code to google maps generates the correct response > would this have already been confirmed?
Ensure that login creates an access token in the database
Add user login routes
Build out error handling to middleware

---
Step 3
---
Add route validations for logged-in status
Make 'saved' events populate Events table in database
Add restrictions to events (time frame, free/fee)
Create view for user to see their saved and RSVP'd events
Add RSVP to google calendar(?)

***** should the user page be a separate page, or should we try to do a jQuery popup? I'm leaning towards it being a separate page, so we would have index.hbr and user.hbr.

---
Step 4
---
Make markers gold if event is in < 24 hours
Take more info from user's Meetup account and display it on their user page
Put some finesse on the css
=======
Step 3 (Routes and Next Step MeetUp details)
---
Add route validations for logged-in status (+ tie to frontend button visibility)
Make 'saved' events populate Events table in database > how does this work if we're pulling all the information from MeetUp? Secondary database tied to their login with the info we pull from MeetUp and anything they 'save' with us?
Add restrictions to events (time frame, free/fee)

Create view for user to see their saved and RSVP'd events
Add RSVP to google calendar(need to research google calendar option)

***** should the user page be a separate page, or should we try to do a jQuery popup? I'm leaning towards it being a separate page, so we would have index.hbs and user.hbs.
--> I think a separate page would be better as it would be focused on user information rather than the information conveyed by the whole map

---
Step 4 (Finishing Details)
---
Make markers gold if event is in < 24 hours
Take more info from user's Meetup account and display it on their user page
Put some finesse on the css (Henry recommended Foundations over Bootstrap, looks materially the same for this though, unless you have a preference)

---
ROUTES
---
POST - send RSVP from our app to Meetup and save to user's profile on our app
GET - get our index and user page
GET - endpoint for Meetup info(??)
UPDATE - allow user to edit events/rsvps in their profile
DELETE - allow user to un-RSVP from events, delete saved events from profile
=======
DELETE - allow user to un-RSVP from events, delete saved events from profile > will we pull the total list of meetups they are RSVP'd to from MeetUp or be saving the meetUps that they RSVP to from us? I think the former makes more sense, but I remember talking about the later at somepoint...
DELETE - allow user to delete their account, we remove it from our DB
