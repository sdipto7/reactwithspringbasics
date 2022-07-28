CREATE TABLE react_with_spring_basics.user
(
    id          INT            NOT NULL AUTO_INCREMENT,
    first_name  VARCHAR(100)   NOT NULL,
    last_name   VARCHAR(100)   NOT NULL,
    username    VARCHAR(100)   NOT NULL,
    password    VARCHAR(100)   NOT NULL,
    designation VARCHAR(100)   NOT NULL,
    salary      DECIMAL(10, 2) NOT NULL,
    created     DATETIME       NOT NULL,
    updated     DATETIME,
    version     INT            NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT unique_username UNIQUE (username)
);