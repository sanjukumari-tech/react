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