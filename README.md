# Medical Hub PH


## Quick Start

```sh
# Change directory to server
cd server

# Install dependencies for server
npm run server-install

# Install dependencies for client
npm run client-install

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Run the client & server with concurrently
npm run dev

# Server runs on http://localhost:3001 and client on http://localhost:3000
```

## Enviroment Variables

Add `.env` file in the `server` root folder and add your configurations:

```sh
DB_HOST=your_host
DB_USER=your_user
DB_PASS=your_password
DB_NAME=your_database
PORT=your_port
```




## Application Structure

### Client

`/client` contains the react application.

### Server

`/server` contains the server application's API with database and configurations.
