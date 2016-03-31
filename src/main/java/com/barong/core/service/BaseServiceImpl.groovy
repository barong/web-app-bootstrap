package com.barong.core.service

import com.barong.core.domain.BaseDomainModel
import com.barong.core.repository.BaseRepository
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.transaction.annotation.Transactional
import org.springframework.util.Assert

@Slf4j
@Transactional
public class BaseServiceImpl<T extends BaseDomainModel, R extends BaseRepository<T>> implements BaseService<T>
{
    @Autowired
    private R repository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    protected R getRepository()
    {
        return repository;
    }

    protected JdbcTemplate getJdbcTemplate()
    {
        return jdbcTemplate;
    }

    protected NamedParameterJdbcTemplate getNamedParameterJdbcTemplate()
    {
        return new NamedParameterJdbcTemplate(jdbcTemplate);
    }

    @Override
    boolean save(T entity)
    {
        log.trace('save( {} )', entity);
        try
        {
            Assert.notNull(entity, 'entity is null');
            getRepository().save(entity);
        } catch (Throwable e)
        {
            log.error("Failed to save {}", entity, e);
            return false;
        }
        return true
    }

    @Override
    boolean delete(T entity)
    {
        log.trace('delete( {} )', entity);
        try
        {
            Assert.notNull(entity, 'entity is null');
            getRepository().delete(entity.getId());
        } catch (Throwable e)
        {
            log.error("Failed to delete {}", entity, e);
            return false;
        }
        return true;
    }

    @Override
    T findOne(Integer id)
    {
        log.trace('findOne( {} )', id);
        Assert.notNull(id, 'id is null');
        return repository.findOne(id);
    }

    @Override
    List<T> findAll()
    {
        log.trace('findAll()');
        return repository.findAll() as List<T>;
    }

    @Override
    List<T> findAll(Sort sort)
    {
        log.trace('findAll( {} )', sort);
        return repository.findAll(sort) as List<T>;
    }

    @Override
    Page<T> findAll(Pageable pageable)
    {
        log.trace('findAll( {} )', pageable);
        return repository.findAll(pageable);
    }
}