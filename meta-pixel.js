(() => {
  "use strict";

  // Informe aqui somente o ID numérico do Pixel da Meta.
  const META_PIXEL_ID = "";
  const CONSENT_KEY = "gdc_meta_consent_v1";

  function hasValidPixelId() {
    return /^\d{5,20}$/.test(META_PIXEL_ID);
  }

  function readConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch {
      return null;
    }
  }

  function saveConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // O site continua funcionando quando o armazenamento está bloqueado.
    }
  }

  function initializeMetaPixel() {
    if (!hasValidPixelId() || typeof window.fbq === "function") return;

    /* Código-base oficial do Meta Pixel, carregado somente após consentimento. */
    ((f, b, e, v, n, t, s) => {
      if (f.fbq) return;
      n = f.fbq = function metaPixelQueue() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("consent", "grant");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }

  const banner = document.querySelector("#cookie-banner");
  const acceptButton = document.querySelector("#accept-cookies");
  const rejectButton = document.querySelector("#reject-cookies");
  const manageButton = document.querySelector("#manage-cookies");

  if (!hasValidPixelId() || !banner || !acceptButton || !rejectButton) return;

  function showBanner() {
    banner.hidden = false;
  }

  function hideBanner() {
    banner.hidden = true;
  }

  acceptButton.addEventListener("click", () => {
    saveConsent("granted");
    initializeMetaPixel();
    hideBanner();
  });

  rejectButton.addEventListener("click", () => {
    saveConsent("denied");
    if (typeof window.fbq === "function") window.fbq("consent", "revoke");
    hideBanner();
  });

  if (manageButton) {
    manageButton.addEventListener("click", showBanner);
  }

  const consent = readConsent();
  if (consent === "granted") {
    initializeMetaPixel();
  } else if (consent !== "denied") {
    showBanner();
  }
})();
