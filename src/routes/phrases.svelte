<script>
  //setting varibles to count how many times the user presses the word buttons starting at 0
  let hurtCounter = 0;
  let tiredCounter = 0;
  let thirstyCounter = 0;
  let bathroomCounter = 0;
  let helpCounter = 0;
  let hungryCounter = 0;

  //accessing the api library
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";

  //saying i am hurt
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function hurt() {
    hurtCounter++;
    if (hurtCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("I am hurt");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the word buttons once, sometimes they take a second to speak"
      );
      hurtCounter = 0;
    }
  }

  //saying i need to use the bathroom
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function bathroom() {
    bathroomCounter++;
    if (bathroomCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("I need to use the bathroom");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the word buttons once, sometimes they take a second to speak"
      );
      bathroomCounter = 0;
    }
  }

  //saying i need help
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function help() {
    helpCounter++;
    if (helpCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("I need help");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the word buttons once, sometimes they take a second to speak"
      );
      helpCounter = 0;
    }
  }

  //saying i am hungry
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function hungry() {
    hungryCounter++;
    if (hungryCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("I am hungry");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the word buttons once, sometimes they take a second to speak"
      );
      hungryCounter = 0;
    }
  }

  //saying i am thirsty
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function thirsty() {
    thirstyCounter++;

    if (thirstyCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("I am thirsty");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the word buttons once, sometimes they take a second to speak"
      );
      thirstyCounter = 0;
    }
  }

  //saying i am tired
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function tired() {
    tiredCounter++;

    if (tiredCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("I am tired");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the word buttons once, sometimes they take a second to speak"
      );
      tiredCounter = 0;
    }
  }
</script>

<style>
  /* all of the styling for phone/smal ipad screen */
  @media only screen and (max-width: 800px) {
    /* sizing and centering the title img */
    #titleimg {
      margin-left: 10px;
      height: 10%;
      width: auto;
    }
    /* setting the height of the page */
    #body {
      height: 2600px;
    }
  }

  /* all of the styling for a large ipad screen */
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    /* sizing and centering the title img */
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

  /* all of the styling for a laptop screen */
  @media only screen and (min-width: 1200px) {
    /* sizing and centering the title img */
    #titleimg {
      margin-left: 300px;
      height: 500px;
      width: auto;
    }
  }
  /* setting the background color*/
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
  /* sizing, centering the text inside the buttons */
  #buttonText {
    text-align: center;
    font-size: 20px;
    margin-left: 100px;
  }

  /* sizing and centering the icons */
  i {
    font-size: 100px;
    color: black;
    text-align: center;
    margin-left: 80px;
    margin-top: 70px;
  }
</style>

<div id="body">
  <!--Title img-->
  <img id="titleimg" src="phraseLogo.png" alt="phrases logo" />
  <!--linking the home button-->
  <div id="homeContainer">
    <div id="vertical-placement-home">
      <a href="/home">
        <i style=" font-size: 100px; color: black;" class="fas fa-home" />
      </a>
    </div>
  </div>

  <div id="container">

    <!--I am tired button-->
    <button on:click={tired} class="button">
      <i class="fas fa-bed" />
      <p id="buttonText">I am tired</p>
    </button>
    <!--i am thirsty button-->
    <button on:click={thirsty} class="button">
      <i class="fas fa-glass-whiskey" />
      <p id="buttonText">I am thirsty</p>
    </button>
    <!--I am hungry button-->
    <button on:click={hungry} class="button">
      <i class="fas fa-utensils" />
      <p id="buttonText">I am hungry</p>
    </button>
    <!--i need help button-->
    <button on:click={help} class="button">
      <i class="far fa-life-ring" />
      <p id="buttonText">I need help</p>
    </button>
    <!--i am hurt button-->
    <button on:click={hurt} class="button">
      <i class="fas fa-ambulance" />
      <p id="buttonText">I am hurt</p>
    </button>
    <!--i need to use the bathroom button-->
    <button on:click={bathroom} class="button">
      <i class="fas fa-restroom" />
      <p style="font-size: 20px;" id="buttonTextBathroom">
        I need to use the bathroom
      </p>
    </button>
  </div>

</div>
