Workflow for M.Apper

---
Step 0
---
Initialize Express app
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

***** google map and user functions should be on the front end

---
Step 2
---
Use user zipcode to populate events on map
Ensure that login creates an access token in the database
Build out marker pop-outs to include event info
Add 'RSVP' and 'SAVE' buttons to pop-outs
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

---
ROUTES
---
POST - send RSVP from our app to Meetup and save to user's profile on our app
GET - get our index and user page
GET - endpoint for Meetup info(??)
UPDATE - allow user to edit events/rsvps in their profile
DELETE - allow user to un-RSVP from events, delete saved events from profile
DELETE - allow user to delete their account, we remove it from our DB
