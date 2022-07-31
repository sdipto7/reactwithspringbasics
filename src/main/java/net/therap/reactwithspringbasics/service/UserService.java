package net.therap.reactwithspringbasics.service;

import net.therap.reactwithspringbasics.domain.Designation;
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

    public List<User> findAll(Designation designation) {
        return userRepo.findAll();
    }

    @Transactional
    public void saveOrUpdate(User user) {
        user.setPassword(HashGenerator.getMd5(user.getPassword()));

        userRepo.save(user);
    }

    @Transactional
    public void delete(User user) {
        userRepo.delete(user);
    }
}
