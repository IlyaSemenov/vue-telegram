import { defineComponent as B, onMounted as T, watch as v, onUnmounted as x, computed as d, openBlock as C, createBlock as k, resolveDynamicComponent as y, withCtx as _, ref as u, readonly as A, effectScope as I } from "vue";
const R = /* @__PURE__ */ B({
  __name: "Alert",
  props: {
    message: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = e, i = n, { showAlert: o } = E();
    return T(() => o(t.message, () => i("close"))), (a, r) => null;
  }
}), $ = /* @__PURE__ */ B({
  __name: "BackButton",
  props: {
    visible: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, i = n, { showBackButton: o, onBackButtonClicked: a, hideBackButton: r } = ee();
    return v(
      () => t.visible,
      (s) => {
        s ? o() : r();
      }
    ), a(() => i("click")), T(() => t.visible && o()), x(() => r()), (s, l) => null;
  }
}), D = /* @__PURE__ */ B({
  __name: "BiometricManager",
  emits: ["init"],
  setup(e, { emit: n }) {
    const t = n, { initBiometric: i } = ne();
    return T(() => i(() => t("init"))), (o, a) => null;
  }
}), H = /* @__PURE__ */ B({
  __name: "ClosingConfirmation",
  setup(e) {
    const { enableClosingConfirmation: n, disableClosingConfirmation: t } = ie();
    return T(() => n()), x(() => t()), (i, o) => null;
  }
}), U = /* @__PURE__ */ B({
  __name: "Confirm",
  props: {
    message: { type: String, required: !0 }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = e, i = n, { showConfirm: o } = E();
    return T(() => o(t.message, (a) => i("close", a))), (a, r) => null;
  }
}), L = /* @__PURE__ */ B({
  __name: "ExpandedViewport",
  props: {
    force: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, { isFeatureSupported: t } = S(), { onViewportChanged: i, expand: o, isExpanded: a, isVerticalSwipesEnabled: r } = Se();
    return t("DisableVerticalSwipes") ? v(
      () => n.force,
      (s) => {
        s && !a.value && o(), r.value = !s;
      },
      {
        immediate: !0
      }
    ) : i(({ isStateStable: s }) => {
      n.force && s && !a.value && o();
    }), T(() => o()), (s, l) => null;
  }
}), Q = /* @__PURE__ */ B({
  __name: "MainButton",
  props: {
    text: { type: String },
    color: { type: String },
    textColor: { type: String },
    visible: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    progress: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, i = n, {
      setMainButtonParams: o,
      onMainButtonClicked: a,
      hideMainButton: r,
      showMainButtonProgress: s,
      hideMainButtonProgress: l
    } = me();
    return v(
      () => t.text,
      (c) => {
        o({
          text: c
        });
      }
    ), v(
      () => t.color,
      (c) => {
        o({
          color: c
        });
      }
    ), v(
      () => t.textColor,
      (c) => {
        o({
          text_color: c
        });
      }
    ), v(
      () => t.visible,
      (c) => {
        o({
          is_visible: c
        });
      }
    ), v(
      () => t.disabled,
      (c) => {
        o({
          is_active: !c
        });
      }
    ), v(
      () => t.progress,
      (c) => {
        c ? s() : l();
      }
    ), a(() => i("click")), T(() => {
      t.progress ? s() : l(), o({
        text: t.text,
        text_color: t.textColor,
        color: t.color,
        is_active: !t.disabled,
        is_visible: t.visible
      });
    }), x(() => {
      l(), r();
    }), (c, m) => null;
  }
}), z = /* @__PURE__ */ B({
  __name: "Popup",
  props: {
    title: { type: String },
    message: { type: String, required: !0 },
    buttons: { type: Array }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = e, i = n, { showPopup: o } = E();
    return T(
      () => o(
        {
          title: t.title,
          message: t.message,
          buttons: t.buttons
        },
        (a) => i("close", a)
      )
    ), (a, r) => null;
  }
}), O = /* @__PURE__ */ B({
  __name: "ScanQr",
  props: {
    text: { type: String }
  },
  emits: ["result"],
  setup(e, { emit: n }) {
    const t = e, i = n, { showScanQrPopup: o, closeScanQrPopup: a } = ge();
    return T(
      () => o(
        {
          text: t.text
        },
        (r) => i("result", r)
      )
    ), x(() => a()), (r, s) => null;
  }
}), j = /* @__PURE__ */ B({
  __name: "SettingsButton",
  props: {
    visible: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, i = n, { showSettingsButton: o, onSettingsButtonClicked: a, hideSettingsButton: r } = be();
    return v(
      () => t.visible,
      (s) => {
        s ? o() : r();
      }
    ), a(() => i("click")), T(() => t.visible && o()), x(() => r()), (s, l) => null;
  }
}), N = /* @__PURE__ */ B({
  __name: "ShareWidget",
  props: {
    url: {
      type: String,
      required: !0
    },
    comment: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    noLabel: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const n = e, t = d(() => JSON.stringify(n));
    return (i, o) => (C(), k(y(e.tag), { key: t.value }, {
      default: _(() => [
        (C(), k(y("script"), {
          async: "",
          src: "https://telegram.org/js/telegram-widget.js?22",
          "data-telegram-share-url": e.url,
          "data-size": e.size,
          "data-comment": e.comment,
          "data-text": e.noLabel ? "notext" : null
        }, null, 8, ["data-telegram-share-url", "data-size", "data-comment", "data-text"]))
      ]),
      _: 1
    }));
  }
}), G = /* @__PURE__ */ B({
  __name: "PostWidget",
  props: {
    url: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: null
    },
    authorPhoto: {
      type: Boolean,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    darkColor: {
      type: String,
      default: null
    },
    dark: {
      type: Boolean,
      default: null
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const n = e, t = d(() => JSON.stringify(n));
    return (i, o) => (C(), k(y(e.tag), { key: t.value }, {
      default: _(() => [
        (C(), k(y("script"), {
          async: "",
          src: "https://telegram.org/js/telegram-widget.js?22",
          "data-telegram-post": e.url,
          "data-width": e.width,
          "data-userpic": e.authorPhoto,
          "data-color": e.color,
          "data-dark-color": e.darkColor,
          "data-dark": e.dark
        }, null, 8, ["data-telegram-post", "data-width", "data-userpic", "data-color", "data-dark-color", "data-dark"]))
      ]),
      _: 1
    }));
  }
}), J = /* @__PURE__ */ B({
  __name: "LoginWidget",
  props: {
    botUsername: {
      type: String,
      required: !0
    },
    redirectUrl: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    cornerRadius: {
      type: String,
      default: null
    },
    userPhoto: {
      type: Boolean,
      default: null
    },
    requestWrite: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["auth"],
  setup(e, { emit: n }) {
    const t = e, i = d(() => JSON.stringify(t)), o = n;
    return T(() => {
      window.onTelegramAuth = (a) => o("auth", a);
    }), (a, r) => (C(), k(y(e.tag), { key: i.value }, {
      default: _(() => [
        (C(), k(y("script"), {
          async: "",
          src: "https://telegram.org/js/telegram-widget.js?22",
          "data-telegram-login": e.botUsername,
          "data-size": e.size,
          "data-radius": e.cornerRadius,
          "data-userpic": e.userPhoto,
          "data-request-access": e.requestWrite ? "write" : null,
          "data-onauth": e.redirectUrl ? null : "onTelegramAuth(user)",
          "data-auth-url": e.redirectUrl
        }, null, 8, ["data-telegram-login", "data-size", "data-radius", "data-userpic", "data-request-access", "data-onauth", "data-auth-url"]))
      ]),
      _: 1
    }));
  }
}), F = /* @__PURE__ */ B({
  __name: "DiscussionWidget",
  props: {
    url: {
      type: String,
      required: !0
    },
    commentsLimit: {
      type: Number,
      default: null
    },
    height: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    darkColor: {
      type: String,
      default: null
    },
    dark: {
      type: Boolean,
      default: null
    },
    colorful: {
      type: Boolean,
      default: null
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const n = e, t = d(() => JSON.stringify(n));
    return (i, o) => (C(), k(y(e.tag), { key: t.value }, {
      default: _(() => [
        (C(), k(y("script"), {
          async: "",
          src: "https://telegram.org/js/telegram-widget.js?22",
          "data-telegram-discussion": e.url,
          "data-comments-limit": e.commentsLimit,
          "data-height": e.height,
          "data-color": e.color,
          "data-dark-color": e.darkColor,
          "data-dark": e.dark,
          "data-colorful": e.colorful
        }, null, 8, ["data-telegram-discussion", "data-comments-limit", "data-height", "data-color", "data-dark-color", "data-dark", "data-colorful"]))
      ]),
      _: 1
    }));
  }
}), q = u(!1), K = (...e) => {
  Telegram.WebApp.ready(...e), q.value = !0;
}, V = (e) => Telegram.WebApp.platform === e, X = {
  ClosingConfirmation: "6.2",
  CloudStorage: "6.9",
  RequestWriteAccess: "6.9",
  RequestContact: "6.9",
  SettingsButton: "7.0",
  BiometricManager: "7.2",
  DisableVerticalSwipes: "7.7"
}, Y = (e) => Telegram.WebApp.isVersionAtLeast(X[e]);
function S() {
  const e = (m, f, h = { manual: !1 }) => {
    const { manual: g } = h, W = () => {
      Telegram.WebApp.onEvent(
        m,
        f
      );
    }, p = () => {
      Telegram.WebApp.offEvent(
        m,
        f
      );
    };
    return g ? W() : (T(W), x(p)), {
      off: p
    };
  }, {
    initData: n,
    initDataUnsafe: t,
    version: i,
    platform: o,
    isVersionAtLeast: a,
    sendData: r,
    close: s
  } = Telegram.WebApp, l = V("unknown"), c = !l && n === "";
  return {
    initData: n,
    initDataUnsafe: t,
    version: i,
    platform: o,
    isVersionAtLeast: a,
    onEvent: e,
    sendData: r,
    ready: K,
    close: s,
    isReady: A(q),
    isPlatform: V,
    isPlatformUnknown: l,
    isFeatureSupported: Y,
    /**
     * @deprecated
     */
    canSendData: c
  };
}
function M(e) {
  let n = !1, t;
  return function() {
    return n || (I(!0).run(() => {
      t = e();
    }), n = !0), t;
  };
}
const Z = M(() => {
  const e = u(Telegram.WebApp.BackButton.isVisible);
  function n() {
    e.value = Telegram.WebApp.BackButton.isVisible;
  }
  function t(...o) {
    Telegram.WebApp.BackButton.show(...o), n();
  }
  function i(...o) {
    Telegram.WebApp.BackButton.hide(...o), n();
  }
  return { isBackButtonVisible: e, showBackButton: t, hideBackButton: i };
});
function ee() {
  const { isBackButtonVisible: e, showBackButton: n, hideBackButton: t } = Z(), { onEvent: i } = S(), o = (a, r) => i("backButtonClicked", a, r);
  return {
    isBackButtonVisible: d({
      get() {
        return e.value;
      },
      set(a) {
        a ? n() : t();
      }
    }),
    onBackButtonClicked: o,
    showBackButton: n,
    hideBackButton: t
  };
}
const te = M(() => {
  const e = u(Telegram.WebApp.BiometricManager.isInited), n = u(
    Telegram.WebApp.BiometricManager.isBiometricAvailable
  ), t = u(Telegram.WebApp.BiometricManager.biometricType), i = u(
    Telegram.WebApp.BiometricManager.isAccessRequested
  ), o = u(
    Telegram.WebApp.BiometricManager.isAccessGranted
  ), a = u(
    Telegram.WebApp.BiometricManager.isAccessGranted
  ), r = u(Telegram.WebApp.BiometricManager.deviceId);
  function s() {
    e.value = Telegram.WebApp.BiometricManager.isInited, n.value = Telegram.WebApp.BiometricManager.isBiometricAvailable, t.value = Telegram.WebApp.BiometricManager.biometricType, i.value = Telegram.WebApp.BiometricManager.isAccessRequested, o.value = Telegram.WebApp.BiometricManager.isAccessGranted, r.value = Telegram.WebApp.BiometricManager.deviceId, a.value = Telegram.WebApp.BiometricManager.isBiometricTokenSaved;
  }
  return {
    isBiometricInited: e,
    isBiometricAvailable: n,
    biometricType: t,
    isBiometricAccessRequested: i,
    isBiometricAccessGranted: o,
    biometricDeviceId: r,
    isBiometricTokenSaved: a,
    updateState: s
  };
});
function ne() {
  const {
    isBiometricInited: e,
    isBiometricAvailable: n,
    biometricType: t,
    isBiometricAccessRequested: i,
    isBiometricAccessGranted: o,
    biometricDeviceId: a,
    isBiometricTokenSaved: r,
    updateState: s
  } = te(), { onEvent: l } = S(), c = (w, P) => l("biometricManagerUpdated", w, P), m = (w, P) => l("biometricAuthRequested", w, P), f = (w, P) => l("biometricTokenUpdated", w, P);
  c(s);
  const {
    init: h,
    requestAccess: g,
    authenticate: W,
    updateBiometricToken: p,
    openSettings: b
  } = Telegram.WebApp.BiometricManager;
  return {
    isBiometricInited: A(e),
    isBiometricAvailable: A(n),
    biometricType: A(t),
    isBiometricAccessRequested: A(i),
    isBiometricAccessGranted: A(o),
    isBiometricTokenSaved: A(r),
    biometricDeviceId: A(a),
    initBiometric: h,
    requestBiometricAccess: g,
    authenticateBiometric: W,
    updateBiometricToken: p,
    openBiometricSettings: b,
    onBiometricManagerUpdated: c,
    onBiometricAuthRequested: m,
    onBiometricTokenUpdated: f
  };
}
function he() {
  const { onEvent: e } = S(), n = (i, o) => e("clipboardTextReceived", i, o), { readTextFromClipboard: t } = Telegram.WebApp;
  return {
    readTextFromClipboard: t,
    onClipboardTextReceived: n
  };
}
const oe = M(() => {
  const e = u(
    Telegram.WebApp.isClosingConfirmationEnabled
  );
  function n() {
    e.value = Telegram.WebApp.isClosingConfirmationEnabled;
  }
  function t(...o) {
    Telegram.WebApp.enableClosingConfirmation(...o), n();
  }
  function i(...o) {
    Telegram.WebApp.disableClosingConfirmation(...o), n();
  }
  return {
    isClosingConfirmationEnabled: e,
    updateStatus: n,
    enableClosingConfirmation: t,
    disableClosingConfirmation: i
  };
});
function ie() {
  const {
    isClosingConfirmationEnabled: e,
    enableClosingConfirmation: n,
    disableClosingConfirmation: t
  } = oe();
  return {
    isClosingConfirmationEnabled: d({
      get() {
        return e.value;
      },
      set(i) {
        i ? n() : t();
      }
    }),
    enableClosingConfirmation: n,
    disableClosingConfirmation: t
  };
}
function ae(e, n) {
  return new Promise((t, i) => {
    Telegram.WebApp.CloudStorage.setItem(e, n, (o, a) => {
      o && i(o), t(a);
    });
  });
}
function re(e) {
  return new Promise((n, t) => {
    Telegram.WebApp.CloudStorage.getItem(e, (i, o) => {
      i && t(i), n(o);
    });
  });
}
function se(e) {
  return new Promise((n, t) => {
    Telegram.WebApp.CloudStorage.getItems(e, (i, o) => {
      i && t(i), n(o);
    });
  });
}
function ce(e) {
  return new Promise((n, t) => {
    Telegram.WebApp.CloudStorage.removeItem(e, (i, o) => {
      i && t(i), n(o);
    });
  });
}
function le(e) {
  return new Promise((n, t) => {
    Telegram.WebApp.CloudStorage.removeItems(e, (i, o) => {
      i && t(i), n(o);
    });
  });
}
function ue() {
  return new Promise((e, n) => {
    Telegram.WebApp.CloudStorage.getKeys((t, i) => {
      t && n(t), e(i);
    });
  });
}
function ve() {
  return {
    setStorageItem: ae,
    getStorageItem: re,
    getStorageItems: se,
    removeStorageItem: ce,
    removeStorageItems: le,
    getStorageKeys: ue
  };
}
function We() {
  const { impactOccurred: e, notificationOccurred: n, selectionChanged: t } = Telegram.WebApp.HapticFeedback;
  return {
    impactOccurred: e,
    notificationOccurred: n,
    selectionChanged: t
  };
}
const pe = M(() => {
  const e = u(Telegram.WebApp.MainButton.text), n = u(Telegram.WebApp.MainButton.color), t = u(Telegram.WebApp.MainButton.textColor), i = u(Telegram.WebApp.MainButton.isVisible), o = u(Telegram.WebApp.MainButton.isActive), a = u(
    Telegram.WebApp.MainButton.isProgressVisible
  );
  function r() {
    e.value = Telegram.WebApp.MainButton.text, n.value = Telegram.WebApp.MainButton.color, t.value = Telegram.WebApp.MainButton.textColor, i.value = Telegram.WebApp.MainButton.isVisible, o.value = Telegram.WebApp.MainButton.isActive, a.value = Telegram.WebApp.MainButton.isProgressVisible;
  }
  function s(...p) {
    Telegram.WebApp.MainButton.setText(...p), r();
  }
  function l(...p) {
    Telegram.WebApp.MainButton.show(...p), r();
  }
  function c(...p) {
    Telegram.WebApp.MainButton.hide(...p), r();
  }
  function m(...p) {
    Telegram.WebApp.MainButton.enable(...p), r();
  }
  function f(...p) {
    Telegram.WebApp.MainButton.disable(...p), r();
  }
  function h(...p) {
    Telegram.WebApp.MainButton.showProgress(...p), r();
  }
  function g(...p) {
    Telegram.WebApp.MainButton.hideProgress(...p), r();
  }
  function W(...p) {
    Telegram.WebApp.MainButton.setParams(...p), r();
  }
  return {
    mainButtonText: e,
    mainButtonColor: n,
    mainButtonTextColor: t,
    isMainButtonVisible: i,
    isMainButtonActive: o,
    isMainButtonProgressVisible: a,
    setMainButtonText: s,
    showMainButton: l,
    hideMainButton: c,
    enableMainButton: m,
    disableMainButton: f,
    showMainButtonProgress: h,
    hideMainButtonProgress: g,
    setMainButtonParams: W
  };
});
function me() {
  const {
    mainButtonText: e,
    mainButtonColor: n,
    mainButtonTextColor: t,
    isMainButtonVisible: i,
    isMainButtonActive: o,
    isMainButtonProgressVisible: a,
    setMainButtonText: r,
    showMainButton: s,
    hideMainButton: l,
    enableMainButton: c,
    disableMainButton: m,
    showMainButtonProgress: f,
    hideMainButtonProgress: h,
    setMainButtonParams: g
  } = pe(), { onEvent: W } = S(), p = (b, w) => W("mainButtonClicked", b, w);
  return {
    mainButtonText: d({
      get() {
        return e.value;
      },
      set(b) {
        r(b);
      }
    }),
    mainButtonColor: d({
      get() {
        return n.value;
      },
      set(b) {
        g({
          color: b
        });
      }
    }),
    mainButtonTextColor: d({
      get() {
        return t.value;
      },
      set(b) {
        g({
          text_color: b
        });
      }
    }),
    isMainButtonVisible: d({
      get() {
        return i.value;
      },
      set(b) {
        b ? s() : l();
      }
    }),
    isMainButtonActive: d({
      get() {
        return o.value;
      },
      set(b) {
        b ? c() : m();
      }
    }),
    isMainButtonProgressVisible: d({
      get() {
        return a.value;
      },
      set(b) {
        b ? f() : h();
      }
    }),
    setMainButtonText: r,
    onMainButtonClicked: p,
    showMainButton: s,
    hideMainButton: l,
    enableMainButton: c,
    disableMainButton: m,
    showMainButtonProgress: f,
    hideMainButtonProgress: h,
    setMainButtonParams: g
  };
}
function Ce() {
  const { onEvent: e } = S(), n = (r, s) => e("invoiceClosed", r, s), { switchInlineQuery: t, openLink: i, openTelegramLink: o, openInvoice: a } = Telegram.WebApp;
  return {
    switchInlineQuery: t,
    openLink: i,
    openTelegramLink: o,
    openInvoice: a,
    onInvoiceClosed: n
  };
}
function E() {
  const { onEvent: e } = S(), n = (a, r) => e("popupClosed", a, r), { showPopup: t, showAlert: i, showConfirm: o } = Telegram.WebApp;
  return {
    showPopup: t,
    showAlert: i,
    showConfirm: o,
    onPopupClosed: n
  };
}
function ge() {
  const { onEvent: e } = S(), n = (a, r) => e("qrTextReceived", a, r), t = (a, r) => e("scanQrPopupClosed", a, r), { showScanQrPopup: i, closeScanQrPopup: o } = Telegram.WebApp;
  return {
    showScanQrPopup: i,
    closeScanQrPopup: o,
    onQrTextReceived: n,
    onScanQrPopupClosed: t
  };
}
function ke() {
  const { onEvent: e } = S(), n = (a, r) => e("writeAccessRequested", a, r), t = (a, r) => e("contactRequested", a, r), { requestContact: i, requestWriteAccess: o } = Telegram.WebApp;
  return {
    requestContact: i,
    onContactRequested: t,
    requestWriteAccess: o,
    onWriteAccessRequested: n
  };
}
function ye(e, n) {
  const t = n.serialize ?? JSON.stringify, i = u(""), o = (m) => {
    i.value = m, console.error(m);
  }, a = u(!1), { initData: r, initDataUnsafe: s, sendData: l, close: c } = S();
  return {
    error: i,
    isLoading: a,
    execute: () => {
      l(t(e)), setTimeout(
        () => o(
          "Telegram.WebApp.sendData is only available for custom keyboards."
        ),
        1e3
      );
    },
    executeHttp: async (m, f = {}) => {
      const h = f.closeAfter ?? !0;
      a.value = !0;
      try {
        const g = await fetch(m, {
          method: "POST",
          body: JSON.stringify({
            initData: r,
            initDataUnsafe: s,
            data: t(e)
          })
        });
        return g.ok || o(`${g.status} ${g.statusText}`), g.ok && h && c(), g;
      } catch (g) {
        o(String(g));
      } finally {
        a.value = !1;
      }
    }
  };
}
const de = M(() => {
  const e = u(Telegram.WebApp.SettingsButton.isVisible);
  function n(...i) {
    Telegram.WebApp.SettingsButton.show(...i), e.value = !0;
  }
  function t(...i) {
    Telegram.WebApp.SettingsButton.hide(...i), e.value = !1;
  }
  return {
    isSettingsButtonVisible: e,
    showSettingsButton: n,
    hideSettingsButton: t
  };
});
function be() {
  const { isSettingsButtonVisible: e, showSettingsButton: n, hideSettingsButton: t } = de(), { onEvent: i } = S(), o = (a, r) => i("settingsButtonClicked", a, r);
  return {
    isSettingsButtonVisible: d({
      get() {
        return e.value;
      },
      set(a) {
        a ? n() : t();
      }
    }),
    onSettingsButtonClicked: o,
    showSettingsButton: n,
    hideSettingsButton: t
  };
}
function Be(e, n) {
  Telegram.WebApp.shareToStory(e, n);
}
function we() {
  return {
    shareToStory: Be
  };
}
const fe = M(() => {
  const e = u(Telegram.WebApp.colorScheme), n = u(Telegram.WebApp.themeParams), t = u(Telegram.WebApp.headerColor), i = u(Telegram.WebApp.backgroundColor);
  function o() {
    e.value = Telegram.WebApp.colorScheme, n.value = {
      ...Telegram.WebApp.themeParams
    }, t.value = Telegram.WebApp.headerColor, i.value = Telegram.WebApp.backgroundColor;
  }
  function a(...s) {
    Telegram.WebApp.setHeaderColor(...s), o();
  }
  function r(...s) {
    Telegram.WebApp.setBackgroundColor(...s), o();
  }
  return {
    colorScheme: e,
    themeParams: n,
    headerColor: t,
    backgroundColor: i,
    updateState: o,
    setHeaderColor: a,
    setBackgroundColor: r
  };
});
function Me() {
  const {
    colorScheme: e,
    themeParams: n,
    headerColor: t,
    backgroundColor: i,
    updateState: o,
    setHeaderColor: a,
    setBackgroundColor: r
  } = fe(), { onEvent: s } = S(), l = (c, m) => s("themeChanged", c, m);
  return l(o), {
    colorScheme: A(e),
    themeParams: A(n),
    headerColor: d({
      get() {
        return t.value;
      },
      set(c) {
        a(c);
      }
    }),
    backgroundColor: d({
      get() {
        return i.value;
      },
      set(c) {
        r(c);
      }
    }),
    setHeaderColor: a,
    setBackgroundColor: r,
    onThemeChanged: l
  };
}
const Ae = M(() => {
  const e = u(Telegram.WebApp.isExpanded), n = u(Telegram.WebApp.viewportHeight), t = u(Telegram.WebApp.viewportStableHeight), i = u(Telegram.WebApp.isVerticalSwipesEnabled);
  function o() {
    e.value = Telegram.WebApp.isExpanded, n.value = Telegram.WebApp.viewportHeight, t.value = Telegram.WebApp.viewportStableHeight, i.value = Telegram.WebApp.isVerticalSwipesEnabled;
  }
  function a(...l) {
    Telegram.WebApp.expand(...l), o();
  }
  return {
    isExpanded: e,
    viewportHeight: n,
    viewportStableHeight: t,
    isVerticalSwipesEnabled: i,
    updateState: o,
    expand: a,
    enableVerticalSwipes: (...l) => {
      Telegram.WebApp.enableVerticalSwipes(...l), o();
    },
    disableVerticalSwipes: (...l) => {
      Telegram.WebApp.disableVerticalSwipes(...l), o();
    }
  };
});
function Se() {
  const {
    isExpanded: e,
    viewportHeight: n,
    viewportStableHeight: t,
    isVerticalSwipesEnabled: i,
    updateState: o,
    expand: a,
    enableVerticalSwipes: r,
    disableVerticalSwipes: s
  } = Ae(), { onEvent: l } = S(), c = (m, f) => l("viewportChanged", m, f);
  return c(o), {
    isExpanded: A(e),
    viewportHeight: A(n),
    viewportStableHeight: A(t),
    expand: a,
    onViewportChanged: c,
    isVerticalSwipesEnabled: d({
      get() {
        return i.value;
      },
      set(m) {
        m ? r() : s();
      }
    }),
    enableVerticalSwipes: r,
    disableVerticalSwipes: s
  };
}
const xe = {
  install(e) {
    e.component("TgAlert", R), e.component("TgBackButton", $), e.component("TgBiometricManager", D), e.component("TgClosingConfirmation", H), e.component("TgConfirm", U), e.component("TgExpandedViewport", L), e.component("TgMainButton", Q), e.component("TgPopup", z), e.component("TgScanQr", O), e.component("TgSettingsButton", j), e.component("TgShareWidget", N), e.component("TgPostWidget", G), e.component("TgLoginWidget", J), e.component("TgDiscussionWidget", F);
  }
};
export {
  R as Alert,
  $ as BackButton,
  D as BiometricManager,
  H as ClosingConfirmation,
  U as Confirm,
  F as DiscussionWidget,
  L as ExpandedViewport,
  J as LoginWidget,
  Q as MainButton,
  z as Popup,
  G as PostWidget,
  O as ScanQr,
  j as SettingsButton,
  N as ShareWidget,
  xe as VueTelegramPlugin,
  S as useWebApp,
  ee as useWebAppBackButton,
  ne as useWebAppBiometricManager,
  he as useWebAppClipboard,
  ie as useWebAppClosingConfirmation,
  ve as useWebAppCloudStorage,
  We as useWebAppHapticFeedback,
  me as useWebAppMainButton,
  Ce as useWebAppNavigation,
  E as useWebAppPopup,
  ge as useWebAppQrScanner,
  ke as useWebAppRequests,
  ye as useWebAppSendData,
  be as useWebAppSettingsButton,
  we as useWebAppShare,
  Me as useWebAppTheme,
  Se as useWebAppViewport
};
