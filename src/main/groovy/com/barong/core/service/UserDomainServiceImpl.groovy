package com.barong.core.service

import com.barong.core.domain.UserDomainModel
import com.barong.core.repository.UserRepository
import groovy.util.logging.Slf4j
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Slf4j
@Service
@Transactional
class UserDomainServiceImpl extends BaseServiceImpl<UserDomainModel, UserRepository> implements UserDomainService {
    
    @Override
    UserDomainModel findByUsername(String username) {
        return getRepository().findByUsernameIgnoringCase(username);
    }
}
