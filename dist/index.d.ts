import { App } from 'vue';
import { default as Alert } from './components/Alert';
import { default as BackButton } from './components/BackButton';
import { default as BiometricManager } from './components/BiometricManager';
import { default as ClosingConfirmation } from './components/ClosingConfirmation';
import { default as Confirm } from './components/Confirm';
import { default as ExpandedViewport } from './components/ExpandedViewport';
import { default as MainButton } from './components/MainButton';
import { default as Popup } from './components/Popup';
import { default as ScanQr } from './components/ScanQr';
import { default as SettingsButton } from './components/SettingsButton';
import { default as ShareWidget } from './widgets/ShareWidget';
import { default as PostWidget } from './widgets/PostWidget';
import { default as LoginWidget } from './widgets/LoginWidget';
import { default as DiscussionWidget } from './widgets/DiscussionWidget';

export { Alert, BackButton, BiometricManager, ClosingConfirmation, Confirm, ExpandedViewport, MainButton, Popup, ScanQr, SettingsButton, ShareWidget, PostWidget, LoginWidget, DiscussionWidget, };
export type { LoginWidgetUser } from './types';
export { useWebApp } from './composables/useWebApp';
export { useWebAppBackButton } from './composables/useWebAppBackButton';
export { useWebAppBiometricManager } from './composables/useWebAppBiometricManager';
export { useWebAppClipboard } from './composables/useWebAppClipboard';
export { useWebAppClosingConfirmation } from './composables/useWebAppClosingConfirmation';
export { useWebAppCloudStorage } from './composables/useWebAppCloudStorage';
export { useWebAppHapticFeedback } from './composables/useWebAppHapticFeedback';
export { useWebAppMainButton } from './composables/useWebAppMainButton';
export { useWebAppNavigation } from './composables/useWebAppNavigation';
export { useWebAppPopup } from './composables/useWebAppPopup';
export { useWebAppQrScanner } from './composables/useWebAppQrScanner';
export { useWebAppRequests } from './composables/useWebAppRequests';
export { useWebAppSendData } from './composables/useWebAppSendData';
export { useWebAppSettingsButton } from './composables/useWebAppSettingsButton';
export { useWebAppShare } from './composables/useWebAppShare';
export { useWebAppTheme } from './composables/useWebAppTheme';
export { useWebAppViewport } from './composables/useWebAppViewport';
declare const plugin: {
    install(Vue: App): void;
};
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TgAlert: typeof Alert;
        TgBackButton: typeof BackButton;
        TgBiometricManager: typeof BiometricManager;
        TgClosingConfirmation: typeof ClosingConfirmation;
        TgConfirm: typeof Confirm;
        TgExpandedViewport: typeof ExpandedViewport;
        TgMainButton: typeof MainButton;
        TgPopup: typeof Popup;
        TgScanQr: typeof ScanQr;
        TgSettingsButton: typeof SettingsButton;
        TgShareWidget: typeof ShareWidget;
        TgPostWidget: typeof PostWidget;
        TgLoginWidget: typeof LoginWidget;
        TgDiscussionWidget: typeof DiscussionWidget;
    }
}
export { plugin as VueTelegramPlugin };
