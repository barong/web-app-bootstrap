package com.barong.controllers
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody


@Controller
public class StatusController extends BaseController
{
    @RequestMapping(value = "/status", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Map status()
    {
        Map result = new HashMap();
        result.put("status", "OK");

        return result;
    }
}
