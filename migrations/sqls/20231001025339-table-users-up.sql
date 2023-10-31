/* Replace with your SQL commands */
CREATE TABLE users (
    user_name VARCHAR(50) UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    user_role VARCHAR(50),
    password VARCHAR(255),
    id SERIAL PRIMARY KEY
);

INSERT INTO
    users (
        user_name,
        first_name,
        last_name,
        user_role,
        password
    )
VALUES
    (
        'Admin',
        'LeMinh',
        'Ho',
        'admin',
        '$2b$10$RQsLAbtSsM1rzwE3DQOUgu3CpuNoeYfyA0S4t9NnosE0xMhbTn5Ie'
    );
    -- matkhau@1234

INSERT INTO
    users (
        user_name,
        first_name,
        last_name,
        user_role,
        password
    )
VALUES
    (
        'user',
        'Tu',
        'Tran',
        'user',
        '$2b$10$ruRmOatLYuYw2V2m3dqls.AP8tVlcYD2Qcqytp9abtGvKHKHOLmR.'
    );
-- Minh1234@ 

INSERT INTO
    users (
        user_name,
        first_name,
        last_name,
        user_role,
        password
    )
VALUES
    (
        'AdminBackup',
        'Administer',
        'backup',
        'admin',
        '$2b$12$AVDdg4F.6gVNm36tAjKgSesWy3Air935BYpvVvwilMSsegEcJzDum'
    );
-- AdminBackup

INSERT INTO
    users (
        user_name,
        first_name,
        last_name,
        user_role,
        password
    )
VALUES
    (
        'UserBackup',
        'first name',
        'last name',
        'user',
        '$2b$12$yOuGiVCg5KVZ0xSx.vujHuBYplJLmyBx73/FtMsfbnYmPKd4J0Diu'
    );