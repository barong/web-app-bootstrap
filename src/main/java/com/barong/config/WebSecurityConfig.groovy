package com.barong.config

import com.barong.core.auth.CsrfResponseHeaderFilter
import com.barong.core.auth.PERM
import com.barong.core.auth.PermissionMapper
import com.barong.core.auth.ROLE
import groovy.transform.CompileDynamic
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.access.hierarchicalroles.NullRoleHierarchy
import org.springframework.security.authentication.AuthenticationProvider
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.csrf.CsrfFilter
import org.springframework.security.web.util.matcher.AntPathRequestMatcher

import javax.sql.DataSource


@Configuration
@EnableWebMvcSecurity
@CompileDynamic
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter
{
    @Autowired
    private DataSource dataSource;

    @Override
    void configure(WebSecurity web) throws Exception
    {
        web.ignoring().antMatchers(
                "/assets/**",
                "/css/**",
                "/js/**",
                "/img/**",
                "/fonts/**",
                "/favicon.ico"
        );
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http
                .addFilterAfter(new CsrfResponseHeaderFilter(), CsrfFilter.class)
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/favicon.ico").permitAll()
                .antMatchers("/ajax/user-info").permitAll()
                .antMatchers("/ajax/admin-info").permitAll()
                .antMatchers("/status/**").permitAll()
                .antMatchers("/registration/**").permitAll()
                .antMatchers("/admin/**").access("hasRole('${ROLE.ADMIN}')")
                .anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/login").failureUrl("/login?error")
                .defaultSuccessUrl("/").permitAll()
                .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/login")

        /*
         *      for public module set stateless 
         *  http.sessionManagement()
         *      .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
         *      
         *      Use HTTPs for ALL requests
         *  http.requiresChannel().anyRequest().requiresSecure();
         *  http.portMapper().http(httpPort).mapsTo(httpsPort);
        */

    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.authenticationProvider(authenticationProvider());
    }


    @Bean
    public AuthenticationProvider authenticationProvider()
    {
        AuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(getUserDetailsService())
        authenticationProvider.setPasswordEncoder(getPasswordEncoder())
        authenticationProvider.setAuthoritiesMapper(getPermissionMapper())
        return authenticationProvider;
    }
    
    @Bean(name = "userDetailsService")
    public UserDetailsService getUserDetailsService()
    {
        UserDetailsService userDetailsService = new JdbcDaoImpl();
        userDetailsService.setDataSource(dataSource)
        return userDetailsService;
    }
    
    @Bean(name = "passwordEncoder")
    public PasswordEncoder getPasswordEncoder()
    {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        return passwordEncoder;
    }

    @Bean
    public GrantedAuthoritiesMapper getPermissionMapper()
    {
        GrantedAuthoritiesMapper grantedAuthoritiesMapper = new PermissionMapper(new NullRoleHierarchy());
        grantedAuthoritiesMapper.setDefaultPermission(PERM.READ);
        grantedAuthoritiesMapper.afterPropertiesSet();
        return grantedAuthoritiesMapper;
    }

}