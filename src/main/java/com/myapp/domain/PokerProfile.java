package com.myapp.domain;

import java.io.Serializable;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A PokerProfile.
 */
@Entity
@Table(name = "poker_profile")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PokerProfile implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ongame_id")
    private String ongameId;

    @Column(name = "nick_name")
    private String nickName;

    @Column(name = "reg_date")
    private String regDate;

    @Column(name = "last_date")
    private String lastDate;

    @Column(name = "photo_path")
    private String photoPath;

    @Column(name = "ip")
    private String ip;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOngameId() {
        return ongameId;
    }

    public PokerProfile ongameId(String ongameId) {
        this.ongameId = ongameId;
        return this;
    }

    public void setOngameId(String ongameId) {
        this.ongameId = ongameId;
    }

    public String getNickName() {
        return nickName;
    }

    public PokerProfile nickName(String nickName) {
        this.nickName = nickName;
        return this;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getRegDate() {
        return regDate;
    }

    public PokerProfile regDate(String regDate) {
        this.regDate = regDate;
        return this;
    }

    public void setRegDate(String regDate) {
        this.regDate = regDate;
    }

    public String getLastDate() {
        return lastDate;
    }

    public PokerProfile lastDate(String lastDate) {
        this.lastDate = lastDate;
        return this;
    }

    public void setLastDate(String lastDate) {
        this.lastDate = lastDate;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public PokerProfile photoPath(String photoPath) {
        this.photoPath = photoPath;
        return this;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public String getIp() {
        return ip;
    }

    public PokerProfile ip(String ip) {
        this.ip = ip;
        return this;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PokerProfile)) {
            return false;
        }
        return id != null && id.equals(((PokerProfile) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PokerProfile{" +
            "id=" + getId() +
            ", ongameId='" + getOngameId() + "'" +
            ", nickName='" + getNickName() + "'" +
            ", regDate='" + getRegDate() + "'" +
            ", lastDate='" + getLastDate() + "'" +
            ", photoPath='" + getPhotoPath() + "'" +
            ", ip='" + getIp() + "'" +
            "}";
    }
}
