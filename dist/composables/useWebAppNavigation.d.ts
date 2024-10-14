import { OnEventOptions } from '../types';

export declare function useWebAppNavigation(): {
    switchInlineQuery: (query: string, choose_chat_types?: Array<"users" | "bots" | "groups" | "channels">) => void;
    openLink: (url: string, options?: {
        try_instant_view?: boolean;
    }) => void;
    openTelegramLink: (url: string) => void;
    openInvoice: (url: string, callback: (status: "paid" | "cancelled" | "failed" | "pending") => void) => void;
    onInvoiceClosed: (eventHandler: InvoiceClosedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
};
