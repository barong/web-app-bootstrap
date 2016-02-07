package templates.views

layout 'layouts/front.groovy',
        pageTitle: '',
        _csrf_header_content: "${_csrf_header}",
        _csrf_token_content: "${_csrf_token}",
        
        mainBody: contents {
            div(id: 'layout') {
                div(id: 'content_wrapper') {
                    div (class: 'pure-g') {
                        div(class: 'pure-u-1-1') {
                            div(id: 'content') {}
                        }
                    }
                }
            }
        }
