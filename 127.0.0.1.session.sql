CREATE TABLE if not exists `personnal`(
    ID int(255) NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR (255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    TimeZone VARCHAR(255) NOT NUll,
    UserSkills VARCHAR(255) NOT NULL,
    UserLanguage VARCHAR(255) NOT NULL,
    UserDescription VARCHAR(255) NOT NULL,
    ProfilePicture VARCHAR(255) NOT Null,
    BannerPicture VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);
CREATE TABLE if not exists `product`(
    ID int (255) NOT NULL AUTO_INCREMENT,
    User_id int (255) NOT Null ProductName VARCHAR(255) NOT NULL,
    ProductPrice VARCHAR (255) NOT NULL,
    Image VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (user_id),
);
CREATE TABLE if not exists `Basic`(
    ID int (255) NOT NULL AUTO_INCREMENT,
    ProductID (255) NOT NULL,
    ProductDescription VARCHAR (255) NOT NULL,
    GigDescription VARCHAR(255) NOT NULL,
    DeliveryTime VARCHAR(255 NOT NULL),
    GigPrice VARCHAR(255) NOT NULL PRIMARY KEY (ID)
);
CREATE TABLE if not exists `Pro`(
    ID int (255) NOT NULL AUTO_INCREMENT,
    ProductID (255) NOT NULL,
    ProductDescription VARCHAR (255) NOT NULL,
    GigDescription VARCHAR(255) NOT NULL,
    DeliveryTime VARCHAR(255 NOT NULL),
    GigPrice VARCHAR(255) NOT NULL PRIMARY KEY (ID)
);
CREATE TABLE if not exists `Advance`(
    ID int (255) NOT NULL AUTO_INCREMENT,
    ProductID (255) NOT NULL,
    ProductDescription VARCHAR (255) NOT NULL,
    GigDescription VARCHAR(255) NOT NULL,
    DeliveryTime VARCHAR(255 NOT NULL),
    GigPrice VARCHAR(255) NOT NULL PRIMARY KEY (ID)
)