<script>
let categories = [
  "Emotions",
  "Places",
  "Phrases",
  "Food",
  "Animals"

]
</script>
<style>
  * {
    margin: 10px;
  }
  h1 {
    text-align: center;
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
       <i style=" font-size: 100px; color: black;" class="fas fa-home" />
    </a>
  </div>
</div>

<input type="text" class="input" placeholder="Enter new category here:">
<button class="button">Add category</button>




