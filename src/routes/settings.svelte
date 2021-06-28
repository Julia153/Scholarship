<style>
* {
    margin: 10px;
}
h1 {
    text-align: center;
}
#homeIcon {
    width: 10%;
    height: 10%;
  }

  #vertical-placement-home {
    margin: 0;
    position: relative;
    left: 10px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }


</style>

<h1 class="title">Settings</h1>
<div id="homeContainer">
    <div id="vertical-placement-home">
      <a href="/home">
        <img id="homeIcon" src="home.png" alt="home icon" />
      </a>
    </div>
  </div>

<div class="select">
  <select>
    <option>Select Voice</option>
    <option>With options</option>
  </select>
</div>

<label class="checkbox">
  <input type="checkbox">
  Do you want to have images?
</label>

<input class="input" type="text" placeholder="New Word Button Name"><button class="button">Enter</button>
<input class="input" type="text" placeholder="New Image Name"><button class="button">Enter</button>