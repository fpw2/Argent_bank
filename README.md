# Start the front

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Project #10 - Argent Bank API
This codebase contains the code needed to run the backend for Argent Bank.

Getting Started
Prerequisites
Argent Bank uses the following tech stack:

Node.js v12
MongoDB Community Server
Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

# Start the back (bank_Api)

# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

Populated Database Data
Once you run the populate-db script, you should have two users in your database:

Tony Stark
First Name: Tony
Last Name: Stark
Email: tony@stark.com
Password: password123
Steve Rogers
First Name: Steve,
Last Name: Rogers,
Email: steve@rogers.com,
Password: password456
API Documentation
To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

Design Assets
Static HTML and CSS has been created for most of the site and is located in: /designs.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in /designs/wireframes/edit-user-name.png.

And for the API model that you will be proposing for transactitons, the wireframe can be found in /designs/wireframes/transactions.png.