-- Check if database already exists
CREATE DATABASE IF NOT EXISTS cpms_lei_db;
USE cpms_lei_db;

CREATE TABLE IF NOT EXISTS `Roles` (
  `role_id` INT PRIMARY KEY,
  `role_name` VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS `User` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_name` VARCHAR(50) NOT NULL UNIQUE,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL, 
  `user_role` INT,
  FOREIGN KEY (`user_role`) REFERENCES `Roles`(`role_id`)
);

-- For inserting the default roles into the Roles tables

INSERT INTO `Roles` (`role_id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'Project Manager'),
(3, 'Engineer')
ON DUPLICATE KEY UPDATE role_name=VALUES(role_name);

