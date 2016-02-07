package com.barong.core.service

import com.barong.core.domain.BaseDomainModel
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort


interface BaseService<T extends BaseDomainModel>
{
    boolean save(T entity);

    boolean delete(T entity);

    T findOne(Integer id);

    List<T> findAll();

    List<T> findAll(Sort sort);

    Page<T> findAll(Pageable pageable);
}