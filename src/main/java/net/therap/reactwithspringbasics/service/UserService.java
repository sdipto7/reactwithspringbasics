package net.therap.reactwithspringbasics.service;

import net.therap.reactwithspringbasics.domain.User;
import net.therap.reactwithspringbasics.repository.UserRepo;
import net.therap.reactwithspringbasics.util.HashGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


/**
 * @author rumi.dipto
 * @since 7/28/22
 */
@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public User findById(long id) {
        Optional<User> user = userRepo.findById(id);

        return user.isPresent() ? user.get() : new User();
    }

    public List<User> findAll() {
        return userRepo.findAll();
    }

    @Transactional
    public User saveOrUpdate(User user) {
        if (user.isNew()) {
            user.setPassword(HashGenerator.getMd5(user.getPassword()));
        }

        return userRepo.save(user);
    }

    @Transactional
    public void delete(User user) {
        userRepo.delete(user);
    }
}
