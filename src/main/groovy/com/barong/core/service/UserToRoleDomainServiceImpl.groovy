package com.barong.core.service

import com.barong.core.domain.UserToRoleDomainModel
import com.barong.core.repository.UserToRoleRepository
import groovy.util.logging.Slf4j
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Slf4j
@Service
@Transactional
class UserToRoleDomainServiceImpl extends BaseServiceImpl<UserToRoleDomainModel, UserToRoleRepository> implements UserToRoleDomainService {
}
