# Welcome to BoltSwitch!

## Table of Contents

1. [Basic Rules](#basic-rules)
1. [Naming](#naming)
1. [Declaration](#declaration)
1. [Alignment](#alignment)
1. [Quotes](#quotes)
1. [Spacing](#spacing)
1. [Props](#props)
1. [Refs](#refs)
1. [Parentheses](#parentheses)
1. [Tags](#tags)
1. [Methods](#methods)
1. [Ordering](#ordering)
1. [`isMounted`](#ismounted)

# Basic Rules

We use hooks 100%.

## Naming

- **Extensions**: Use `.jsx` extension for React components.
- **Filename**: Use CamelCase for filenames. E.g., `reservationCard.jsx`.
- **Reference Naming**: Use PascalCase for React components and camelCase for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

  ```jsx
  // bad
  import reservationCard from "./ReservationCard";

  // good
  import ReservationCard from "./reservationCard";

  // bad
  const ReservationItem = <ReservationCard />;

  // good
  const reservationItem = <ReservationCard />;
  ```

- **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

  ```jsx
  // bad
  import Footer from "./Footer/Footer";

  // bad
  import Footer from "./Footer/index";

  // good
  import Footer from "./Footer";
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
