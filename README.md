# Welcome to BoltSwitch!

# Basic Rules

We use hooks 100%.

And if you don’t have state or refs, prefer normal functions (not arrow functions) over classes:

```
// bad

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

# Resources

UI Design: [Figma Design](https://www.figma.com/file/vqIoshL36Mn1uz473JxjsS/BoldSwitch-Design?node-id=0%3A1)

Trello Board: [Trello Board](https://trello.com/b/v3lehMSR/boldswitch)

# Install

First, install [git](http://git-scm.com/downloads) and the LTS version of [node](https://nodejs.org/). Then:

```sh
git clone https://github.com/OYOLA-LLC/boldswitch_website.git
cd boldswitch_website
npm install
npm start
```
