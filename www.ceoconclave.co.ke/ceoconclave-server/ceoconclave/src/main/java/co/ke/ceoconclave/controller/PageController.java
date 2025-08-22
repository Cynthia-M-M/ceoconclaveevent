package co.ke.ceoconclave.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class PageController {

    @GetMapping(value = "/index.html", produces = MediaType.TEXT_HTML_VALUE)
    public ResponseEntity<Resource> index() throws MalformedURLException {
        Path path = Paths.get("C:/Cynthia/www.ceoconclave.co.ke/index.html");
        Resource resource = new UrlResource(path.toUri());
        return ResponseEntity.ok().contentType(MediaType.TEXT_HTML).body(resource);
    }
}
