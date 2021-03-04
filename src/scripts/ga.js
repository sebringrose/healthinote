export default function ga () {
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

    let gaScript3 = document.createElement("script")
    gaScript3.text = `
        window.outboundLink = function(url) {
            gtag('event', 'outbound_link_' + url, {
            'event_category': 'outbound',
            'event_label': url,
            'transport_type': 'beacon',
            'event_callback': function(){document.location = url;}
            });
        }
    `

    document.body.append(gaScript1)
    document.body.append(gaScript2)
    document.body.append(gaScript3)
}