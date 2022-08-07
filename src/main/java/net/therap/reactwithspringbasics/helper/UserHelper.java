package net.therap.reactwithspringbasics.helper;

import net.therap.reactwithspringbasics.DTO.UserDto;
import net.therap.reactwithspringbasics.domain.User;
import net.therap.reactwithspringbasics.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author rumi.dipto
 * @since 8/3/22
 */
@Component
public class UserHelper {

    @Autowired
    private UserService userService;

    public User getUpdatedUser(UserDto userDto) {
        User user = userService.findById(userDto.getId());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setUsername(userDto.getUsername());

        return user;
    }
}
