package net.therap.reactwithspringbasics.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author rumi.dipto
 * @since 7/31/22
 */
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDto {

    private String firstName;

    private String lastName;

    private String username;
}
