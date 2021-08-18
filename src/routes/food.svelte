<script>
  let waterCounter = 0;
  let pizzaCounter = 0;
  let eggCounter = 0;
  let carrotCounter = 0;
  let appleCounter = 0;
  let cakeCounter = 0;

  //accessing the api library
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";

  //saying pizza

  function pizza() {
    pizzaCounter++;
    if (pizzaCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("pizza");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once. Sometimes it takes a second to speak"
      );
      pizzaCounter = 0;
    }
  }

  //saying apple
  function apple() {
    appleCounter++;

    if (appleCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("apple");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once. Sometimes it takes a second to speak"
      );
      appleCounter = 0;
    }
  }

  //saying water
  function water() {
    waterCounter++;
    if (waterCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("water");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once. Sometimes it takes a second to speak"
      );
      waterCounter = 0;
    }
  }

  //saying carrot
  function carrot() {
    carrotCounter++;

    if (carrotCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("carrot");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once. Sometimes it takes a second to speak"
      );
      carrotCounter = 0;
    }
  }

  //saying egg
  function egg() {
    eggCounter++;
    if (eggCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("egg");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once. Sometimes it takes a second to speak"
      );
      eggCounter = 0;
    }
  }

  //saying cake
  function cake() {
    cakeCounter++;

    if (cakeCounter <= 2) {
      let speech = new SpeechSynthesisUtterance("cake");
      window.speechSynthesis.speak(speech);
    } else {
      alert(
        "Please only press the button once. Sometimes it takes a second to speak"
      );
      cakeCounter = 0;
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

  #buttonText {
    text-align: center;
    font-size: 20px;
    margin-left: 100px;
  }

  i {
    font-size: 100px;
    color: black;
    text-align: center;
    margin-left: 80px;
    margin-top: 70px;
  }
</style>


<div id="body">
  <!--title-->
  <img id="titleimg" src="foodLogo.png" alt="food category logo" />
  <!-- home button -->
  <div id="homeContainer">
    <div id="vertical-placement-home">
      <a href="/home">
        <i style=" font-size: 100px; color: black;" class="fas fa-home" />
      </a>
    </div>
  </div>

  <div id="container">
    <!--water button-->
    <button on:click={water} class="button">
      <i class="fas fa-tint" />
      <p id="buttonText">Water</p>
    </button>
    <!--pizza button-->
    <button on:click={pizza} class="button">
      <i class="fas fa-pizza-slice" />
      <p id="buttonText">Pizza</p>
    </button>
    <!--egg button-->
    <button on:click={egg} class="button">
      <i class="fas fa-egg" />
      <p id="buttonText">Egg</p>
    </button>

    <!--carrot button-->
    <button on:click={carrot} class="button">
      <i class="fas fa-carrot" />
      <p id="buttonText">Carrot</p>
    </button>

    <!--apple button-->
    <button on:click={apple} class="button">
      <i class="fas fa-apple-alt" />
      <p id="buttonText">Apple</p>
    </button>

    <!--cake button-->
    <button id="cake" on:click={cake} class="button">
      <i class="fas fa-birthday-cake" />
      <p id="buttonText">Cake</p>
    </button>

  </div>

</div>
