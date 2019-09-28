CREATE DATABASE pp_db;

USE pp_db;

CREATE TABLE users(
--this will hold basic user information when user creates an account 
  id            INT          NOT NULL AUTO_INCREMENT,
  first_login ---default to true then pop page of amenities then update to false 
  first_name    VARCHAR(45)  NOT NULL,
  last_name     VARCHAR(45)  NOT NULL,
  email_address VARCHAR(150) NOT NULL,
  age           INT          NOT NULL, 
  gender        VARCHAR(10)  NOT NULL, 
  password      VARCHAR(30)  NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rvw_sub (
    id           INT          NOT NULL AUTO_INCREMENT,
    user_loc     VARCHAR(150) NOT NULL --auto fill based on user profile --gender we can join from user rather than filling another table with redundant data 
    clean_status INT          NOT NULL, --dropdown menu 
    wait_time    INT          NOT NULL, --dropdown menu 
    star_rvw     INT          NOT NULL, --submitted on user side based on a star structure --*Changed from VARCHAR to INT 
    user_notes   VARCHAR(500) NOT NULL, --submitted body of text for user 
    PRIMARY KEY (id)
)

CREATE TABLE locations (
  id           INT          NOT NULL AUTO_INCREMENT,
  zip_code     VARCHAR(45)  NOT NULL,
  address      VARCHAR(45)  NOT NULL,
  loc_type     VARCHAR(45)  NOT NULL,
  loc_name     VARCHAR(45),
  bldng_name   VARCHAR(45),
  PRIMARY KEY (id)
)

CREATE TABLE bathrooms (
  id           INT          NOT NULL AUTO_INCREMENT,
  bldng_name   VARCHAR(45),
  LOCATION     VARCHAR(45)  NOT NULL,
  clean_status INT          NOT NULL, 
  wait_time    INT          NOT NULL, 
  star_rvw     INT          NOT NULL,
)