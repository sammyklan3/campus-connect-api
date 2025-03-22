# Campus Connect API

Campus Connect is an API for a social platform designed to help students connect, share notes, and find study partners. This API is built using **Node.js, Express, PostgreSQL, and Sequelize**.

## Features

- **User Authentication**: Register and log in using JWT authentication.
- **Messaging**: Real-time chat functionality between users.
- **Profile Management**: Users can update their profiles and preferences.
- **Notes Sharing**: Upload and share study notes.
- **Study Groups**: Create and join study groups.
- **Notifications**: Stay updated with notifications on new messages and group activities.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: PostgreSQL, Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time Communication**: WebSockets

## Installation

### Prerequisites

- Node.js (v22+ recommended)
- PostgreSQL (Ensure a running instance)

### Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/sammyklan3/campus-connect-api.git
    cd campus-connect-api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up the environment variables:  
   Create a `.env` file in the root directory and add the following:

    ```ini
    PORT=5000
    DATABASE_URL=postgres://your_username:your_password@localhost:5432/campusconnect
    JWT_SECRET=your_secret_key
    ```

4. Run database migrations:

    ```sh
    npx sequelize-cli db:migrate
    ```

5. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get a JWT token

### User Profile

- `GET /api/users/:id` - Get user profile by ID
- `PUT /api/users/:id` - Update user profile

### Messaging

- `POST /api/messages` - Send a message
- `GET /api/messages/:conversationId` - Get messages in a conversation

### Study Groups

- `POST /api/groups` - Create a study group
- `GET /api/groups` - List all study groups
- `POST /api/groups/:groupId/join` - Join a study group

## Contributing

1. Fork the repository
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Commit changes:
    ```sh
    git commit -m "Add new feature"
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Open a Pull Request

## License

This project is licensed under the **MIT License**.

---

_Made with ❤️ by the Campus Connect Team._
