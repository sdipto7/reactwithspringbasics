package net.therap.reactwithspringbasics.controller;

import net.therap.reactwithspringbasics.DTO.UserDto;
import net.therap.reactwithspringbasics.domain.User;
import net.therap.reactwithspringbasics.service.UserService;
import net.therap.reactwithspringbasics.util.UserDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author rumi.dipto
 * @since 7/28/22
 */
@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/user-list")
    public List<UserDto> showUserList() {

        return userService.findAll()
                .stream()
                .map(user -> UserDtoMapper.convertToUserDto(user))
                .collect(Collectors.toList());
    }

    @PostMapping(value = "/save-user")
    public void saveUser(@RequestBody User user) {
        userService.saveOrUpdate(user);
    }
}
