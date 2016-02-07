package com.barong.core.domain

import groovy.transform.ToString

import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.MappedSuperclass

@ToString(includeNames = true, includeFields = true)
@MappedSuperclass
abstract class BaseDomainModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    Integer id;
}