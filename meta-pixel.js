(() => {
  "use strict";

  const META_PIXEL_ID = "1584530586731768";
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

  function createFallbackBanner() {
    const scriptUrl = document.currentScript?.src || window.location.href;
    const privacyUrl = new URL("privacidade.html", scriptUrl).href;
    const style = document.createElement("style");
    style.textContent = `
      #gdc-meta-consent{position:fixed;z-index:10000;left:50%;bottom:14px;transform:translateX(-50%);width:min(calc(100% - 24px),920px);display:flex;align-items:center;justify-content:space-between;gap:22px;padding:19px 20px;border:1px solid rgba(24,214,255,.42);border-radius:18px;background:rgba(3,11,20,.97);box-shadow:0 22px 70px rgba(0,0,0,.58);color:#f7fbff;font-family:Inter,system-ui,sans-serif}
      #gdc-meta-consent[hidden]{display:none}#gdc-meta-consent strong{display:block;margin-bottom:5px}#gdc-meta-consent p{margin:0 0 6px;color:#9eb4c7;font-size:.77rem;line-height:1.5}#gdc-meta-consent a{color:#8cecff;font-size:.7rem;font-weight:800}#gdc-meta-consent .gdc-consent-actions{display:flex;flex:0 0 auto;gap:8px}#gdc-meta-consent button{min-height:42px;padding:0 16px;border-radius:999px;border:1px solid rgba(24,214,255,.3);cursor:pointer;font-weight:850}#gdc-meta-consent .gdc-reject{background:rgba(24,214,255,.07);color:#f7fbff}#gdc-meta-consent .gdc-accept{background:linear-gradient(95deg,#18d6ff,#b9ff39);color:#03101a}
      @media(max-width:650px){#gdc-meta-consent{align-items:stretch;flex-direction:column;gap:14px}#gdc-meta-consent .gdc-consent-actions{display:grid;grid-template-columns:1fr 1fr}#gdc-meta-consent button{padding-inline:10px}}
    `;
    document.head.appendChild(style);

    const fallback = document.createElement("aside");
    fallback.id = "gdc-meta-consent";
    fallback.setAttribute("aria-labelledby", "gdc-consent-title");
    fallback.innerHTML = `
      <div><strong id="gdc-consent-title">Privacidade e medição</strong><p>Usamos cookies opcionais da Meta para medir visitas e melhorar campanhas. O teste funciona normalmente se você recusar.</p><a href="${privacyUrl}">Consultar política de privacidade</a></div>
      <div class="gdc-consent-actions"><button class="gdc-reject" type="button" id="reject-cookies">Recusar</button><button class="gdc-accept" type="button" id="accept-cookies">Aceitar medição</button></div>
    `;
    document.body.appendChild(fallback);
    return fallback;
  }

  if (!hasValidPixelId()) return;

  const consent = readConsent();
  if (consent === "granted") initializeMetaPixel();

  let banner = document.querySelector("#cookie-banner");
  if (!banner && consent !== "granted" && consent !== "denied") banner = createFallbackBanner();

  const acceptButton = document.querySelector("#accept-cookies");
  const rejectButton = document.querySelector("#reject-cookies");
  const manageButton = document.querySelector("#manage-cookies");

  if (!banner || !acceptButton || !rejectButton) return;

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

  if (consent !== "granted" && consent !== "denied") {
    showBanner();
  }
})();
