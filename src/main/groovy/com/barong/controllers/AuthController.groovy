package com.barong.controllers


import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestParam

import com.barong.core.utils.WebHelper


@Controller
public class AuthController extends BaseController
{
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(Model model, HttpServletRequest request, HttpServletResponse response)
    {
        // set header to check in jquery ajaxComplete if session invalidated (see common.js)
        response.setHeader("LoginPage", "/login");
        
        WebHelper.addCsrfTokenToModel(response, model);

        return "views/login"
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public void doLogin(@RequestParam(value = "username", required = true) String username,
                        @RequestParam(value = "password", required = true) String password,
                        Model model,
                        HttpServletRequest request)
    {
        // spring processing login
        // do nothing
    }
}
