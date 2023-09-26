markdown
Copy code
```bash
# Project README

## Getting Started

Follow these steps to set up your development environment:

1. **Clone the Repositories:**

   Open Visual Studio Code (VS Code) and clone the server and client repositories using Git:

git clone <server-repo-url>
git clone <client-repo-url>

sql
Copy code

2. **Open Dual Terminal:**

In VS Code, you can open multiple terminals. Click on the plus icon (+) in the integrated terminal panel to open a new terminal. This way, you can have one terminal for the server and another for the client.

3. **Navigate to Server and Client Folders:**

In each terminal, navigate to the server and client folders:

cd server

Copy code
cd client

markdown
Copy code

4. **Install Dependencies:**

In each terminal, run `npm install` to install the project dependencies for both the server and client:

npm install

perl
Copy code

5. **Create .env Files:**

Create a `.env` file in the root directory of both the server and client folders. You can use VS Code or a text editor to create these files.

- For the client, add the following content to the `.env` file:

  ```
  EXPO_PUBLIC_API_URL=http://192.168.0.110:8002
  ```

- For the server, add the following content to the `.env` file:

  ```
  PORT=8002
  DB_USERNAME=mayureshKhole
  DB_PASSWORD=0i5J2NBab2xD4fRb
  AWS_BUCKET_NAME=mynewfileshare
  AWS_BUCKET_REGION=ap-south-1
  AWS_ACCESS_KEY=AKIAXSUUXBEOIN52JK4C
  AWS_SECRET_KEY=DEV6HVVYFRtntth9yYmuR5n1bEC3idLlrIe37xJb
  ```

Make sure to adjust these values according to your specific requirements.

6. **Start Server and Client:**

In each terminal, start the server and client using the following commands:

- For the server:

  ```
  npm start server
  ```

- For the client:

  ```
  npm start client
  ```

This will launch your server and client applications, and they will run concurrently.

Ensure that you've configured your server and client applications correctly to work together with 
