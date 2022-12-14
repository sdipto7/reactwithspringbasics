package net.therap.reactwithspringbasics.DTO;

import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author rumi.dipto
 * @since 7/31/22
 */
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class UserDto {

    private long id;

    @NotNull
    @Size(min = 2, max = 10, message = "First Name must be 2 and 10 length")
    private String firstName;

    @NotNull
    @Size(min = 2, max = 10, message = "Last name must be 2 and 10 length")
    private String lastName;

    @NotNull
    @Size(min = 2, max = 10, message = "Username must be 2 and 10 length")
    private String username;
}
