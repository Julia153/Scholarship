//importing the user store so that we are able to set the user values during login / sign up
import { user } from "./stores"

//importing firebase to the firebase.js file then importing the auth and firestore (database) module
import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

//this lets you access user data
import {get } from "svelte/store"


//function that gets the user info
export function viewLoginPage() {
    let userInfo = get(user)
    if (userInfo.uid == undefined) {
        window.location.replace("/");
    }
}

//function that takes you to the home page
export function homePage() {
    window.location.replace("/home")
}
//configuration variables for your specfic firebase project 
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


    })


}

//LOGIN FUNCTION -> used for when the user has used the app in the past
export async function login(nextPage = undefined) {
    let loginData = await auth.signInWithPopup(provider)

    //gets the users info from the database
    let userRef = await db.collection('users').doc(loginData.user.uid).get()

    if (userRef.exists) {
        let userData = userRef.data()
            //location.href = "home";
            //updates the user store with the users info
        user.set({
            uid: loginData.user.uid,
            ...userData

        })
    } else {
        console.error(`LOGIN ERROR: user not found...`)
        document.getElementById("userOutput").innerHTML = "user not found :( check you typed everything correct or create a new account";
    }
}

export function saveCategory() {
    console.log(get(user.uid))
    let userUid = get(user.uid)
        //saves the users information to the database
    db.collection('users').doc(userUid).set({
        Category1: ["word1", "word2"]

    })


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