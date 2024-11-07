import React from "react";
export interface TrackerProps {
    progress?: number | null;
    total?: number;
    isPercentage?: boolean;
    strokeWidth?: number;
    ballStrokeWidth?: number;
    transitionDuration?: number;
    transitionTimingFunction?: string;
    hideValue?: boolean;
    gradient?: Array<{
        stop: number;
        color: string;
    }>;
    subtitle?: string;
    style?: React.CSSProperties;
    className?: string;
    suffix?: string;
    centerBackground?: string;
    fontWeight: string;
    fontSize: string;
    background?: string;
    hideBall?: boolean;
    inverted?: boolean;
    textColor?: string;
}
declare function CircularTracker({ progress, // important Progress can be null for unknown values
total, // Default total value (e.g., for steps "X de Y")
isPercentage, strokeWidth, ballStrokeWidth, transitionDuration, transitionTimingFunction, background, hideBall, hideValue, gradient, subtitle, style, className, suffix, // For percentage mode, add suffix by default
centerBackground, fontWeight, // Default font weight
fontSize, // Default font size
inverted, // Default to false for normal progress
textColor, }: TrackerProps): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof CircularTracker>;
export default _default;
