### ADO : Plateforme Éducative Dédiée aux Adolescents
ADO est une plateforme éducative spécialement conçue pour les adolescents, visant à répondre à tous leurs besoins éducatifs et personnels. Elle offre une large gamme de ressources pédagogiques interactives, adaptées à leurs centres d'intérêt et à leur niveau d'apprentissage.

Grâce à ADO, les jeunes peuvent accéder à des contenus variés, tels que des cours en ligne, des vidéos éducatives, des tutoriels, et des exercices interactifs. La plateforme favorise également le développement des compétences sociales et personnelles à travers des activités ludiques, des forums de discussion, et des outils de suivi de progrès.



## Table of contents

- [Quick start](#quick-start)
- [What's included](#whats-included)
- [Demo](#demo)
- [Prerequisities](#Prerequisities)
- [Install](#install)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)

## Quick start

This is an online education platform made with Node JS Express & MongoDB for database, Flutter for mobile version, Angular for web version, You should follow the instructions below in order to get the app running.

## What's included (Features)

- Splash Screen
- Create account
- Login
- OTP Verification upon SignUp
- OTP Verification upon Forgot Password
- Change your profile picture
- Change your password
- Switch between Teacher Mode/Learner Mode
- Subscribe / Unsubscribe to Newsletter (For promo mails & coupon codes)
- Payment using Paymee.tn gateway
- Upon payment Mail to learner for order summary and mail to teacher for notifiying
- Ability to view orders & order status for users
- Ability to add courses as teacher / edit & delete courses
- Ability to schedule a meet in-app for teachers (Also edit/delete added schedules with ability to notify users via mail) (Google Calendar API)
- Ability to chat with other members in-app (Socket IO) with messages saving in database and ability to delete all messages
- Push notifications upon receiving new message in Socket Io chat (From Node JS server Google API)
- Ability to report a problem / submit a feedback (Wiredash.io API)
- Ability to search for courses
- Ability to search for courses by category
- Ability to filter teacher courses
- Ability to rate course / add comments after you purchase
- Dialogflow Chatbot API (Smart chatbot to get answers for frequent questions (FAQ) )
- Shared prefs
- Custom animations (Loading and switching through screens)
- Pull to refresh teacher courses
- Custom Toast messages for input errors
- Ability to cashout once you reach minimum of 50 TND
- Custom UI with cool animations
- Custom floating action bar
- Custom Bottom Screen Nav bar
- Deployment of Node JS server in herokuapp
- All in-app forms have validations (custom)
- App is deployed in Microsoft AppCenter (For Auto update and build generation without passing through PlayStore)

* Following the [best practices](https://angular.io/guide/styleguide)!



## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
- MongoDB - [Download & Install MongoDB Compass](http://www.mongodb.org/downloads)
- Flutter SDK - [Download & Install Flutter SDK](https://flutter.dev/docs/development/tools/sdk/releases) 1.22.6 Used in this project.

## Install

**Installation Steps**:
1. Flutter Project Setup Instructions:
Prerequisites:
Install Flutter SDK: Flutter Installation Guide
Ensure you have an IDE (VS Code, Android Studio) with Flutter and Dart plugins.
Set up the environment for running on Android/iOS emulators or physical devices.
Steps:

# Step 1: Clone the repository
```
git clone https://github.com/safwenbarhoumi/PIM2.git
```
# Step 2: Navigate to the Flutter project directory
```
cd PIM2/flutter_project_directory
```
# Step 3: Install Flutter dependencies
```
flutter pub get
```
# Step 4: Run the project on a connected device/emulator
```
flutter run
```
Additional Tips:
Make sure you have all necessary Android/iOS SDKs installed.
You can use flutter doctor to ensure all dependencies are installed correctly.
2. Angular Project Setup Instructions:
Prerequisites:
Install Node.js and npm: Node.js Download
Install Angular CLI globally:

```
npm install -g @angular/cli
```
Steps:

# Step 1: Clone the repository
```
git clone https://github.com/safwenbarhoumi/PIM2.git
```

# Step 2: Navigate to the Angular project directory
```
cd PIM2/angular_project_directory
```

# Step 3: Install Angular dependencies
```
npm install
```

# Step 4: Run the Angular application
```
ng serve
```

# Step 5: Open your browser and navigate to
http://localhost:4200
Additional Tips:
Ensure your Angular CLI version is compatible with the project.
You can specify a different port using ng serve --port 4201 if 4200 is already in use.
** 3. Node.js Project Setup Instructions:
Prerequisites:
Install Node.js and npm: Node.js Download
Steps:

# Step 1: Clone the repository
```
git clone https://github.com/safwenbarhoumi/PIM2.git
```
# Step 2: Navigate to the Node.js project directory
```
cd PIM2/nodejs_project_directory
```

# Step 3: Install Node.js dependencies
```
npm install
```
# Step 4: Set up environment variables (if necessary)
# Create a .env file and add the required environment variables like DB connection, API keys, etc.

# Step 5: Run the Node.js server
```
npm start
```

# The server will typically run on http://localhost:3000


```bash
# Step one: Clone this repo

git clone https://github.com/safwenbarhoumi/PIM2.git

# Using Docker
docker compose up -d
```

**Without Docker**:

```bash
# Normal usage

git clone https://gitlab.com/espritmobile-2021/1on1-education/1-on-1-education.git

# Open server folder and run
npm install

npm run dev

# Open app folder and run

npm install

ng serve --open

# For flutter app open MobileDev in VsCode

flutter build

flutter run
```

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://gitlab.com/espritmobile-2021/1on1-education/1-on-1-education/-/issues/new) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://gitlab.com/espritmobile-2021/1on1-education/1-on-1-education/-/issues/new).

## Contributing

Please read through our [contributing guidelines](https://gitlab.com/espritmobile-2021/1on1-education/1-on-1-education/-/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## Creators :

**Firas Ben Abdallah**

**Safwen Barhoumi**

**Haythem Belhaj**

**Firas Maaouia**

**Abdesslem Chebili**


## Thanks

Thanks to all contributors and their support:

## Copyright and license

Code and documentation copyright 2021 the authors. Code released under the [Esprit Mobile Team](http://www.esprit.tn).

Enjoy :metal:
