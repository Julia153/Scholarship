<script>
  //setting varibles to count the number of times the user presses the buttons starting at 0
  let happyCounter = 0;
  let sadCounter = 0;
  let frustratedCounter = 0;
  let angryCounter = 0;
  let excitedCounter = 0;
  let scaredCounter = 0;

  //accessing the api library
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";

  //saying frustrated
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function frustrated() {
    frustratedCounter++;
    if (frustratedCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("frustrated");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "please only press the button once, it may take a couple of seconds to say the word"
      );
      scaredCounter = 0;
    }
  }

  //saying scared
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function scared() {
    scaredCounter++;
    if (scaredCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("scared");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "please only press the button once, it may take a couple of seconds to say the word"
      );
      scaredCounter = 0;
    }
  }

  //saying sad
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function sad() {
    sadCounter++;
    if (sadCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("sad");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "please only press the button once, it may take a couple of seconds to say the word"
      );
      sadCounter = 0;
    }
  }

  //saying happy
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function happy() {
    happyCounter++;
    if (happyCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("happy");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "please only press the button once, it may take a couple of seconds to say the word"
      );
      happyCounter = 0;
    }
  }

  //saying excited
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function excited() {
    excitedCounter++;
    if (excitedCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("excited");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "please only press the button once, it may take a couple of seconds to say the word"
      );
      excitedCounter = 0;
    }
  }

  //saying angry
  //adding 1 to the counter varible
  //if the button has been pressed 2 or less times it will say frog
  //if the button has been pressed more than 2 times it will tell you to stop pressing the button multiple times and then the counter will reset to 0
  function angry() {
    angryCounter++;
    if (angryCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("angry");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "please only press the button once, it may take a couple of seconds to say the word"
      );
      angryCounter = 0;
    }
  }
</script>

<style>
  /* all of the styling for phone and small ipad screens */
  @media only screen and (max-width: 800px) {
    /* title img sizing and centering */
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
  /* all of the styling for large ipad screen */
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
  /* all of the styling for a laptop sized screen */
  @media only screen and (min-width: 1200px) {
    #titleimg {
      margin-left: 300px;
      height: 500px;
      width: auto;
    }
  }
  /* setting background color*/
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
  /* Sizing and setting the colour and placment of the icons */
  i {
    font-size: 100px;
    color: black;
    text-align: center;
    margin-top: 70px;
  }
  /* centering and sizing the word buttons text */
  #buttonText {
    text-align: center;
    font-size: 20px;
  }
</style>

<div id="body">
  <!--title img-->
  <img id="titleimg" src="emotionLogo.png" alt="emotions logo" />
  <div id="homeContainer">
    <div id="vertical-placement-home">
      <!--home button-->
      <a href="/home">
        <i style=" font-size: 100px; color: black;" class="fas fa-home" />
      </a>
    </div>
  </div>

  <div id="container">
    <!--happy button-->
    <div on:click={happy} class="button">
      <i class="far fa-smile" />
      <p id="buttonText">Happy</p>
    </div>
    <!--sad button-->
    <div on:click={sad} class="button">
      <i class="far fa-sad-tear" />
      <p id="buttonText">Sad</p>
    </div>
    <!--angry button-->
    <div on:click={angry} class="button">
      <i class="far fa-angry" />
      <p id="buttonText">Angry</p>
    </div>
    <!--frustrated button-->
    <div on:click={frustrated} class="button">
      <i class="far fa-tired" />
      <p id="buttonText">Frustrated</p>
    </div>
    <!--excited button-->
    <div on:click={excited} class="button">
      <i class="far fa-laugh-squint" />
      <p id="buttonText">Excited</p>
      <!--scared button-->
    </div>
    <div on:click={scared} class="button">
      <i class="far fa-flushed" />
      <p id="buttonText">Scared</p>
    </div>
  </div>

</div>
