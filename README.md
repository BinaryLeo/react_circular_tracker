# React Circular Tracker

A customizable and reusable circular progress tracker component for React.JS.

![Circular Tracker Demo](https://github.com/BinaryLeo/react_circular_tracker/blob/main/assets/demo.png?raw=true)

## Installation

You can install the package via npm:

```sh
npm install react-circular-tracker
```

Or via yarn:

```sh
yarn add react-circular-tracker
```

## Usage

Here's a basic example of how to use the `CircularTracker` component in your React application:

```tsx
import React from 'react';
import { CircularTracker } from 'react-circular-tracker';

const App = () => (
  <div>
    <CircularTracker progress={50} />
  </div>
);

export default App;
```

## Props

The `CircularTracker` component accepts the following props:

| Prop                    | Type                                      | Default       | Description                                                                 |
|-------------------------|-------------------------------------------|---------------|-----------------------------------------------------------------------------|
| `progress`              | `number \| null`                          | `null`        | The current progress value. Can be `null` to represent unknown progress.    |
| `total`                 | `number`                                  | `100`         | The total value for the progress (used in "X de Y" mode).                   |
| `isPercentage`          | `boolean`                                 | `true`        | Whether to display progress as a percentage or in "X de Y" mode.            |
| `strokeWidth`           | `number`                                  | `4`           | The width of the progress arc stroke.                                       |
| `ballStrokeWidth`       | `number`                                  | `12`          | The width of the ball stroke at the end of the progress arc.                |
| `transitionDuration`    | `number`                                  | `0.5`         | The duration of the transition animation in seconds.                        |
| `transitionTimingFunction` | `string`                               | `ease`        | The timing function for the transition animation.                           |
| `hideValue`             | `boolean`                                 | `false`       | Whether to hide the progress value text.                                    |
| `gradient`              | `Array<{ stop: number; color: string }>`  | `[{ stop: 0, color: '#309E3A' }, { stop: 1, color: '#309E3A' }]` | The gradient colors for the progress arc. |
| `subtitle`              | `string`                                  | `undefined`   | The subtitle text to display below the progress value.                      |
| `style`                 | `React.CSSProperties`                     | `{}`          | Custom styles to apply to the component.                                    |
| `className`             | `string`                                  | `undefined`   | Custom class name to apply to the component.                                |
| `suffix`                | `string`                                  | `%`           | The suffix to display after the progress value (e.g., `%`).                 |
| `centerBackground`      | `string`                                  | `transparent` | The background color of the center circle.                                  |
| `fontWeight`            | `string`                                  | `bold`        | The font weight of the progress value text.                                 |
| `fontSize`              | `string`                                  | `24px`        | The font size of the progress value text.                                   |
| `background`            | `string`                                  | `#eef2f5`     | The background color of the progress arc.                                   |
| `hideBall`              | `boolean`                                 | `false`       | Whether to hide the ball at the end of the progress arc.                    |
| `inverted`              | `boolean`                                 | `false`       | Whether to invert the progress direction (anti-clockwise).                  |
| `textColor`             | `string`                                  | `#309E3A`     | The color of the progress value text.                                       |

## Example

Here's a more detailed example demonstrating various props:

### Default Example

```tsx
<CircularTracker
  progress={93}
  isPercentage={true}
  ballStrokeWidth={14}
  fontSize="36"
  fontWeight={"bold"}
  className="default-tracker"
  gradient={[
    { stop: 0, color: "#059669" }, // Emerald-600
    { stop: 1, color: "#047857" }, // Emerald-700
  ]}
  centerBackground="rgba(16, 185, 129, 0.1)"
  textColor="#059669"
/>
```

### Inverted Example

```tsx
<CircularTracker
  progress={-60}
  total={100}
  isPercentage={true}
  strokeWidth={4}
  ballStrokeWidth={12}
  transitionDuration={0.5}
  transitionTimingFunction="ease"
  background="rgba(255, 87, 51, 0.2)"
  hideBall={false}
  hideValue={false}
  gradient={[
    { stop: 0, color: "#E11D48" }, // Rose-600
    { stop: 1, color: "#BE123C" }, // Rose-700
  ]}
  subtitle=""
  className="inverted-tracker"
  suffix="pts"
  centerBackground="transparent"
  fontWeight="bold"
  fontSize="24px"
  inverted={true}
  textColor="#FF5733"
/>
```

### Loading Example

```tsx
<CircularTracker
  progress={60}
  total={100}
  isPercentage={true}
  strokeWidth={4}
  ballStrokeWidth={12}
  transitionDuration={0.5}
  transitionTimingFunction="ease"
  background="#eef2f5"
  hideBall={false}
  hideValue={false}
  gradient={[
    { stop: 0, color: "#FBBF24" }, // Amber-400
    { stop: 1, color: "#F59E0B" }, // Amber-500
  ]}
  subtitle="Loading..."
  className="loading-tracker"
  suffix="%"
  centerBackground="transparent"
  fontWeight="bold"
  fontSize="24px"
  textColor="#FFC300"
/>
```

### Steps Example

```tsx
<CircularTracker
  progress={3}
  total={5}
  isPercentage={false}
  strokeWidth={4}
  ballStrokeWidth={12}
  transitionDuration={0.5}
  transitionTimingFunction="ease"
  background="#eef2f5"
  hideBall={false}
  hideValue={false}
  gradient={[
    { stop: 0, color: "#7C3AED" }, // Violet-600
    { stop: 1, color: "#6D28D9" }, // Violet-700
  ]}
  subtitle="STEPS"
  style={{}}
  className="steps-tracker"
  suffix=""
  centerBackground="transparent"
  fontWeight="bold"
  fontSize="24px"
  textColor="#8E44AD"
/>
```

## Storybook

You can view and interact with the `CircularTracker` component in Storybook. To start Storybook, run the following command:

```sh
npm run storybook
```

This will start Storybook and open it in your default web browser. You can see different examples of the `CircularTracker` component and interact with its props.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

### Opening an Issue

1. Go to the [Issues](https://github.com/BinaryLeo/react_circular_tracker/issues) page.
2. Click on the "New Issue" button.
3. Provide a clear and descriptive title for the issue.
4. Describe the issue in detail, including steps to reproduce, expected behavior, and any relevant screenshots or code snippets.

### Submitting a Pull Request

1. Fork the repository by clicking the "Fork" button on the repository page.
2. Clone your forked repository to your local machine:
   ```sh
   git clone https://github.com/your-username/react_circular_tracker.git
   ```
3. Create a new branch for your feature or bugfix:
   ```sh
   git checkout -b feature-or-bugfix-name
   ```
4. Make your changes and commit them with a clear and descriptive commit message:
   ```sh
   git commit -m "Description of the changes"
   ```
5. Push your changes to your forked repository:
   ```sh
   git push origin feature-or-bugfix-name
   ```
6. Open a pull request from your forked repository to the main repository. Provide a clear and descriptive title and description for your pull request.

### Running the Project Locally

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/BinaryLeo/react_circular_tracker.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react_circular_tracker
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
   4. Start the Storybook development server:
   ```sh
   npm start
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

Leonardo Moura - [binaryleo](https://github.com/binaryleo) - 2024
Find me on [LinkedIn](https://www.linkedin.com/in/leonardomoura-reactnative/)

## Acknowledgements

Thanks to all the contributors and the open-source community for their support.
