package templates.views

layout 'layouts/back.groovy',
        pageTitle: '',
        _csrf_header_content: "${_csrf_header}",
        _csrf_token_content: "${_csrf_token}",
        
        mainBody: contents {
            div(id: 'layout') {
                
                div(class: 'pure-g') {
                    div(class: 'pure-u-1 pure-u-sm-1-1 pure-u-md-6-24') {
                        div(id: 'menu_wrapper') {
                            div(id: 'menu') {}
                        }
                    }
                    div(class: 'pure-u-1 pure-u-sm-1-1 pure-u-md-18-24') {
                        div(id: 'content_wrapper') {
                            div (class: 'pure-g') {
                                div(class: 'pure-u-1-1') {
                                    div(id: 'top_panel') {}
                                }
                            }
                            div (class: 'pure-g') {
                                div(class: 'pure-u-1-1') {
                                    div(id: 'content') {}
                                }
                            }
                        }
                    }
                }
            }
        }
