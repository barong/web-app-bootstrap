package com.barong.core.domain

import groovy.transform.ToString
import org.hibernate.annotations.DynamicUpdate

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Table

@Entity
@Table(name = "users")
@DynamicUpdate
@ToString(includeNames = true, includeFields = true, includeSuper = true)
class UserDomainModel extends BaseDomainModel {
    private static final long serialVersionUID = 1L;

    @Column(name = "username", nullable = false)
    String username;

    @Column(name = "password", nullable = false)
    String password;

    @Column(name = "enabled", nullable = false)
    boolean enabled;
}
