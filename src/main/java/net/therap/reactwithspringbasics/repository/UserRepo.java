package net.therap.reactwithspringbasics.repository;

import net.therap.reactwithspringbasics.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author rumi.dipto
 * @since 7/28/22
 */
@Repository
public interface UserRepo extends JpaRepository<User, Long> {
}