<script>
  import { user } from "../stores.js";
  //this imports in the sing up and login functions to a svelte page, put it in the script tags. The current path is assuming that the file with the buttons is inside the routes folder and the firebase file is just in src so the path will need to be different if you have your file in a different place (obviously)
  import { signup, login } from "../firebase";
  // create an empty person object
  let person = {
    firstName: "",
    lastName: "",
    age: ""
  };

  function noLogin() {
    user.uid = "unauthenticated";
    //window.location.replace("/home");
    console.log("function noLogin has been run");
  }
</script>

<style>
  #body {
    background-color: #80cddb;
  }
 

  /* setting the button properties for the button to use without logging in*/
  #noLoginButton {
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

  /*  setting the properties of the sing in buttons*/
  #signup,
  #login {
    height: 100px;
    width: 300px;
    border-style: solid;
    border-width: 8px;
    border-color: #1d3461;
    border-radius: 10px;
    background-color: #f5f6f4;
  }
</style>

<div id="body">
  <img style="height: 400px; width: auto; margin-top: 30px; margin-left: 320px;" src="SkyShipLogo.png" alt="Logo">
  <br>
  <!--use without logging in button-->

  <a href="/home">
    <button id="noLoginButton" on:click={noLogin}>
      Use without logging in
    </button>
  </a>

  <button id="signup" class="button" on:click={signup}>Signup</button>
  <button id="login" class="button" on:click={login}>Login</button>

</div>
