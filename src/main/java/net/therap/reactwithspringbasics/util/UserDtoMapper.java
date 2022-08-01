package net.therap.reactwithspringbasics.util;

import net.therap.reactwithspringbasics.DTO.UserDto;
import net.therap.reactwithspringbasics.domain.Designation;
import net.therap.reactwithspringbasics.domain.User;

import java.math.BigDecimal;

/**
 * @author rumi.dipto
 * @since 7/31/22
 */
public class UserDtoMapper {

    public static UserDto convertUserToUserDto(User user) {
        return new UserDto(user.getFirstName(),
                user.getLastName(),
                user.getUsername());
    }

    public static User convertUserDtoToUser(UserDto userDto) {
        return new User(userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getUsername(),
                "pass",
                Designation.TEAM_LEAD,
                new BigDecimal(20000.50));
    }
}
