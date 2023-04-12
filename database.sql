-- create database
DROP DATABASE IF EXISTS Donation;
CREATE DATABASE Donation;
USE Donation;

-- create table Role
CREATE TABLE `Role`(
	roleID			TINYINT UNSIGNED PRIMARY KEY,
	roleName	ENUM('ADMIN', 'CUSTOMER') NOT NULL
);

-- create table user
CREATE TABLE `User`(
	userID				TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    isActive		BOOLEAN,
    `name`			nvarchar(50) NOT NULL,
    phoneNum		VARCHAR(12) NOT NULL UNIQUE KEY,
    userEmail		VARCHAR(50) NOT NULL,
    userPassword 	NVARCHAR(50) NOT NULL,
    dateOfBirth		DATE,
    gender			varchar(6),
    citizenIdentityNum		int(13) NOT NULL,
    roleID			TINYINT UNSIGNED,
    FOREIGN KEY(roleID)	REFERENCES `Role`(roleID)
);

/*============================== INSERT DATABASE =======================================*/
/*======================================================================================*/
-- Add data Role & User
-- INSERT INTO Article		(title,		 	`status`		) 
-- VALUES
-- 						('Article 1',		'O'		),
-- 						('Article 2',		'REV'	),
-- 						('Article 3',		'A'	);

INSERT INTO `Role` (roleID, roleName)
VALUES 	(1, 'ADMIN'),
		(2, 'CUSTOMER');
        
INSERT INTO `User`(isActive, `name`, phoneNum, userEmail, userPassword, dateOfBirth, gender, citizenIdentityNum, roleID)
values (true, 'Tran Duc Huy', '0123456789', 'huy@gmail.com', 'lalaland', '2001-08-06', 'MALE', '01234567890', 2)