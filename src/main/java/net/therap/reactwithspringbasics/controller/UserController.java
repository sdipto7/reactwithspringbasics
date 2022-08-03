package net.therap.reactwithspringbasics.controller;

import net.therap.reactwithspringbasics.DTO.UserDto;
import net.therap.reactwithspringbasics.domain.User;
import net.therap.reactwithspringbasics.helper.UserHelper;
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

    @Autowired
    private UserHelper userHelper;

    @GetMapping(value = "/{id}")
    public UserDto getUserById(@PathVariable(name = "id") long id) {
        User user = userService.findById(id);
        return UserDtoMapper.convertUserToUserDto(user);
    }

    @GetMapping(value = "/user-list")
    public List<UserDto> showUserList() {

        return userService.findAll()
                .stream()
                .map(user -> UserDtoMapper.convertUserToUserDto(user))
                .collect(Collectors.toList());
    }

    @PostMapping(value = "/save-user")
    public void saveUser(@RequestBody UserDto userDto) {
        User user = UserDtoMapper.convertUserDtoToUser(userDto);
        userService.saveOrUpdate(user);
    }

    @PutMapping(value = "/update-user")
    public void updateUser(@RequestBody UserDto userDto) {
        System.out.println(userDto.getId());
        userService.saveOrUpdate(userHelper.getUpdatedUser(userDto));
    }

    @DeleteMapping(value = "/delete-user/{id}")
    public void deleteUser(@PathVariable(name = "id") long id) {
        userService.delete(userService.findById(id));
    }
}
