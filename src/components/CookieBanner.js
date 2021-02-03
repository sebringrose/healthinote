import React, { useEffect } from "react"
import CookieConsent from "react-cookie-consent"

const BannerContent = ({ setCookieOverlay }) => {
  // this is a cheaky way to setCookieOverlay true only if banner is display without editing the actual banner component
  // we need this to disable page scroll when overlay shows
  useEffect(() => {
    setCookieOverlay(true)
  }, [setCookieOverlay])

  return (
    <div style={{ maxWidth: "600px" }}>
      <p style={{ fontSize: "1rem" }}>
        Do you accept the use of cookies on this site?
      </p>
      <p style={{ fontSize: "0.8rem" }}>
        We use cookies for anonymous analytics purposes only. Detailed
        information regarding the GDPR and ePrivacy Directive compliant storage
        and usage of personal data can be found in our{" "}
        <a href="https://cognitant.com/privacy">Privacy Policy</a>. Subject to
        change.
      </p>
      <p style={{ fontSize: "0.6rem" }}>
        You may decline to accept the use of cookies and maintain unrestricted
        access to this website, however doing so may restrict your access to
        more advanced features and integrations into the Healthinote app
        platform.
      </p>
    </div>
  )
}

const CookieBanner = ({ setCookieOverlay }) => (
  <CookieConsent
    overlay={true}
    location="bottom"
    buttonText="Accept"
    cookieName="CookieConsent"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "black", fontSize: "1rem", padding: "0.6rem 1rem" }}
    enableDeclineButton
    declineButtonText="Decline"
    declineButtonStyle={{ background: "none", textDecoration: "underline" }}
    buttonWrapperClasses="cookie-buttons"
    onAccept={() => {
      // Global site tag (gtag.js) - Google Analytics
      let id = "###siteId###"

      let gaScript1 = document.createElement("script")
      gaScript1.async = ""
      gaScript1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`

      let gaScript2 = document.createElement("script")
      gaScript2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${id}');
        `

      document.body.append(gaScript1)
      document.body.append(gaScript2)
      setCookieOverlay(false)
    }}
    onDecline={() => setCookieOverlay(false)}
  >
    <BannerContent setCookieOverlay={setCookieOverlay} />
  </CookieConsent>
)

export default CookieBanner
