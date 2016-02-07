package com.barong.core.repository

import com.barong.core.domain.BaseDomainModel
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.NoRepositoryBean
import org.springframework.data.repository.PagingAndSortingRepository

@NoRepositoryBean
interface BaseRepository<T extends BaseDomainModel> extends PagingAndSortingRepository<T, Integer>, JpaSpecificationExecutor<T> {
}