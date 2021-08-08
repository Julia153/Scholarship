//importing the user store so that we are able to set the user values during login / sign up

import { user } from "./stores"
//import { newCategory } from "./stores"


//importing firebase to the firebase.js file then importing the auth and firestore (database) module
import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

import {get } from "svelte/store"


export function viewLoginPage() {
    let userInfo = get(user)
    if (userInfo.uid == undefined) {
        window.location.replace("/");
    }
}
export function homePage() {
    window.location.replace("/home")
}
//configuration variables for your specfic firebase project (do not copy other ones from places like w3 schools @julia)
const firebaseConfig = {
    apiKey: "AIzaSyB-qdG6j6fDvmbwd5yAO9kh0EFtMTg-B1g",
    authDomain: "skyship-communication.firebaseapp.com",
    projectId: "skyship-communication",
    storageBucket: "skyship-communication.appspot.com",
    messagingSenderId: "642020364371",
    appId: "1:642020364371:web:1ab67266b66b98128cf6a6"
}

//initialising your web app with the firebase project 
firebase.initializeApp(firebaseConfig)

//this will declare the auth, provider and database (db) variables
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

//signup function -> used for when the user does not already have an account
export async function signup() {
    let loginData = await auth.signInWithPopup(provider)

    //sets the user store object with the users information this means that we are able to reference the user in the web app easily and do things like print their name
    user.set({
        uid: loginData.user.uid,
        email: loginData.user.email,
        name: loginData.user.displayName
    })

    //saves the users information to the database
    db.collection('users').doc(loginData.user.uid).set({
            email: loginData.user.email,
            name: loginData.user.displayName
                //add any other information you need to save about the user here eg, teams they play for etc
        })
        //window.location.replace("/home")

}

//login function -> used for when the user has used the app in the past
export async function login(nextPage = undefined) {
    let loginData = await auth.signInWithPopup(provider)

    //gets the users info from the database
    let userRef = await db.collection('users').doc(loginData.user.uid).get()

    if (userRef.exists) {
        let userData = userRef.data()

        //updates the user store with the users info
        user.set({
            uid: loginData.user.uid,
            ...userData
        })

        //window.location.replace("/home")
    } else {
        console.error("LOGIN ERROR: user not found...")
    }
}
export function saveCategory() {
    let i = "num"
    let a = "weather"
    db.collection("users").doc($user.uid).set({
            a: [i],
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}
//logout function
export function logout() {
    //signs out the user
    auth.signOut()

    //resets the user store
    user.set({
        uid: undefined,
        email: undefined,
        name: undefined,
    })
}