# React Native Mobile App

This is a mobile application built using **React Native** and follows **Test-Driven Development (TDD)** principles. The app demonstrates skills in app development, API management, handling multiple screens, and executing background tasks effectively.  

# Getting Started

>**Note**: Metro is the JavaScript bundler used by React Native. To start Metro, open a terminal at the root of your project directory and run:

## Step 1: Start the Metro Server

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Application Features

1. Login Screen: Users can enter their credentials (username and password) to authenticate.
2. Login Functionality: Accepts any non-empty username and password for successful login.
3. Home Screen: Displays a welcome message on header with the user's name after successful login.
4. Logout Functionality: Allows users to log out and navigate back to the login screen.
5. Posts List: Fetches and displays a list of posts from a mock API.
6. Post Details: Each post shows the username, title, description, and an image.
7. Pagination: Loads more posts as the user scrolls down.
8. Search Functionality: Filters posts based on user input.
9. Post Selection: Users can select a post to view detailed information on a separate screen.
10. User Action Logging: Logs user actions (login, search, post selection) and sends this data as a JSON array when the app is moved to the background or closed.

### API Details

- Utilize the following mock API endpoints for functionality:

Login Endpoint:
URL: https://dummyjson.com/auth/login
Method: POST
Posts Endpoint:
URL: https://dummyjson.com/posts
Method: GET
Users Endpoint:
URL: https://dummyjson.com/users/[id]
Method: GET
Image URL:
URL: https://picsum.photos/seed/[id]/[width]/[height]
Search Endpoint:
URL: https://dummyjson.com/posts/search?q=[query]
Method: GET
Log Endpoint:
URL: https://dummyjson.com/http/200
Method: POST