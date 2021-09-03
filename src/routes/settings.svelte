<script>
  //importing the user details
  import { user } from "../stores.js";
  //importing the logout function
  import { viewLoginPage } from "../firebase.js";

  //setting the categories as a varible
  let categories = [];
  //setting newCategory as a varible
  let newCategory;
  //setting output as a varible
  let output;

  //adding a category function
  function addCategory() {
    if (newCategory )
    //adding the category the user entered to the categories arrary
    categories.push(newCategory);
    //looping through the catgeories and calling another function
    categories.forEach(listCategories);
  }

  function listCategories() {
    //outputing the categories array
    output = categories;
  }
</script>

<style>
  /* setting the page to all have a margin */
  * {
    margin: 10px;
  }
  /* centering the title */
  h1 {
    text-align: center;
  }

  /* placing the home button */
  #vertical-placement-home {
    margin: 0;
    position: relative;
    left: 10px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>

<!-- title -->
<h1 class="title">Settings</h1>

<!-- home button -->
<div id="homeContainer">
  <div id="vertical-placement-home">
    <a href="/home">
      <i style=" font-size: 100px; color: black;" class="fas fa-home" />
    </a>
  </div>
</div>
<!-- if the user is undefined have a log out link -->
{#if $user.uid == undefined}
  <a id="logOutLink" href="/">Log In</a>
{:else}
  <!-- if the user is defined say hello to the user -->
  <h1 class="header">Hello {$user.name}</h1>
{/if}
<!-- text input for the user  -->
<input
  type="text"
  class="input"
  maxlength="20"
  bind:value={newCategory}
  placeholder="Enter new category here:" />
<!-- button to send catgeory user entered -->
<button class="button" on:click={addCategory}>Add category</button>
<!-- output of the catgeories user entered -->
<p>{output}</p>
