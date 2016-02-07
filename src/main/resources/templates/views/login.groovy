package templates.views


layout 'layouts/login.groovy',
        pageTitle: 'Login',
        mainBody: contents {
            div(class: 'login-wrapper') {
                form(class: 'pure-form', name: 'form', method: 'post', url: '/login') {
                    fieldset() {
                        legend {
                            div(class: 'legend-inner') {
                                i(class: 'fa fa-lock') { yieldUnescaped '&nbsp;&nbsp;' }
                                yield 'Sign In'
                            }
                        }
                        div(class: 'form-group') {
                            input(class: 'form-control', type: "text", name: "username", value: "", placeholder: "USERNAME")
                        }
                        div(class: 'form-group') {
                            input(class: 'form-control', type: "password", name: "password", value: "", placeholder: "PASSWORD")
                        }
                        div(class: 'form-group') {
                            input(class: 'form-submit-btn', type: "submit", id: "submit", value: "submit")
                            input(type: "hidden", name: "${_csrf_param}", value: "${_csrf_token}")
                        }
                    }
                }
            }
        }
