package com.barong.core.auth

import org.apache.commons.lang3.StringUtils
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.security.access.hierarchicalroles.RoleHierarchy
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper
import org.springframework.util.Assert

public class PermissionMapper implements GrantedAuthoritiesMapper
{
    private static final Logger logger = LoggerFactory.getLogger(PermissionMapper.class);
    
    private final RoleHierarchy roleHierarchy;
    private String defaultPermission;
    private String prefixAppender = StringUtils.EMPTY;


    public PermissionMapper(RoleHierarchy roleHierarchy)
    {
        this.roleHierarchy = roleHierarchy;
    }


    public void afterPropertiesSet() throws Exception {
        Assert.isTrue((roleHierarchy != null), "roleHierarchy can't be null");
        Assert.isTrue((prefixAppender != null), "prefixAppender can't be null");
    }

    /**
     * Creates a mapping of the supplied authorities based on the case-conversion and prefixAppender settings.
     * The mapping will be one-to-one unless duplicates are produced during the conversion. If a default
     * authority has been set, this will also be assigned to each mapping.
     *
     * @param authorities the original authorities
     *
     * @return the converted set of authorities
     */
    @Override
    public Collection<? extends GrantedAuthority> mapAuthorities(Collection<? extends GrantedAuthority> authorities) {

        Collection<? extends GrantedAuthority> mapped = new HashSet<GrantedAuthority>();

        for (GrantedAuthority authority : authorities) {
            mapped.add(mapAuthority(authority.getAuthority().toUpperCase()));
            mapped.addAll(PermissionResolver.getPermissions(authority));
        }
        if (defaultPermission != null) {
            mapped.add(new SimpleGrantedAuthority(defaultPermission.toUpperCase()));
        }

        return getReachableGrantedAuthorities(mapped);
    }

    private Collection<? extends GrantedAuthority> getReachableGrantedAuthorities(Collection<? extends GrantedAuthority> authorities)
    {
        return roleHierarchy.getReachableGrantedAuthorities(authorities);
    }

    private GrantedAuthority mapAuthority(String name) {
        if (prefixAppender.length() > 0 && !name.startsWith(prefixAppender)) {
            name = prefixAppender + name;
        }

        return new SimpleGrantedAuthority(name);
    }


    /**
     * Sets a default authority to be assigned to all users
     *
     * @param authority the name of the authority to be assigned to all users.
     */
    public void setDefaultPermission(String permission) {
        Assert.notNull(permission, "The authority can't be null");
        this.defaultPermission = permission;
    }
}

