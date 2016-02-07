package com.barong.core.service

import com.barong.core.domain.UserDomainModel


interface UserDomainService extends BaseService<UserDomainModel> {
    
    UserDomainModel findByUsername(String username)
}
