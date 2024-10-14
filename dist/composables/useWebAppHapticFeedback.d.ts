export declare function useWebAppHapticFeedback(): {
    impactOccurred: (style: "light" | "medium" | "heavy" | "rigid" | "soft") => () => void;
    notificationOccurred: (type: "error" | "success" | "warning") => () => void;
    selectionChanged: () => void;
};
