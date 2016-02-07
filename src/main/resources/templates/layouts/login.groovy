package templates.layouts


yieldUnescaped '<!DOCTYPE html>'
html {
    head {
        title(pageTitle)
        meta(charset:'utf-8')
        meta(name: 'viewport', content: 'width=device-width, initial-scale=1')
        meta('http-equiv': 'X-UA-Compatible', content: 'IE=edge')
        meta(name: '_csrf_header', content: "${_csrf_header_content}")
        meta(name: '_csrf_token', content:"${_csrf_token_content}")
        link (href:"favicon.ico", rel:"icon", type:"image/x-icon")
        link(rel: 'stylesheet', href: '/css/app-back.css')
        link(href:'https://fonts.googleapis.com/css?family=Oranienbaum&subset=latin,cyrillic', rel:'stylesheet', type:'text/css')
    }
    body {
        
        div(id: 'header') {
            div(class: 'pure-g') {
                div(class: 'pure-u-1') {
                    div(class: 'site-name') {
                        a(class: 'brand', href: '/') {
                            yield ''
                        }
                    }
                }
            }
        }

        mainBody()
    }
}
