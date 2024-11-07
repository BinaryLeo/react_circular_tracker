# BinaryLeo CircularTracker

A customizable and reusable circular progress tracker component for React.JS.

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

## Example

Here's a more detailed example demonstrating various props:

```tsx
import React from 'react';
import { CircularTracker } from 'react-circular-tracker';

const App = () => (
  <div>
    <CircularTracker
      progress={75}
      total={100}
      isPercentage={true}
      strokeWidth={6}
      ballStrokeWidth={10}
      transitionDuration={1}
      transitionTimingFunction="ease-in-out"
      hideValue={false}
      gradient={[
        { stop: 0, color: '#ff0000' },
        { stop: 1, color: '#00ff00' },
      ]}
      subtitle="Loading..."
      style={{ margin: '20px' }}
      className="custom-progress"
      suffix="%"
      centerBackground="#ffffff"
      fontWeight="normal"
      fontSize="20px"
      background="#cccccc"
      hideBall={false}
      inverted={true}
    />
  </div>
);

export default App;
```

## Storybook

You can view and interact with the `CircularTracker` component in Storybook. To start Storybook, run the following command:

```sh
npm run storybook
```

This will start Storybook and open it in your default web browser. You can see different examples of the `CircularTracker` component and interact with its props.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Author

Leonardo Moura - [binaryleo](https://github.com/binaryleo) - 2024
Find me on [LinkedIn](https://www.linkedin.com/in/leonardomoura-reactnative/)

## Acknowledgements

Thanks to all the contributors and the open-source community for their support.
