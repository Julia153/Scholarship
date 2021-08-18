<script>
  import { user } from "../stores.js";
  //this imports in the sing up and login functions to a svelte page, put it in the script tags. The current path is assuming that the file with the buttons is inside the routes folder and the firebase file is just in src so the path will need to be different if you have your file in a different place (obviously)
  import { signup, login } from "../firebase";
  // create an empty person object

  function goHome() {
    //window.location.replace("/home")
    console.log("go home function run");
  }
</script>

<style>
  #body {
    background-color: #80cddb;
    height: 800px;
  }

  /*  setting the properties of the buttons*/
  button {
    height: 100px;
    width: 300px;
    border-style: solid;
    border-width: 8px;
    border-color: #1d3461;
    border-radius: 10px;
    background-color: #f5f6f4;
    font-size: 20px;
  }

  button:hover {
    box-shadow: 0 10px 20px 0 #1d3461;
    transition-duration: 0.3s;
  }

  @media only screen and (max-width: 700px) {
    #buttons {
      display: flex;
      flex-direction: column;
      margin-left: 60px;
    }

    #login {
      margin-bottom: 20px;
    }

    #signup {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    #go {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    #body {
      height: 1000px;
    }
    #titleimg {
      height: 200px;
      width: auto;
      margin-top: 30px;
      margin-left: 60px;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1200px) {
    #buttons {
      display: flex;
      flex-direction: column;
      margin-left: 300px;
    }

    #login {
      margin-bottom: 20px;
    }

    #signup {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    #go {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    #body {
      height: 1000px;
    }
    #titleimg {
      height: 300px;
      width: auto;
      margin-top: 30px;
      margin-left: 220px;
    }
  }

  @media only screen and (min-width: 1201px) {
    #login {
      margin-left: 150px;
      margin-right: 15px;
    }

    #signup {
      margin-right: 15px;
    }

    #titleimg {
      height: 400px;
      width: auto;
      margin-top: 30px;
      margin-left: 320px;
    }
  }
</style>

<div id="body">

  <img id="titleimg" src="SkyShipLogo.png" alt="Logo" />
  <br />

  <div id="buttons">
    <button id="login" class="button" on:click={login}>Login</button>

    <button id="signup" class="button" on:click={signup}>Signup</button>

    <a href="/home">
      <button id="go">Go</button>
    </a>
  </div>

</div>
