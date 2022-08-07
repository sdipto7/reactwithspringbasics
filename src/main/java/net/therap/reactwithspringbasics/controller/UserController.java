package net.therap.reactwithspringbasics.controller;

import net.therap.reactwithspringbasics.DTO.UserDto;
import net.therap.reactwithspringbasics.domain.User;
import net.therap.reactwithspringbasics.helper.UserHelper;
import net.therap.reactwithspringbasics.service.UserService;
import net.therap.reactwithspringbasics.util.UserDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") long id) {
        UserDto userDto = UserDtoMapper.convertUserToUserDto(userService.findById(id));

        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    @GetMapping(value = "/user-list")
    public ResponseEntity<List<UserDto>> showUserList() {
        List<UserDto> userDtoList = userService.findAll()
                .stream()
                .map(user -> UserDtoMapper.convertUserToUserDto(user))
                .collect(Collectors.toList());

        return new ResponseEntity<>(userDtoList, HttpStatus.OK);
    }

    @PostMapping(value = "/save-user")
    public ResponseEntity<UserDto> saveUser(@Valid @RequestBody UserDto userDto) {
        User savedUser = userService.saveOrUpdate(UserDtoMapper.convertUserDtoToUser(userDto));

        UserDto responseUser = UserDtoMapper.convertUserToUserDto(savedUser);

        return new ResponseEntity<>(responseUser, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update-user")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto) {
        User savedUser = userService.saveOrUpdate(userHelper.getUpdatedUser(userDto));

        UserDto responseUser = UserDtoMapper.convertUserToUserDto(savedUser);

        return new ResponseEntity<>(responseUser, HttpStatus.ACCEPTED);
    }

    @DeleteMapping(value = "/delete-user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(name = "id") long id) {
        userService.delete(userService.findById(id));

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
