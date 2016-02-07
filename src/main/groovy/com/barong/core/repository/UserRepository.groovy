package com.barong.core.repository

import com.barong.core.domain.UserDomainModel

interface UserRepository extends BaseRepository<UserDomainModel> {

    UserDomainModel findByUsernameIgnoringCase(String username)
}
