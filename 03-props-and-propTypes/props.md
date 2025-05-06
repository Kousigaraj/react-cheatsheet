# Props and PropTypes in React

## What are Props?

- **Props** (short for *properties*) are used to pass **data from one component to another**.
- Props are **read-only**, meaning a component **cannot modify the props** it receives.
- Props help make components **reusable and dynamic**.
- You can pass any type of data using props: strings, numbers, arrays, objects, functions, etc.

### Example of Using Props

```jsx
// ParentComponent.jsx
import React from 'react';
import Greeting from './Greeting';

function ParentComponent() {
  return <Greeting name="John" />;
}

export default ParentComponent;

// Greeting.jsx
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```
---
# What is PropTypes?

**PropTypes** is a type-checking feature provided by React to ensure components receive props of the correct type.

- Helps catch bugs and improve code reliability.
- You need to import `PropTypes` from the `prop-types` package.
- You define `PropTypes` as a static property or below the component.



## Installing PropTypes

```bash
npm install prop-types
```

## Example of Using PropTypes

```
import React from 'react';
import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default Greeting;
```

## Common PropTypes
| PropTypes               | Description                                     |
|-------------------------|-------------------------------------------------|
| `PropTypes.string`      | A string                                        |
| `PropTypes.number`      | A number                                        |
| `PropTypes.bool`        | A boolean                                       |
| `PropTypes.array`       | An array                                        |
| `PropTypes.object`      | An object                                       |
| `PropTypes.func`        | A function                                      |
| `PropTypes.node`        | A React node (anything that can be rendered)   |
| `PropTypes.element`     | A React element                                 |
| `PropTypes.any`         | Any type                                        |
| `PropTypes.oneOf([...])`| One of specific values                          |
| `PropTypes.shape({})`   | An object with a specific shape                 |

## Summary
- **Props** are used to make components dynamic and reusable.

- **PropTypes** help enforce correct usage of props through type checking.

- Using PropTypes improves your React code's **clarity** and **robustness**.
