CREATE TABLE if not exists `personnal`(
    user_id int(255) NOT NULL,
    unique_id VARCHAR(255) NOT NULL,
    FirstName VARCHAR (255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Status VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);
CREATE TABLE if not exists `messages`(
    ID int (255) NOT NULL,
    Message_id VARCHAR(255) NOT NULL,
    IncomingMessageID VARCHAR (255) NOT NULL,
    OutgoingMessageID VARCHAR(255) NOT NULL,
    Messages VARCHAR(255) NOT NULL,
    Status VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID)
)