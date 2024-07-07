import { useWebApp } from "./useWebApp"
import type { OnEventOptions } from "~/types"

const { showScanQrPopup, closeScanQrPopup } = Telegram.WebApp

export function useWebAppQrScanner() {
  const { onEvent } = useWebApp()

  const onQrTextReceived = (
    eventHandler: QrTextReceivedCallback,
    options?: OnEventOptions,
  ) => onEvent("qrTextReceived", eventHandler, options)

  return {
    showScanQrPopup,
    closeScanQrPopup,
    onQrTextReceived,
  }
}
