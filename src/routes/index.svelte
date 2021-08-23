<script>
  //importing the user details
  import { user } from "../stores.js";

  //importing the sign up and login functions
  import { signup, login } from "../firebase";
</script>

<style>
  /* setting background color and page height */
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

  /* when the user hovers over the buttons changes color a bit */
  button:hover {
    box-shadow: 0 10px 20px 0 #1d3461;
    transition-duration: 0.3s;
  }

  /*  styling for phone/small ipad */
  @media only screen and (max-width: 700px) {
    /* setting the button to be in a column */
    #buttons {
      display: flex;
      flex-direction: column;
      margin-left: 60px;
    }
    /* setting the margins to leave space around each button */
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

    /*  setting the height of the page */
    #body {
      height: 1000px;
    }

    /* setting the size and placement of the title img */
    #titleimg {
      height: 200px;
      width: auto;
      margin-top: 30px;
      margin-left: 60px;
    }
  }

  /* styling for a large ipad */
  @media only screen and (min-width: 700px) and (max-width: 1200px) {
    /* setting the buttons to be in a column */
    #buttons {
      display: flex;
      flex-direction: column;
      margin-left: 300px;
    }
    /* setting the margins around the buttons */
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
    /* setting the page height */
    #body {
      height: 1000px;
    }

    /* setting the place and size of the title img */
    #titleimg {
      height: 300px;
      width: auto;
      margin-top: 30px;
      margin-left: 220px;
    }
  }

  /* styling for a laptop screen */
  @media only screen and (min-width: 1201px) {
    /* setting all of the buttons to have space around them */
    #login {
      margin-left: 150px;
      margin-right: 15px;
    }

    #signup {
      margin-right: 15px;
    }

    /* setting the size and place of the title img */
    #titleimg {
      height: 400px;
      width: auto;
      margin-top: 30px;
      margin-left: 320px;
    }
  }
</style>

<div id="body">
  <!-- title img -->
  <img id="titleimg" src="SkyShipLogo.png" alt="Logo" />
  <br />

  <div id="buttons">
    <!-- login button -->
    <button id="login" class="button" on:click={login}>Login</button>
    <!-- sign up button -->
    <button id="signup" class="button" on:click={signup}>Signup</button>

    <!-- go button -->
    <a href="/home">
      <button id="go">Go</button>
    </a>
  </div>

</div>
