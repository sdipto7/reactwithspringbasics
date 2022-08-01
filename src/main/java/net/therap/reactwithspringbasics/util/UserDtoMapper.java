package net.therap.reactwithspringbasics.util;

import net.therap.reactwithspringbasics.DTO.UserDto;
import net.therap.reactwithspringbasics.domain.User;

/**
 * @author rumi.dipto
 * @since 7/31/22
 */
public class UserDtoMapper {

    public static UserDto convertToUserDto(User user) {
        return new UserDto(user.getFirstName(),
                user.getLastName(),
                user.getUsername());
    }
}
