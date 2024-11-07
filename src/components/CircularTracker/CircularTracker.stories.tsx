import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CirclcleTracker, { TrackerProps } from "./tracker";

export default {
  title: "Components/CircularTracker",
  component: CirclcleTracker,
  argTypes: {
    progress: { control: "number" },
    total: { control: "number" },
    isPercentage: { control: "boolean" },
    strokeWidth: { control: "number" },
    ballStrokeWidth: { control: "number" },
    transitionDuration: { control: "number" },
    transitionTimingFunction: { control: "text" },
    hideValue: { control: "boolean" },
    gradient: { control: "object" },
    subtitle: { control: "text" },
    style: { control: "object" },
    className: { control: "text" },
    suffix: { control: "text" },
    centerBackground: { control: "text" },
    fontWeight: { control: "text" },
    fontSize: { control: "text" },
    background: { control: "text" },
    hideBall: { control: "boolean" },
    inverted: { control: "boolean" },
  },
} as Meta<typeof CirclcleTracker>;

const Template: StoryFn<TrackerProps> = (args: TrackerProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <CirclcleTracker {...args} />
  </div>
);

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  progress: 60,
  total: 100,
  isPercentage: true,
  strokeWidth: 4,
  ballStrokeWidth: 12,
  transitionDuration: 0.5,
  transitionTimingFunction: "ease",
  background: "#eef2f5",
  hideBall: false,
  hideValue: false,
  gradient: [
    { stop: 0, color: "#309E3A" },
    { stop: 1, color: "#309E3A" },
  ],
  subtitle: "Loading...",
  style: {},
  className: "",
  suffix: "%",
  centerBackground: "transparent",
  fontWeight: "bold",
  fontSize: "24px",
};

export const Percentage = Template.bind({});
Percentage.args = {
  progress: 60,
  total: 100,
  isPercentage: true,
  strokeWidth: 4,
  ballStrokeWidth: 12,
  transitionDuration: 0.5,
  transitionTimingFunction: "ease",
  background: "#eef2f5",
  hideBall: false,
  hideValue: false,
  gradient: [
    { stop: 0, color: "#309E3A" },
    { stop: 1, color: "#309E3A" },
  ],
  subtitle: "",
  style: {},
  className: "",
  suffix: "%",
  centerBackground: "transparent",
  fontWeight: "bold",
  fontSize: "24px",
};

export const InvertedNegative = Template.bind({});
InvertedNegative.args = {
  progress: -60,
  total: 100,
  isPercentage: true,
  strokeWidth: 4,
  ballStrokeWidth: 12,
  transitionDuration: 0.5,
  transitionTimingFunction: "ease",
  background: "#eef2f5",
  hideBall: false,
  hideValue: false,
  gradient: [
    { stop: 0, color: "#309E3A" },
    { stop: 1, color: "#309E3A" },
  ],
  subtitle: "",
  style: {},
  className: "",
  suffix: "%",
  centerBackground: "transparent",
  fontWeight: "bold",
  fontSize: "24px",
  inverted: true,
};

export const Steps = Template.bind({});
Steps.args = {
  progress: 3,
  total: 5,
  isPercentage: false,
  strokeWidth: 4,
  ballStrokeWidth: 12,
  transitionDuration: 0.5,
  transitionTimingFunction: "ease",
  background: "#eef2f5",
  hideBall: false,
  hideValue: false,
  gradient: [
    { stop: 0, color: "#309E3A" },
    { stop: 1, color: "#309E3A" },
  ],
  subtitle: "",
  style: {},
  className: "",
  suffix: "",
  centerBackground: "transparent",
  fontWeight: "bold",
  fontSize: "24px",
};
