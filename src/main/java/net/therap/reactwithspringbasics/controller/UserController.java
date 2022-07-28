package net.therap.reactwithspringbasics.controller;

import net.therap.reactwithspringbasics.domain.Designation;
import net.therap.reactwithspringbasics.domain.User;
import net.therap.reactwithspringbasics.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author rumi.dipto
 * @since 7/28/22
 */
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user-list")
    public List<User> showUserList() {
        List<User> userList = userService.findAll(Designation.DEVELOPER);
        userList.stream()
                .map(User::getFullName)
                .forEach(System.out::println);

        return userList;
    }

    @PostMapping("/save-user")
    public void saveUser(@RequestBody User user){
        userService.saveOrUpdate(user);
    }
}
