package net.therap.reactwithspringbasics.util;

import net.therap.reactwithspringbasics.DTO.UserDto;
import net.therap.reactwithspringbasics.domain.Designation;
import net.therap.reactwithspringbasics.domain.User;

import java.math.BigDecimal;

import static java.util.Objects.isNull;

/**
 * @author rumi.dipto
 * @since 7/31/22
 */
public class UserDtoMapper {

    public static UserDto convertUserToUserDto(User user) {
        return new UserDto(user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getUsername());
    }

    public static User convertUserDtoToUser(UserDto userDto) {
        User user = new User(userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getUsername(),
                "pass",
                Designation.TEAM_LEAD,
                new BigDecimal(20000.50));

        if (isNull(userDto.getId())) {
            user.setId(0);
        } else {
            user.setId(userDto.getId());
        }

        return user;
    }
}
