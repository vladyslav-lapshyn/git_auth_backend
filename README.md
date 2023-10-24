# GitHub Demo App

GitHub Demo App is a simple web application that allows users to register and log in using their GitHub accounts. The app enables users to interact with their GitHub repositories, view different branches, and inspect commits.

## Features

- Registration and login via GitHub: The app utilizes GitHub OAuth for user registration and authentication.
- Repository selection: Users can choose a repository from their GitHub account.
- Branch viewing: Users can explore available branches for the selected repository.
- Commit inspection: Users can view commits on the chosen branch and details about pushes.

## Installation and Setup

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the project root and provide your GitHub OAuth credentials:
GITHUB_CLIENT_ID=YOUR_CLIENT_ID
GITHUB_SECRET_KEY=YOUR_SECRET_KEY
GITHUB_CALLBACK_URL=YOUR_CALLBACK_URL

4. Start the app using `npm start`.

## Usage

1. Open the app in your browser at `http://localhost:PORT`, where `PORT` is the app's port.
2. Click "Login with GitHub" to authenticate using your GitHub account.
3. Select a repository, branch, and explore commits and pushes.

## Dependencies

This project uses the following technologies and libraries:

- Node.js
- Express.js
- Passport.js
- GitHub OAuth
- Axios
- Other dependencies listed in the `package.json` file.

## License

This project is distributed under the MIT License. For detailed license information, refer to the `LICENSE` file.

