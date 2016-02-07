package com.barong.controllers

import com.barong.core.utils.WebHelper
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Controller
class SiteController extends BaseController
{

    @RequestMapping("/")
    public String welcome(Model model, HttpServletRequest request, HttpServletResponse response)
    {
        WebHelper.addCsrfTokenToModel(response, model); // csrf token for meta tag 
        
        return 'views/home-front';
    }

    @RequestMapping("/admin")
    public String admin(Model model, HttpServletRequest request, HttpServletResponse response)
    {
        WebHelper.addCsrfTokenToModel(response, model); // csrf token for meta tag 

        return 'views/home-back';
    }

}
