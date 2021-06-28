<script>
  //setting counter to 0
  let happyCounter = 0;
  let sadCounter = 0;
  let frustratedCounter = 0;
  let angryCounter = 0;
  let excitedCounter = 0;
  let scaredCounter = 0;

  let modal = "modal-content";
  //accessing the api library
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";

  //saying frustrated
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
  /* setting the height of the page and the background color*/
  #body {
    background-color: #80cddb;
    height: 800px;
  }

  /* setting the button properties for how i want it to look chaning it from the bulma button class*/
  .button {
    width: 300px;
    height: 300px;
    border-style: solid;
    border-width: 10px;
    border-color: #1d3461;
    border-radius: 10px;
    background-color: #f5f6f4;
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  /* setting the placement of the home button*/
  #vertical-placement-home {
    margin: 0;
    position: relative;
    left: 10px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  i {
    font-size: 100px;
    color: black;
    text-align: center;
    margin-top: 70px;
  }

  /* centering the word buttons*/
  #container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 100px;
  }

  img {
    margin-left: 400px;
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
  <!--title-->
  <img
    style="height: 30%; width: auto;"
    src="emotionLogo.png"
    alt="emotions logo" />
  <div id="homeContainer">
    <div id="vertical-placement-home">
      <!--home button-->
      <a href="/">
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
