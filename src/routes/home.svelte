<script>
  //import { onMount } from "svelte";
  import { user } from "../stores.js";
  import { viewLoginPage, logout } from "../firebase.js";
  //import { categories } from "./settings.svelte";
  console.log("home page", $user.name);
  // onMount(() => {
  //  viewLoginPage();
  // });

  function logOut() {
    $user.uid = undefined;
  }
</script>

<style>
  /*making the title be centered */
  .title {
    text-align: center;
  }

  /* changing the buttons to look how I want them from the bulma default button class*/
  .button {
    width: 300px;
    height: 300px;
    margin: 20px;
    border-style: solid;
    border-width: 10px;
    border-color: #1d3461;
    border-radius: 10px;
    background-color: #f5f6f4;
  }
@media only screen and (max-width: 400px) {
  #titleimg {
      height: 200px; width: auto; margin-top: 30px; 
    }

    #body {
      height: 2050px;

    }
}
  @media only screen and (min-width: 400px) and (max-width: 950px) {
    #container3 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    #container4 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    #titleimg {
    height: 300px;
    width: auto;
  }
  }

  @media only screen and (min-width: 950px) {
    #container3 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 70px;
    }
    #container4 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    #titleimg {
    height: 300px;
    width: auto;
  }
  }

  /* Changing the color of the buttons for settings and to log out*/
  #logOutLink,
  #settingsLink {
    color: #1d3461;
    font-size: 30px;
    text-decoration: underline;
    text-decoration-line: underline;
    margin: 10px;
  }

  .button {
    display: flex;
    flex-direction: column;
  }

  #animalsIcon {
    margin-left: 30px;
    margin-top: 30px;
  }

  #emotionsIcon {
    margin-right: 40px;
    margin-top: 30px;
  }

  #placesIcon {
    margin-left: 20px;
  }

  #phrasesIcon {
    margin-top: 30px;
  }

  #foodIcon {
    margin-left: 50px;
    width: 80%;
    height: auto;
    margin-top: 30px;
  }

  

  #buttonText {
    color: black;
    text-align: center;
  }

  .header {
    text-align: center;
  }

  #body {
    background-color: #80cddb;
  }
</style>

<!--Div for whole page to set background color-->
<div id="body">
  <!--Setting my title to be my SkyShip logo-->
  <h1 class="title">
    <img
      id="titleimg"
      src="SkyShipLogo.png"
      alt="SkyShip title words sky ship in clouds with a rocket launching" />
  </h1>
  {#if $user.uid == undefined}
    <a id="logOutLink" href="/">Log In</a>
  {:else}
    <h1 class="header">Hello {$user.name}</h1>
    <!--Button to logout-->
    <a id="logOutLink" on:click={logout} href="/">Logout</a>
    <!--Button to go to settings-->
    <a id="settingsLink" href="/settings">Settings</a>
  {/if}

  <div id="row">

    <div id="container3">
      <a id="emotions" href="/emotions">
        <div id="column" class="button">
          <img
            style=" height: 65%; width: auto; "
            id="emotionsIcon"
            src="emotions.png"
            alt="emotions icon" />
          <p id="buttonText">Emotions</p>
        </div>
      </a>
      <!--Button for places-->
      <a id="places" href="/places">
        <div id="column" class="button">
          <img
            style="height: 65%; width: auto;"
            id="placesIcon"
            src="places.png"
            alt="Places icon" />
          <p id="buttonText">Places</p>
        </div>
      </a>

      <div id="container4">
        <!--Button for phrases-->
        <a id="phrases" href="/phrases">
          <div id="column" class="button">
            <img
              style="height: 65%; width: auto;"
              id="phrasesIcon"
              src="phrases.png"
              alt="phrases icon" />
            <p id="buttonText">Phrases</p>
          </div>
        </a>
      </div>

      <!--button for food-->

      <a id="food" href="/food">
        <div id="column" class="button">
          <img id="foodIcon" src="food.png" alt="food icon" />
          <p id="buttonText">Food</p>
        </div>
      </a>

      <!--button for animals-->
      <a id="animals" href="/animals">
        <div id="column" class="button">
          <img id="animalsIcon" src="animals.png" alt="animals icon" />
          <p id="buttonText">Animals</p>
        </div>
      </a>
    </div>

  </div>

</div>
