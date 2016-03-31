package com.barong.core.auth


public class PERM
{
    public static final String CREATE = "ROLE_PERM_CREATE";
    public static final String READ = "ROLE_PERM_READ"; // default perm for all auth users. sets by @see com.barong.config.WebSecurityConfig.getPermissionMapper
    public static final String UPDATE = "ROLE_PERM_UPDATE";
    public static final String DELETE = "ROLE_PERM_DELETE";
}
