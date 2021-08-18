<script>
  let homePlaceCounter = 0;
  let parkCounter = 0;
  let schoolCounter = 0;
  let playgroundCounter = 0;
  let zooCounter = 0;
  let poolCounter = 0;

  //accessing the api library
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";

  //saying school
  function school() {
    schoolCounter++;
    if (schoolCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("school");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes it takes a second for the word to speak"
      );
      schoolCounter = 0;
    }
  }

  //saying zoo
  function zoo() {
    // zooCounter++;
    // if (zooCounter <= 2) {
    //   let speech = new SpeechSynthesisUtterance("zoo");
    //   window.speechSynthesis.speak(speech);
    // } if else {
    //   alert(
    //     "Please only press the button once, sometimes it takes a second for the word to speak"
    //   );
    //   zooCounter = 0;
    // }
  }

  //saying pool

  function pool() {
    poolCounter++;
    if (poolCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("pool");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes it takes a second for the word to speak"
      );
      poolCounter = 0;
    }
  }

  //saying playground
  function playground() {
    playgroundCounter++;
    if (playgroundCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("playground");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes it takes a second for the word to speak"
      );
      playgroundCounter = 0;
    }
  }

  //saying home
  function homePlace() {
    homePlaceCounter++;
    if (homePlaceCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("home");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes it takes a second for the word to speak"
      );
      homePlaceCounter = 0;
    }
  }

  //saying park
  function park() {
    parkCounter++;
    if (parkCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("park");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once, sometimes it takes a second for the word to speak"
      );
      parkCounter = 0;
    }
  }
</script>

<style>
  @media only screen and (max-width: 800px) {
    #titleimg {
      margin-left: 10px;
      height: 10%;
      width: auto;
    }

    #body {
      height: 2600px;
    }
  }

  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    #titleimg {
      margin-left: 90px;
      height: 30%;
      width: auto;
    }

    #body {
      height: 2000px;
    }
  }

  @media only screen and (min-width: 1200px) {
    #titleimg {
      margin-left: 300px;
      height: 500px;
      width: auto;
    }
  }
  /* setting height of page and background color*/
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

  i {
    font-size: 100px;
    color: black;
    text-align: center;
    margin-top: 70px;
  }

  #buttonText {
    text-align: center;
    font-size: 20px;
  }
</style>

<div id="body">
  <!--title-->
  <img id="titleimg" src="placeLogo.png" alt="places logo" />
  <!--home button-->
  <div id="homeContainer">
    <div id="vertical-placement-home">
      <a href="/home">
        <i style="font-size: 100px; color: black;" class="fas fa-home" />
      </a>
    </div>
  </div>

  <div id="container">
    <!--home button-->
    <div id="homePlaceDiv" on:click={homePlace} class="button">
      <i id="homePlace" class="fas fa-home" />
      <p id="buttonText">Home</p>
    </div>
    <!--park button-->
    <div id="parkDiv" on:click={park} class="button">
      <i class="fas fa-tree" />
      <p id="buttonText">Park</p>
    </div>
    <!--school button-->
    <div id="schoolDiv" on:click={school} class="button">
      <i class="fas fa-school" />
      <p id="buttonText">School</p>
    </div>
    <!--playground button-->
    <div id="playgroundDiv" on:click={playground} class="button">
      <img
        style="width: 50%;, height: 50%; margin-top: 30px; margin-left: 100px; "
        src="swing.png"
        alt="swing" />
      <p id="buttonText">Playground</p>
    </div>
    <!--zoo button-->
    <div id="zooDiv" on:click={zoo} class="button">
      <i class="fas fa-hippo" />
      <p id="buttonText">Zoo</p>
    </div>
    <!--pool buttonÏ-->
    <div id="poolDiv" on:click={pool} class="button">
      <i class="fas fa-swimming-pool" />
      <p id="buttonText">Pool</p>
    </div>

  </div>

</div>
