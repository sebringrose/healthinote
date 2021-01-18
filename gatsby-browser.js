/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/style.css'

// Global site tag (gtag.js) - Google Analytics
let id = (window.location.href.indexOf('//preview.') !== -1 || window.location.href.indexOf('localhost') !== -1) ? 'UA-116709596-1' : 'UA-116709596-2'

let gaScript1 = document.createElement("script")
gaScript1.async = ""
gaScript1.src = `https://www.googletagmanager.com/gtag/js?id='${id}'`

let gaScript2 = document.createElement('script');
gaScript2.text = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${id}');
`;

document.body.append(gaScript1)
document.body.append(gaScript2)

