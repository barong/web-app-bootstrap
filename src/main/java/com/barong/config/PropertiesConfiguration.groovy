package com.barong.config


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
public class PropertiesConfiguration
{
    // To resolve '${}' in @Value
    @Bean
    public static PropertySourcesPlaceholderConfigurer getProperties()
    {
        return new PropertySourcesPlaceholderConfigurer();
    }
}