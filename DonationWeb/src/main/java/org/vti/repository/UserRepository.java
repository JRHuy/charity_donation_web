package org.vti.repository;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.vti.entity.Role;
import org.vti.entity.User;
import org.vti.utils.HibernateUtils;

import java.util.List;

public class UserRepository {
    private HibernateUtils hibernateUtils;

    public UserRepository() {
        hibernateUtils = HibernateUtils.getInstance();
    }

    @SuppressWarnings("unchecked")
    public List<User> getAllUsers() {
        Session session = null;
        try {
            session = hibernateUtils.openSession();

            // create hql query
//            Query<User> query = session.createQuery("FROM User");
            Query<User> query = session.createQuery("FROM User");
            return query.list();
        } finally {
            if (session != null)
                session.close();
        }
    }

    public User getUserById(short id) {
        Session session = null;
        try {
            session = hibernateUtils.openSession();
            User user = session.get(User.class, id);

            return user;
        } finally {
            if (session != null) {
                session.close();
            }
        }
    }

    public User getUserByPhoneNum(String phoneNum) {
        Session session = null;

        try {
            session = hibernateUtils.openSession();

            Query<User> query = session.createQuery("FROM User WHERE phoneNum = :phoneNumParameter");

            // set parameter
            query.setParameter("phoneNumParameter", phoneNum);
            // get result
            User user = query.uniqueResult();

            return user;
        } finally {
            if (session != null)
                session.close();
        }
    }

    public void createUser(User user) {
        Session session = null;
        try {
            session = hibernateUtils.openSession();
            session.save(user);
        } finally {
            if (session != null)
                session.close();
        }
    }

    public void updateUserRole(short id, Role role) {
        Session session = null;
        try {
            session = hibernateUtils.openSession();
            session.beginTransaction();

            // get user
            User user = session.load(User.class, id);

            // update
            user.setRole(role);

            session.getTransaction().commit();

        } finally {
            if (session != null)
                session.close();
        }
    }

    public void updateUser(User user) {

        Session session = null;

        try {

            // get session
            session = hibernateUtils.openSession();
            session.beginTransaction();

            // update
            session.update(user);
            session.getTransaction().commit();

        } finally {
            if (session != null) {
                session.close();
            }
        }
    }

    public void deleteUser(short id) {
        Session session = null;
        try {
            session = hibernateUtils.openSession();
            session.beginTransaction();

            // get user
            User user = session.load(User.class, id);

            // update
            session.delete(user);

            session.getTransaction().commit();
        } finally {
            if (session != null)
                session.close();
        }
    }

    public boolean isUserExistByPhoneNum(String phoneNum) {

        // get department
        User user = getUserByPhoneNum(phoneNum);

        // return result
        if (user == null) {
            return false;
        }

        return true;
    }
}
