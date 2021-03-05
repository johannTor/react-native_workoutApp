# Workout Logging app

My first go at working with React Native and I wanted to do an app where you could create your own exercises, use them to build a workout and get an overview of finished workouts.

While developing this app I used the [Expo-CLI](https://expo.ios) to test the app on a phone using Android.

Link to deployment: https://expo.io/@johanntor/projects/workout-app

If you have an expo account you should be able to scan the QR code to test the app, might be problematic on iOS phones. Maybe the 'Open project in browser' feature works in that case.

To keep the data persistant I used the [async-storage](https://github.com/react-native-async-storage/async-storage) package. The storage related code is located in /util/storageMethods.js

The UX could use a lot of improvement but in order to record a workout you finished you have to create the workout in the 'Workouts' screen but in order to do that there have to be exercises available which can be created in the 'Exercises' Screen...

Any ideas of improving this flow are welcome.

The files that are the most relevant for review are:
* /components/*
* /utils/*
* /assets/quotes

The data is stored in the following format:

* Exercise: {id: number, name: string, reps: number, sets: number, rest: number, other: string}
* Workout: {id: number, name: string, exercises: Exercise array}
* LoggedWorkout: {id: number, workout: Workout object, date: Date}