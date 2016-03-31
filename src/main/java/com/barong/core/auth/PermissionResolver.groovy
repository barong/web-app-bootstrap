package com.barong.core.auth


import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority


public class PermissionResolver
{
    /**
     * Map principal role to granted permissions
     * Permissions can be set as hierarchical. @see com.barong.config.WebSecurityConfig#getPermissionHierarchy()
     */
    private static final Map<String, List<String>> config = new HashMap<>();
    static {
        config.put(ROLE.ADMIN, Arrays.asList(PERM.CREATE, PERM.DELETE, PERM.UPDATE));
//        config.put(ROLE.USER, Arrays.asList(PERM.READ)); // default PERM.READ - see com.barong.config.WebSecurityConfig.getPermissionMapper
    }

    public static Set<GrantedAuthority> getPermissions(GrantedAuthority authority)
    {
        if (authority == null || authority.getAuthority() == null)
        {
            return Collections.emptySet();
        }

        String role = authority.getAuthority().toUpperCase();
        List<String> cfgPermissions = config.get(role);
        if (cfgPermissions != null && !cfgPermissions.isEmpty())
        {
            Set<GrantedAuthority> permissions = new HashSet<>(cfgPermissions.size());
            for (String perm : cfgPermissions)
            {
                permissions.add(new SimpleGrantedAuthority(perm));
            }

            return permissions;
        }

        return Collections.emptySet();
    }
}
