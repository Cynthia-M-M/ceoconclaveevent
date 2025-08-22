package co.ke.ceoconclave.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class StaticResourceConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String base = Paths.get("C:/Cynthia/www.ceoconclave.co.ke").toUri().toString();
        registry.addResourceHandler("/css/**")
                .addResourceLocations(base + "css/");
        registry.addResourceHandler("/js/**")
                .addResourceLocations(base + "js/");
        registry.addResourceHandler("/images/**")
                .addResourceLocations(base + "images/");
        registry.addResourceHandler("/Docs/**")
                .addResourceLocations(base + "images/Docs/");
        registry.addResourceHandler("/favicon.ico")
                .addResourceLocations(base + "images/favicon/AAMECC ICON.png");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
    }
}
