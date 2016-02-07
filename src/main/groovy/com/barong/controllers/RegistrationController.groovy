package com.barong.controllers

import com.barong.core.domain.UserDomainModel
import com.barong.core.domain.UserToRoleDomainModel
import com.barong.core.service.UserDomainService
import com.barong.core.service.UserToRoleDomainService
import com.google.common.base.Splitter
import groovy.util.logging.Slf4j
import org.apache.commons.lang3.StringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/registration")
@Slf4j
class RegistrationController extends BaseController
{
    @Autowired
    @Qualifier("passwordEncoder")
    PasswordEncoder passwordEncoder;
    
    @Autowired
    UserDomainService userDomainService
    
    @Autowired
    UserToRoleDomainService roleDomainService
    
    @RequestMapping("new")
    @ResponseBody
//    @Secured(ROLE.ADMIN)
    public String user(@RequestParam(value = "user", required = true) String user,
                       @RequestParam(value = "pass", required = true) String pass,
                       @RequestParam(value = "auth", required = false) String auth) {
        
        if (StringUtils.isBlank(user) || StringUtils.isBlank(pass)) {
            return "user or pass parameter can't be blank"
        }
        
        if (userDomainService.findByUsername(user)) {
            return "username ${user} already registered"
        }
        
        userDomainService.save(
                new UserDomainModel().with {
                    username = user
                    password = passwordEncoder.encode(pass)
                    enabled = true
                    it
                })
        
        if (StringUtils.isNoneBlank(auth)) {
            Splitter.on(",").omitEmptyStrings().trimResults().splitToList(auth).each {authority ->
                roleDomainService.save(
                        new UserToRoleDomainModel().with {
                            username = user
                            it.authority = authority
                            it
                        }
                )
            }
        }

        return "Success! Username: ${user}"
    }
}
