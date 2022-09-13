# Welcome to BoltSwitch!

# Basic Rules

We use hooks 100%.

# Naming

Extensions: Use .jsx extension for React components. eslint: react/jsx-filename-extension

Filename: Use PascalCase for filenames. E.g., ReservationCard.jsx.

Reference Naming: Use PascalCase for React components and camelCase for their instances. eslint: react/jsx-pascal-case

```
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;

```

Component Naming: Use the filename as the component name. For example, ReservationCard.jsx should have a reference name of ReservationCard. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:

```
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

And if you don’t have state or refs, prefer normal functions (not arrow functions):

```
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
