package com.barong.core.utils

import org.springframework.ui.Model

import javax.servlet.http.HttpServletResponse

public class WebHelper
{
    public static void addCsrfTokenToModel(HttpServletResponse response, Model model)
    {
        // defined by CsrfResponseHeaderFilter
        String header_name = response.getHeader('X-CSRF-HEADER'); // for ajax request header (see common.js)
        String param_name = response.getHeader('X-CSRF-PARAM'); // for request param
        String token = response.getHeader('X-CSRF-TOKEN');

        model.addAttribute("_csrf_header", header_name != null ? header_name : 'empty');
        model.addAttribute("_csrf_param", param_name != null ? param_name : 'empty');
        model.addAttribute("_csrf_token", token != null ? token : 'empty');
    }
}
