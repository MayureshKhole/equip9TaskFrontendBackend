markdown
Copy code
# Project README

## Getting Started

Follow these steps to set up your development environment:

1. **Clone the Repositories:**

   Open Visual Studio Code (VS Code) and clone the server and client repositories using Git:

   ```bash
   git clone <server-repo-url>
   git clone <client-repo-url>
Open Dual Terminal:

In VS Code, you can open multiple terminals. Click on the plus icon (+) in the integrated terminal panel to open a new terminal. This way, you can have one terminal for the server and another for the client.

Navigate to Server and Client Folders:

In each terminal, navigate to the server and client folders:

bash
Copy code
cd server
bash
Copy code
cd client
Install Dependencies:

In each terminal, run npm install to install the project dependencies for both the server and client:

bash
Copy code
npm install
Create .env Files:

Create a .env file in the root directory of both the server and client folders. You can use VS Code or a text editor to create these files.

For the client, add the following content to the .env file:

plaintext
Copy code
EXPO_PUBLIC_API_URL=http://192.168.0.110:8002
For the server, add the following content to the .env file:

plaintext
Copy code
PORT=8002
DB_USERNAME=mayureshKhole
DB_PASSWORD=0i5J2NBab2xD4fRb
AWS_BUCKET_NAME=mynewfileshare
AWS_BUCKET_REGION=ap-south-1
AWS_ACCESS_KEY=AKIAXSUUXBEOIN52JK4C
AWS_SECRET_KEY=DEV6HVVYFRtntth9yYmuR5n1bEC3idLlrIe37xJb
Make sure to adjust these values according to your specific requirements.

Start Server and Client:

In each terminal, start the server and client using the following commands:

For the server:

bash
Copy code
npm start server
For the client:

bash
Copy code
npm start client
This will launch your server and client applications, and they will run concurrently.

Ensure that you've configured your server and client applications correctly to work together with these environment variables and that you've installed the necessary dependencies. If you encounter any issues, check for error messages in the terminals to help diagnose the problem.
