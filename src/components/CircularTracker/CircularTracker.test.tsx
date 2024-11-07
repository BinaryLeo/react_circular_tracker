import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CircularTracker from "./CircularTracker";

describe("Progress Component", () => {
  const mockProps = {
    progress: 50,
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
    subtitle: "Progress Subtitle",
    style: {},
    className: "test-class",
    suffix: "%",
    centerBackground: "transparent",
    fontWeight: "bold",
    fontSize: "24px",
  };

  // Test 1: Check if the component renders without crashing
  test("renders Progress component", () => {
    render(<CircularTracker {...mockProps} />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  // Test 2: Verify that the progress arc is rendered correctly
  test("renders progress arc correctly", () => {
    render(<CircularTracker {...mockProps} />);
    const path = screen.getByTestId("progress-arc");
    expect(path).toBeInTheDocument();
  });

  // Test 3: Check if the ball is rendered correctly when hideBall is false
  test("renders ball correctly when hideBall is false", () => {
    render(<CircularTracker {...mockProps} />);
    const ball = screen.getByTestId("progress-ball");
    expect(ball).toBeInTheDocument();
  });

  // Test 4: Check if the value text is rendered correctly when hideValue is false
  test("renders value text correctly when hideValue is false", () => {
    render(<CircularTracker {...mockProps} />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  // Test 5: Verify that the subtitle is rendered correctly when provided
  test("renders subtitle correctly", () => {
    render(<CircularTracker {...mockProps} />);
    expect(screen.getByText("Progress Subtitle")).toBeInTheDocument();
  });

  // Test 6: Verify that the font weight and size are applied correctly via dynamic styles
  test("applies font weight and size correctly via inline styles", () => {
    render(<CircularTracker {...mockProps} />);
    const text = screen.getByText("50%");
    // Validate the inline styles instead
    const styles = getComputedStyle(text);
    expect(styles.fontWeight).toBe(mockProps.fontWeight);
    expect(styles.fontSize).toBe(mockProps.fontSize);
  });

  // Test 7: Verify that the progress arc is rendered correctly when inverted is true
  test("renders progress arc correctly when inverted is true", () => {
    render(<CircularTracker {...mockProps} inverted={true} />);
    const path = screen.getByTestId("progress-arc");
    expect(path).toBeInTheDocument();
    // Additional checks can be added here to verify the path coordinates if needed
  });
});
