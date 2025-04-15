● What is Emmet?
● Difference between a Library and Framework?
● What is CDN? Why do we use it?
● Why is React known as React?
● What is crossorigin in script tag?
● What is diference between React and ReactDOM
● What is difference between react.development.js and react.production.js files via CDN?
● What is async and defer? -
ChatGPT said:
Here’s a clear explanation for each of those frontend-related questions:

● What is Emmet?
Emmet is a plugin/tool used in code editors (like VS Code) to write HTML and CSS code faster using abbreviations.
For example:

Typing ul>li*3 and pressing Tab expands to:

html
Copy
Edit
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
● Difference between a Library and Framework?
Feature	Library	Framework
Control	You call the library	Framework calls your code
Flexibility	More flexible	More opinionated (fixed structure)
Example	React, Lodash	Angular, Vue, Django
A library is like a helper. A framework provides the skeleton and expects you to follow its way.

● What is CDN? Why do we use it?
CDN (Content Delivery Network) is a network of servers around the world that delivers static content (like images, CSS, JS) faster to users based on their location.

Why use it?

Improves load times

Reduces server load

Increases availability and reliability

Caches content closer to the user

Example:

html
Copy
Edit
<script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script>
● Why is React known as React?
React was named because:

It reacts to changes in data.

Uses a concept called reactive programming, where the UI automatically updates when the underlying data changes.

● What is crossorigin in the <script> tag?
The crossorigin attribute controls how the browser handles CORS (Cross-Origin Resource Sharing) requests for external resources.

Examples:

html
Copy
Edit
<script src="file.js" crossorigin="anonymous"></script>
Values:

anonymous – Sends no credentials (cookies, headers)

use-credentials – Sends credentials

Useful when you use CDNs or external scripts that are hosted on different domains.

● What is the difference between React and ReactDOM?
React	ReactDOM
Core library	For building UI components
React Native, Web, etc.	Specific to Web DOM rendering
ReactDOM is a bridge between React and the DOM.

js
Copy
Edit
// React: Create component
const App = () => <h1>Hello</h1>;

// ReactDOM: Render to browser
ReactDOM.render(<App />, document.getElementById("root"));
● Difference between react.development.js and react.production.js via CDN?
Feature	react.development.js	react.production.js
Purpose	For development/debugging	For production deployment
Size	Larger	Minified (smaller)
Error Messages	Detailed warnings & logs	No detailed warnings
Performance	Slower	Optimized for performance
Always use production version in the live app for better performance.

● What is async and defer?
Both are attributes for <script> tag to load JavaScript without blocking HTML parsing.

Attribute	When it loads	When it executes	Order preserved
async	Asynchronously	As soon as it's ready	❌ (no guarantee)
defer	Asynchronously	After HTML is parsed	✅ (in order)
Example:

html
Copy
Edit
<script src="file.js" async></script>
<script src="file.js" defer></script>


## parcel
-dev build
local server
HMR- hot module replacement
using file watching algorithm - written in c++
--cachinig -- faster builds
--image optimisation
--minification
--bundling
--compress

tree shaking -- remove unused functions or code
--differenital bundling --

assignment day-2 (parcel )

 What is NPM?
NPM (Node Package Manager) is the default package manager for Node.js.
It helps you:

Install libraries/tools (e.g., React, Parcel)

Manage dependencies via package.json

Run scripts like npm start, npm test

🔹 What is Parcel / Webpack? Why do we need it?
Both are bundlers. They:

Combine your JS, CSS, HTML files

Optimize assets (minify, compress, etc.)

Enable dev tools (like HMR)

Why do we need them?
Because modern apps:

Use modules (import, export)

Need optimization for performance

Need dev-friendly tools (like auto reload)

🔹 What is .parcel-cache?
This is a hidden folder created by Parcel to cache builds and speed up performance.
Parcel reuses previously compiled files from this cache for faster builds.

You can safely delete it if needed — it will regenerate.

🔹 What is npx?
npx allows you to run Node packages directly without installing them globally.

Example:

bash
Copy
Edit
npx parcel index.html
This runs Parcel without needing a global install (npm install -g parcel).

🔹 dependencies vs devDependencies
dependencies	devDependencies
Required at runtime	Only needed in development
E.g., React, Axios	E.g., Babel, Parcel, Jest
They’re declared in package.json and help distinguish what's needed in production vs dev.

🔹 What is Tree Shaking?
Tree Shaking is the process of removing unused code from your final bundle.
Helps reduce file size by including only what's actually used.

Example:
If you import just add() from a utility file, the unused subtract() won’t be included.

🔹 What is Hot Module Replacement (HMR)?
HMR allows your browser to update modules in real time without reloading the whole page.
This means:

Faster development

Retains app state (e.g., form data doesn’t reset)

🔹 Favourite 5 Superpowers of Parcel (choose any):
Zero Configuration – No config needed to get started!

Blazing Fast Bundling – Uses caching and workers.

Hot Module Replacement (HMR) – Live reloads your changes.

Built-in Support for many file types – SCSS, TypeScript, JSX, etc.

Tree Shaking and Code Splitting – Optimized bundles.

In My Words (3):
Zero Config: Just npx parcel index.html and you're good. No complex webpack.config.js.

HMR: Saves dev time. Update CSS/JS and see changes instantly.

Smart Defaults: Parcel understands modern JavaScript, JSX, images — no need to manually configure loaders.

🔹 What is .gitignore?
A file that tells Git what to ignore while pushing to a repo.

✅ Should include:

node_modules/

.parcel-cache/

.env

dist/

❌ Should NOT include:

Source code

Configuration files like package.json

🔹 package.json vs package-lock.json
package.json	package-lock.json
Lists your project metadata & dependencies	Stores exact version tree installed
Editable by you	Auto-generated by npm
🔹 Why should I not modify package-lock.json?
It’s auto-generated

Changing it manually can break dependency resolution

NPM uses it to ensure consistent installs across teams/devices

🔹 What is node_modules? Should it be pushed to Git?
node_modules is where NPM installs all your project’s dependencies.

❌ Never push it to Git.

It's large

Can be re-installed anytime using npm install

Add it to .gitignore

🔹 What is dist folder?
dist = distribution folder.
Contains final optimized, production-ready code after bundling.

You ship this folder to deployment services (e.g., Netlify, Vercel).

🔹 What is browserslist?
Defines which browsers your project should support (for Babel, PostCSS, etc.)

Example in package.json:

json
Copy
Edit
"browserslist": [
  "> 0.5%",
  "last 2 versions",
  "not dead"
]
Helps tools like Babel transpile code accordingly.

🔹 Caret (^) vs Tilde (~) in NPM
In package.json:

^1.2.3 = Accepts new minor & patch updates (e.g., 1.3.0, but not 2.0.0)

~1.2.3 = Accepts only patch updates (e.g., 1.2.4, not 1.3.0)

🔹 Script types in HTML (from MDN Docs)
html
Copy
Edit
<script src="main.js"></script>          <!-- Default, synchronous -->
<script type="module" src="main.js"></script>  <!-- ES Modules -->
<script nomodule src="fallback.js"></script>   <!-- For old browsers -->
type="module": Enables import/export syntax

nomodule: Used as a fallback if module isn't supported

