<script>

 //import { onMount } from "svelte";
  import { user } from "../stores.js";
  import { viewLoginPage } from "../firebase.js";

console.log("this is the users info on the settings page", $user.name);
console.log($user.uid);
let categories = [];
let newCategory 
let output
function addCategory() {
  categories.push(newCategory)
  categories.forEach(listCategories);
  
}

function listCategories() {
 output = categories
}


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
{#if $user.uid == undefined}
    <a id="logOutLink" href="/">Log In</a>
  {:else}
    <h1 class="header">Hello {$user.name}</h1>
  {/if}
<input type="text" class="input" bind:value={newCategory} placeholder="Enter new category here:"> 
<button class="button" on:click={addCategory}>Add category</button>
<p>{output}</p>









