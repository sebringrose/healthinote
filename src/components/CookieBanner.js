import React, { useEffect } from "react"
import CookieConsent from "react-cookie-consent"
import ga from "../scripts/ga" 

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
        <a onClick={() => { window.outboundLink("https://cognitant.com/privacy"); return false }} href="https://cognitant.com/privacy">Privacy Policy</a>. Subject to
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
      ga()
      setCookieOverlay(false)
    }}
    onDecline={() => setCookieOverlay(false)}
  >
    <BannerContent setCookieOverlay={setCookieOverlay} />
  </CookieConsent>
)

export default CookieBanner
