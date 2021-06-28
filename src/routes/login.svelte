<script>
  //this imports in the sing up and login functions to a svelte page, put it in the script tags. The current path is assuming that the file with the buttons is inside the routes folder and the firebase file is just in src so the path will need to be different if you have your file in a different place (obviously)
  import { signup, login } from "../firebase";
  // create an empty person object
  let person = {
    firstName: "",
    lastName: "",
    age: ""
  };

  

  
</script>

<style>
  /* making the title centered*/
  h1 {
    text-align: center;
  }

  /* setting the button properties for the button to use without logging in*/
  #noLogIn {
    width: 500px;
    height: 500px;
    margin: 20px;
    border-style: solid;
    border-width: 10px;
    border-color: #1d3461;
    border-radius: 10px;
    background-color: #f5f6f4;
    font-size: 40px;
  }

  /* setting spacing between the buttons*/
  .button {
    margin: 30px;
  }

  /* setting the sign in buttons in columns*/
  .container {
    display: flex;
    flex-direction: column;
    float: right;
    margin-right: 300px;
    margin-top: 30px;
  }

  /*  setting the properties of the sing in buttons*/
  #google,
  #apple,
  #microsoft {
    height: 100px;
    width: 300px;
    border-style: solid;
    border-width: 8px;
    border-color: #1d3461;
    border-radius: 10px;
    background-color: #f5f6f4;
  }
</style>

<h1 class="title">SkyShip</h1>
<!--use without logging in button-->
<a href="/">
  <button id="noLogIn" class="button">Use without logging in</button>
</a>


  <button class="button" on:click={signup}>Signup</button>
  <button class="button" on:click={login}>Login</button>



 


  

<div class="container">
  <!--log in with google button-->
  <button id="google" class="button">Log in with Google</button>
  <!-- log in with microsoft button-->
  <button id="microsoft" class="button">Log in with Microsoft</button>
  <!--log in with apple button-->
  <button id="apple" class="button">Log in with Apple</button>
</div>
