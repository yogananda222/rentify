package com.example.Rentify.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Rentify.Entity.Property;
import com.example.Rentify.Service.PropertyService;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @GetMapping("/all")
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyService.findAll();
        return ResponseEntity.ok(properties);
    }

    @GetMapping("/{propertyId}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long propertyId) {
        Optional<Property> property = propertyService.findById(propertyId);
        if (property.isPresent()) {
            return ResponseEntity.ok(property.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{addProperty}")
    public ResponseEntity<Property> createProperty(@RequestBody Property property) {
        propertyService.save(property);
        return ResponseEntity.status(HttpStatus.CREATED).body(property);
    }

    @PutMapping("/update/{propertyId}")
    public ResponseEntity<Property> updateProperty(@PathVariable Long propertyId, @RequestBody Property propertyDetails) {
        Optional<Property> existingPropertyOptional = propertyService.findById(propertyId);
        if (existingPropertyOptional.isPresent()) {
            Property existingProperty = existingPropertyOptional.get();
            existingProperty.setCity(propertyDetails.getCity());
            existingProperty.setArea(propertyDetails.getArea());
            existingProperty.setHouseImage(propertyDetails.getHouseImage());
            // Set other properties as needed
            propertyService.save(existingProperty);
            return ResponseEntity.ok(existingProperty);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{propertyId}")
    public ResponseEntity<Void> deleteProperty(@PathVariable Long propertyId) {
        Optional<Property> property = propertyService.findById(propertyId);
        if (property.isPresent()) {
            propertyService.deleteById(propertyId);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
