<script>
  let catCounter = 0;
  let dogCounter = 0;
  let frogCounter = 0;
  let horseCounter = 0;
  let fishCounter = 0;
  let birdCounter = 0;
  //Accessing the api text to speech api library
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";

  //saying frog
  function frog() {
    frogCounter++;
    if (frogCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("frog");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes a takes a second to speak"
      );
      frogCounter = 0;
    }
  }

  //saying bird
  function bird() {
    birdCounter++;
    if (birdCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("bird");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes a takes a second to speak"
      );
      birdCounter = 0;
    }
  }

  //saying dog
  function dog() {
    dogCounter++;
    if (dogCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("Dog");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes a takes a second to speak"
      );
      dogCounter = 0;
    }
  }

  //saying cat
  function cat() {
    catCounter++;
    if (catCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("Cat");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes a takes a second to speak"
      );
      catCounter = 0;
    }
  }

  //saying fish
  function fish() {
    fishCounter++;
    if (fishCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("Fish");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes a takes a second to speak"
      );
      fishCounter = 0;
    }
  }

  //saying horse
  function horse() {
    horseCounter++;
    if (horseCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("Horse");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes a takes a second to speak"
      );
      horseCounter = 0;
    }
  }
</script>

<style>
  /* setting the height of the page and background color*/
  #body {
    background-color: #80cddb;
    height: 800px;
  }

  /* changing the buttons to look how i want them to from the bulma button class*/
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

  /* centering the word buttons*/
  #container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 100px;
  }

  /* setting the placement of the home button*/
  #vertical-placement-home {
    margin: 0;
    position: relative;
    left: 10px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .button {
    display: flex;
    flex-direction: column;
  }

  i {
    font-size: 100px;
    color: black;
    text-align: center;
    margin-top: 70px;
  }

  img {
    margin-left: 400px;
    height: 30%;
    width: auto;
  }

  #body {
    height: 1300px;
  }

  #buttonText {
    text-align: center;
    font-size: 20px;
  }
</style>

<div id="body">
  <!--Title-->
  <img src="animalLogo.png" alt="animal category logo" />
  <!--Home button-->
  <div id="homeContainer">
    <div id="vertical-placement-home">
      <a href="/home">
        <i style=" font-size: 100px; color: black;" class="fas fa-home" />
      </a>
    </div>
  </div>

  <div id="container">

    <!--Rabbit button-->
    <div on:click={frog} class="button">
      <i class="fas fa-frog" />
      <p id="buttonText">Frog</p>
    </div>
    <!--horse button-->
    <div on:click={horse} class="button">
      <i class="fas fa-horse" />
      <p id="buttonText">Horse</p>
    </div>
    <!--fish button-->
    <div on:click={fish} class="button">
      <i class="fas fa-fish" />
      <p id="buttonText">Fish</p>
    </div>

    <!--dog button-->
    <div on:click={dog} class="button">
      <i class="fas fa-dog" />
      <p id="buttonText">Dog</p>
    </div>
    <!--cat button-->
    <div on:click={cat} class="button">
      <i class="fas fa-cat" />
      <p id="buttonText">Cat</p>
    </div>
    <!--bird button-->
    <div on:click={bird} class="button">
      <i class="fas fa-crow" />
      <p id="buttonText">Bird</p>
    </div>

  </div>

</div>
