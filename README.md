# Your Project

This is your project's README file. It explains to visitors of your code (not your website) what it is and a little about how to use it.

For example, this is the template project. Here are the things you need to know:

- 1\. Code goes in `src/`
  - 1.1 Pages go in `src/routes/`
  - 1.2 Components go in `src/lib/`
  - 1.3 Bulma changes go in `src/global.scss`
- 2\. Images go in `static/`
- 3\. Running your website
- 4\. Debugging your website


## 1.0 Code goes in `src/`

Write all your code in the `src/` folder.


### 1.1 Pages go in `src/routes/`

Each `.svelte` file in there will be a page on your website. You can link to them just using the name of the file without the `.svelte`.

For example, you might have a **home** page and an **about** page. Your folders would look a bit like:

```
src
  lib
  routes
    about.svelte
    index.svelte
```

Then your could link to the **about** page by adding the following code:

```html
<a href="about">About</a>
```

### 1.2 Components go in `src/lib/`

Each `.svelte` file in there will be a component you can use on any of your pages. You can add them just by importing them and putting the element name in.

For example, you might create `Header.svelte` as a component in the `src/lib/` folder. Your folders would look a bit like:

```
src
  lib
    Header.svelte
  routes
    index.svelte
```

Then you could use it in any page by adding the following code:

```html
<script>
  // import the component ready to use.
  import Header from '$lib/Header.svelte'
</script>

<!-- add the Header element into the page -->
<Header />
```

### 1.3 Bulma changes go in `src/global.scss`

TODO

## 2. Images go in `static/`

TODO

## 3. Running your website

Click the `Run` button at the top of the page.

It is recommended to open your website in a new tab to see what it will look like for your users.

## 4. Debugging your website

If your website doesn't show up and there is an error message in the **Console** then read the message to help find the error.

For example, this error message shows up in the console when the `Run` button is pressed.

```console
 npm run build && node build

> test@0.0.1 build /home/runner/sveltekit-template
> svelte-kit build

vite v2.2.3 building for production...
✓ 2 modules transformed.
[vite-plugin-svelte] Expected valid tag name
file: /home/runner/sveltekit-template/src/routes/index.svelte
12:   <p>
13:     SvelteKit makes creating websites and web apps much easier!
14:   </>
        ^
15: </section>
> Expected valid tag name
ParseError: Expected valid tag name
    at error (/home/runner/sveltekit-template/node_modules/svelte/compiler.js:16752:20)
    at Parser$1.error (/home/runner/sveltekit-template/node_modules/svelte/compiler.js:16828:10)
    at read_tag_name (/home/runner/sveltekit-template/node_modules/svelte/compiler.js:15958:17)
    at tag (/home/runner/sveltekit-template/node_modules/svelte/compiler.js:15778:19)
    at new Parser$1 (/home/runner/sveltekit-template/node_modules/svelte/compiler.js:16787:22)
    at parse$3 (/home/runner/sveltekit-template/node_modules/svelte/compiler.js:16919:21)
    at compile (/home/runner/sveltekit-template/node_modules/svelte/compiler.js:29949:18)
    at compileSvelte (/home/runner/sveltekit-template/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js:322:48)
    at async Object.transform (/home/runner/sveltekit-template/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js:713:27)
    at async ModuleLoader.addModuleSource (/home/runner/sveltekit-template/node_modules/rollup/dist/shared/rollup.js:18403:30)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! test@0.0.1 build: `svelte-kit build`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the test@0.0.1 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/runner/.npm/_logs/2021-05-02T21_57_13_609Z-debug.log
exit status 1
 
```

This is alot of information, but the the most important part of the message is near the start.

```console
[vite-plugin-svelte] Expected valid tag name
file: /home/runner/sveltekit-template/src/routes/index.svelte
12:   <p>
13:     SvelteKit makes creating websites and web apps much easier!
14:   </>
        ^
15: </section>
> Expected valid tag name
```

The start of the message says `[vite-plugin-svelte] Expected valid tag name` which means that the computer was expecting a correct HTML tag but it didn't find one

The next line says which file the error is in, which is `index.svelte`.

The chunk of code and the small arrow (`^`) points to where the computer thinks the error is. Debugging should start on line `14` somewhere in the `</>`.

In this case, the closing `</p>` wasn't written properly. Fixing that makes the error go away and the website shows up.