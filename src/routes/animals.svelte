<script>
  // setting all of the word buttons to have a varible which counts how many times the button has been pressed starting at 0
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
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
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
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
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
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
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
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
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
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
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
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
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
  /* All of the styling for phone/small ipad sized screen */
  @media only screen and (max-width: 800px) {
    /* sizing and centering the title img */
    #titleimg {
      margin-left: 10px;
      height: 10%;
      width: auto;
    }
    /* Setting the height of the page */
    #body {
      height: 2600px;
    }
  }
  /* All the styling for large ipad size screen */
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    /* centering and sizing the title img */
    #titleimg {
      margin-left: 90px;
      height: 30%;
      width: auto;
    }
    /* setting the height of the page */
    #body {
      height: 2000px;
    }
  }
  /* All of the styling for a laptop sized screen */
  @media only screen and (min-width: 1200px) {
    /* centering and sizing the title img */
    #titleimg {
      margin-left: 300px;
      height: 500px;
      width: auto;
    }
  }
  /* setting height of page */
  #body {
    background-color: #80cddb;
  }

  /* editing the button properties from the bulma button class*/
  .button {
    width: 300px;
    height: 300px;
    margin: 20px;
    border-style: solid;
    border-width: 10px;
    border-color: #1d3461;
    border-radius: 10px;
    background-color: #f5f6f4;
    display: flex;
    flex-direction: column;
  }

  /* centering the word buttons*/
  #container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 100px;
  }

  /* placement of the home button*/
  #vertical-placement-home {
    margin: 0;
    position: relative;
    left: 10px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  /* Setting the icons sizing and colours */
  i {
    font-size: 100px;
    color: black;
    text-align: center;
    margin-top: 70px;
  }
  /* making the text in the word button be centered and sized */
  #buttonText {
    text-align: center;
    font-size: 20px;
  }
</style>

<div id="body">
  <!--Title img-->
  <img id="titleimg" src="animalLogo.png" alt="animal category logo" />
  <!--Home button-->
  <div id="homeContainer">
    <div id="vertical-placement-home">
      <a href="/home">
        <!-- styling the home button size and color -->
        <i style=" font-size: 100px; color: black;" class="fas fa-home" />
      </a>
    </div>
  </div>

  <div id="container">

    <!--frog button-->
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
