package net.therap.reactwithspringbasics.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

/**
 * @author rumi.dipto
 * @since 7/28/22
 */
@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User extends Persistent {

    private static final long serialVersionUID = 1L;

    public User() {
    }

    @Column(name = "first_name")
    @Size(min = 2, max = 100)
    @NotNull
    private String firstName;

    @Column(name = "last_name")
    @Size(min = 2, max = 100)
    @NotNull
    private String lastName;

    @Size(min = 2, max = 100)
    @NotNull
    private String username;

    @Size(min = 5, max = 100)
    @NotNull
    private String password;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Designation designation;

    @DecimalMin(value = "5000.00")
    @Digits(integer = 10, fraction = 2)
    @NotNull
    private BigDecimal salary;

    public String getFullName() {
        return this.firstName + " " + this.lastName;
    }
}