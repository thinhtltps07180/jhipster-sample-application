package com.myapp.web.rest;

import com.myapp.domain.PokerProfile;
import com.myapp.repository.PokerProfileRepository;
import com.myapp.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for managing {@link com.myapp.domain.PokerProfile}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class PokerProfileResource {
    private final Logger log = LoggerFactory.getLogger(PokerProfileResource.class);

    private static final String ENTITY_NAME = "pokerProfile";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PokerProfileRepository pokerProfileRepository;

    public PokerProfileResource(PokerProfileRepository pokerProfileRepository) {
        this.pokerProfileRepository = pokerProfileRepository;
    }

    /**
     * {@code POST  /poker-profiles} : Create a new pokerProfile.
     *
     * @param pokerProfile the pokerProfile to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new pokerProfile, or with status {@code 400 (Bad Request)} if the pokerProfile has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/poker-profiles")
    public ResponseEntity<PokerProfile> createPokerProfile(@RequestBody PokerProfile pokerProfile) throws URISyntaxException {
        log.debug("REST request to save PokerProfile : {}", pokerProfile);
        if (pokerProfile.getId() != null) {
            throw new BadRequestAlertException("A new pokerProfile cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PokerProfile result = pokerProfileRepository.save(pokerProfile);
        return ResponseEntity
            .created(new URI("/api/poker-profiles/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /poker-profiles} : Updates an existing pokerProfile.
     *
     * @param pokerProfile the pokerProfile to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated pokerProfile,
     * or with status {@code 400 (Bad Request)} if the pokerProfile is not valid,
     * or with status {@code 500 (Internal Server Error)} if the pokerProfile couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/poker-profiles")
    public ResponseEntity<PokerProfile> updatePokerProfile(@RequestBody PokerProfile pokerProfile) throws URISyntaxException {
        log.debug("REST request to update PokerProfile : {}", pokerProfile);
        if (pokerProfile.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        PokerProfile result = pokerProfileRepository.save(pokerProfile);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, pokerProfile.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /poker-profiles} : get all the pokerProfiles.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of pokerProfiles in body.
     */
    @GetMapping("/poker-profiles")
    public List<PokerProfile> getAllPokerProfiles() {
        log.debug("REST request to get all PokerProfiles");
        return pokerProfileRepository.findAll();
    }

    /**
     * {@code GET  /poker-profiles/:id} : get the "id" pokerProfile.
     *
     * @param id the id of the pokerProfile to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the pokerProfile, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/poker-profiles/{id}")
    public ResponseEntity<PokerProfile> getPokerProfile(@PathVariable Long id) {
        log.debug("REST request to get PokerProfile : {}", id);
        Optional<PokerProfile> pokerProfile = pokerProfileRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(pokerProfile);
    }

    /**
     * {@code DELETE  /poker-profiles/:id} : delete the "id" pokerProfile.
     *
     * @param id the id of the pokerProfile to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/poker-profiles/{id}")
    public ResponseEntity<Void> deletePokerProfile(@PathVariable Long id) {
        log.debug("REST request to delete PokerProfile : {}", id);
        pokerProfileRepository.deleteById(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
