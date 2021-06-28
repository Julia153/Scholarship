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

  @media only screen and (max-width: 599px) {
    #container1 {
      margin-left: 50px;
      display: flex;
      flex-direction: column;
    }

    #container2 {
      margin-left: 50px;
      display: flex;
      flex-direction: column;
    }

    #body {
      background-color: #80cddb;
    }
  }

  /* setting buttons to be in a row*/
  #container1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 100px;
  }
  /* setting buttons to be in a row*/
  #container2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 100px;
  }
  /* Setting the background color, and height of the page*/
  #body {
    background-color: #80cddb;
    height: 1200px;
    margin: 0px;
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

  #titleimg {
    height: 300px;
    width: auto;
  }

  #buttonText {
    color: black;
    text-align: center;
    
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
  <!--Button to logout-->
  <a id="logOutLink" href="/login">Log In</a>
  <!--Button to go to settings-->
  <a id="settingsLink" href="/settings">Settings</a>

  <!--Buttons for emotions-->
  <div id="container1">

    <a id="emotions" href="/emotions">
      <div class="button">
        <img id="emotionsIcon" src="emotions.png" alt="emotions icon" />
        <p id="buttonText">Emotions</p>
      </div>
    </a>
    <!--Button for places-->
    <a id="places" href="/places">
      <div class="button">
        <img id="placesIcon" src="places.png" alt="Places icon" />
       <p id="buttonText">Places</p>
      </div>
    </a>
    <!--Button for phrases-->
    <a id="phrases" href="/phrases">
      <div class="button">
        <img id="phrasesIcon" src="phrases.png" alt="phrases icon" />
        <p id="buttonText">Phrases</p>
      </div>
    </a>

    <div id="container2">

      <!--button for food-->

      <a id="food" href="/food">
        <div class="button">
          <img id="foodIcon" src="food.png" alt="food icon" />
          <p id="buttonText">Food</p>
        </div>
      </a>
      <!--button for animals-->
      <a id="animals" href="/animals">
        <div class="button">
          <img id="animalsIcon" src="animals.png" alt="animals icon" />
          <p id="buttonText">Animals</p>
        </div>
      </a>
    </div>
  </div>

</div>
