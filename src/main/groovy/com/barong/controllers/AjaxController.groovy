package com.barong.controllers

import com.barong.core.auth.ROLE
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.User
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/ajax")
public class AjaxController extends BaseController
{

    @RequestMapping(value = "/user-info", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    Map userDetails()
    {
        Map<String, Object> userInfo = new HashMap<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            User userDetails = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            userInfo.put("isLogged", true);
            userInfo.put("name", userDetails.getUsername());
        } else {
            userInfo.put("isLogged", false);
            userInfo.put("name", "Guest");
        }

        Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
        def perms = [];
        for (GrantedAuthority authority : (Collection<GrantedAuthority>)authorities) {
            String permission = authority.getAuthority();
            if (permission == ROLE.ADMIN) {
                userInfo.put("isAdmin", true);
            }
            if (permission == ROLE.USER) {
                userInfo.put("isUser", true);
            }
            if (permission.startsWith("ROLE_PERM_")) {
                perms.add(permission);
            }
        }
        userInfo.put("perms", perms);
        
        return userInfo;
    }
}
