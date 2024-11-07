import React from "react";

export interface TrackerProps {
  progress?: number | null; // Allow null to represent unknown progress
  total?: number; // Total number (for the "X de Y" display)
  isPercentage?: boolean; // Percentage or Steps mode
  strokeWidth?: number;
  ballStrokeWidth?: number;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  hideValue?: boolean;
  gradient?: Array<{ stop: number; color: string }>;
  subtitle?: string;
  style?: React.CSSProperties;
  className?: string;
  suffix?: string;
  centerBackground?: string;
  fontWeight: string;
  fontSize: string;
  background?: string;
  hideBall?: boolean;
  inverted?: boolean; // New prop to handle inverted progress
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
        />

        {/* Center background circle */}
        <circle cx={center} cy={center} r={radius} fill={centerBackground} />

        {/* Progress arc */}
        <path
          d={pathD}
          stroke={`url(#gradient-${unique})`}
          strokeWidth={strokeWidth}
          fill="none"
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

        {/* Value display */}
        {!hideValue && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            style={{ fontSize, fontWeight }} // Apply fontSize and fontWeight directly as inline styles
            fill="#309E3A"
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
            fill="#309E3A"
          >
            {subtitle}
          </text>
        )}
      </svg>
    </div>
  );
}

export default React.memo(CircularTracker);
