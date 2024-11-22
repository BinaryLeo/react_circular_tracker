import React from "react";

export interface TrackerProps {
  progress?: number | null; // Allow null to represent unknown progress
  total?: number; // Total number (for the "X de Y" display)
  isPercentage?: boolean; // Percentage or Steps mode
  strokeWidth?: number; // Width of the progress bar
  ballStrokeWidth?: number; // Width of the ball at the end of the progress bar
  transitionDuration?: number; // Duration of the transition animation
  transitionTimingFunction?: string; // Timing function for the transition animation
  hideValue?: boolean; // Hide the value display
  gradient?: Array<{ stop: number; color: string }>; // Gradient colors for the progress bar
  subtitle?: string; // Subtitle text
  style?: React.CSSProperties; // Additional styles
  className?: string; // Additional class name
  suffix?: string; // Suffix for the value display (e.g., "%")
  centerBackground?: string; // Background color for the center of the tracker
  fontWeight?: string; // Font weight for the value display
  fontSize?: string; // Font size for the value display
  background?: string; // Background color for the tracker
  hideBall?: boolean; // Hide the ball at the end of the progress bar
  inverted?: boolean; // New prop to handle inverted progress (Clockwise or Counter-clockwise)
  textColor?: string; // New prop to handle text color of the value display
  icon?: React.ReactNode; // New prop to handle icon component. You can use any React component as an icon
  iconContainerSize?: number; // New prop to define icon container size. As default, it's 100px
  roundedBorders?: boolean; // New prop to handle rounded borders in the progress bar
}

function CircularTracker({
  progress = null, // important Progress can be null for unknown values
  total = 100, // Default total value (e.g., for steps "X de Y")
  isPercentage = true,
  strokeWidth = 4,
  ballStrokeWidth = 12,
  transitionDuration = 0.5,
  transitionTimingFunction = "ease",
  background = "#eef2f5",
  hideBall = false,
  hideValue = false,
  gradient = [
    { stop: 0, color: "#309E3A" },
    { stop: 1, color: "#309E3A" },
  ],
  subtitle,
  style,
  className,
  suffix = "%", // For percentage mode, add suffix by default
  centerBackground = "transparent",
  fontWeight = "bold", // Default font weight
  fontSize = "24px", // Default font size
  inverted = false, // Default to false for normal progress
  textColor = "#309E3A", // Default text color
  icon, // New icon prop
  iconContainerSize = 100, // Default icon container size
  roundedBorders = false, // Default to false for normal borders
}: TrackerProps) {
  const width = 200;
  const height = 200;
  const center = width / 2;
  const radius = center - Math.max(strokeWidth, ballStrokeWidth) / 2;
  const [unique] = React.useState(() => Math.random().toString());

  // Calculate angles for the circular path (in degrees)
  const startAngle = inverted ? -90 : 90; // Start at 3 o'clock position or 9 o'clock for inverted
  const maxAngle = 350; // Leave a small gap at the end (10 degrees) for better visibility
  const progressValue = progress !== null ? progress : 0; // Default to 0 if progress is null or undefined
  const progressAngle = (progressValue / total) * maxAngle;

  // Calculate path coordinates
  const getCoordinatesForAngle = (angle: number) => {
    const radians = ((angle - 90) * Math.PI) / 180; // Convert to radians (0 degrees at 12 o'clock)
    return {
      x: center + radius * Math.cos(radians),
      y: center + radius * Math.sin(radians),
    };
  };

  const start = getCoordinatesForAngle(startAngle);
  const end = getCoordinatesForAngle(
    startAngle + (inverted ? -progressAngle : progressAngle),
  );
  const largeArcFlag = progressAngle > 180 ? 1 : 0;
  const pathD = `
    M ${start.x} ${start.y}
    A ${radius} ${radius} 0 ${largeArcFlag} ${inverted ? 0 : 1} ${end.x} ${end.y}
  `;

  // Determine display text
  let displayText = "";
  if (isPercentage) {
    displayText = `${progressValue}${suffix}`; // Show percentage (e.g., "93%")
  } else {
    displayText =
      progress === null ? `? de ${total}` : `${progress} de ${total}`; // Show "X de Y" (e.g., "3 de 5")
  }

  // Calculate icon dimensions based on 80% of the iconContainerSize
  const iconWidth = iconContainerSize * 0.8;
  const iconHeight = iconContainerSize * 0.8;

  return (
    <div
      className={className}
      style={{
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontWeight: "bold",
        fontSize: "16px",
        width: "200px",
        ...style,
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ display: "block", width: "100%" }}
      >
        <defs>
          <linearGradient
            id={`gradient-${unique}`}
            gradientUnits="userSpaceOnUse"
            x1={inverted ? "1" : "0"}
            y1="0"
            x2={inverted ? "0" : "1"}
            y2="0"
          >
            {gradient.map(({ stop, color }) => (
              <stop key={stop} offset={`${stop * 100}%`} stopColor={color} />
            ))}
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={background}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap={roundedBorders ? "round" : "butt"} // Conditionally add strokeLinecap
        />

        {/* Center background circle */}
        <circle cx={center} cy={center} r={radius} fill={centerBackground} />

        {/* Progress arc */}
        <path
          d={pathD}
          stroke={`url(#gradient-${unique})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap={roundedBorders ? "round" : "butt"} // Conditionally add strokeLinecap
          style={{
            transition: `stroke-dasharray ${transitionDuration}s ${transitionTimingFunction}`,
          }}
          data-testid="progress-arc"
        />

        {/* Ball at the end of progress */}
        {!hideBall && (
          <circle
            cx={end.x}
            cy={end.y}
            r={ballStrokeWidth / 2}
            fill="white"
            stroke={`url(#gradient-${unique})`}
            strokeWidth={ballStrokeWidth}
          />
        )}

        {/* Value display or Icon */}
        {!hideValue && !icon && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            style={{ fontSize, fontWeight }} // Apply fontSize and fontWeight directly as inline styles
            fill={textColor}
            data-testid="progress-ball"
          >
            {displayText}
          </text>
        )}

        {/* Subtitle */}
        {subtitle && (
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="16"
            fill={textColor}
          >
            {subtitle}
          </text>
        )}

        {/* Icon */}
        {icon && (
          <foreignObject
            x={(width - iconWidth) / 2}
            y={(height - iconHeight) / 2}
            width={iconWidth}
            height={iconHeight}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {icon}
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}

export default React.memo(CircularTracker);