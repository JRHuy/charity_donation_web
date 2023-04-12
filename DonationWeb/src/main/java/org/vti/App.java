package org.vti;

import org.vti.entity.Role;
import org.vti.entity.User;
import org.vti.repository.UserRepository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class App
{
    public static void main( String[] args ) {
        UserRepository userRepository = new UserRepository();

//        System.out.println("***********GET ALL USERS***********");
//        List<User> users = userRepository.getAllUsers();
//        for (User user : users) {
//            System.out.println(user);
//        }

//        System.out.println("\n\n***********CREATE DEPARTMENT***********");
//        User userCreate = new User();
//        String citizen = "01234567891";
//        userCreate.setCitizenIdentityNum(citizen);
//        userCreate.setName("Hoang");
//        userCreate.setUserEmail("hoang@gmail.com");
//        userCreate.setUserPassword("00000000");
//        userCreate.setPhoneNum("093286567");
//        userRepository.createUser(userCreate);

//         test update
//        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
//        Date dateOfBirth;
//        try {
//            dateOfBirth = formatter.parse("2000-12-31");
//        } catch (ParseException e) {
//            throw new RuntimeException(e);
//        }
//
//        Role role1 = new Role();
//        role1.setRoleID((short) 2);
//
//        User user1 = new User(false, "Duy", "0902123555", "01942719572", "duy@gmail.com", "helpMe@123", dateOfBirth, "Male", role1);
//        user1.setUserID((short) 3);
//        userRepository.updateUser(user1);
//        System.out.println("----------------------");
//        System.out.println(user1.getRole().getRoleName());

//        System.out.println("\n\n***********DELETE DEPARTMENTS***********");
//        userRepository.deleteUser((short) 3);
    }
}
