package com.barong.config


import java.nio.file.Paths

import groovy.util.logging.Slf4j
import org.apache.commons.configuration.PropertiesConfiguration
import org.apache.commons.configuration.reloading.FileChangedReloadingStrategy
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.PropertySource
import org.springframework.context.annotation.PropertySources
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer


@Configuration
@PropertySources([
    @PropertySource("classpath:config.properties"),
    @PropertySource(value = 'file:${appConfig}/config.properties', ignoreResourceNotFound = true)
])
@Slf4j
public class PropertiesConfig
{
    private static final String RELOADABLE_FILE = 'reloadable.properties';
    
    @Value('${appConfig}')
    private String appConfigPath;
    
    // To resolve '${}' in @Value
    @Bean
    public static PropertySourcesPlaceholderConfigurer getProperties()
    {
        return new PropertySourcesPlaceholderConfigurer();
    }

    @Bean
    public PropertiesConfiguration getReloadableProperties()
    {
        String path = Paths.get(appConfigPath, RELOADABLE_FILE).toString();
        log.debug("read reloadable props file: {} with full path: {}", RELOADABLE_FILE, path);
        PropertiesConfiguration config = new PropertiesConfiguration(path);
        config.setReloadingStrategy(new FileChangedReloadingStrategy());
        return config;
    }
}