-- Active: 1755115784504@@127.0.0.1@5432@Mars_P

DROP TABLE IF EXISTS M_E;

CREATE TABLE M_E (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description VARCHAR(255) NOT NULL,
    weight INTEGER NOT NULL,
    category INTEGER NOT NULL
);

SELECT * FROM M_E;

INSERT INTO
    M_E (
        name,
        description,
        weight,
        category
    )
VALUES (
        'Engine XI',
        'principal engine of spaceship',
        50,
        2
    ),
    (
        'butter',
        '50 butter container',
        10,
        1
    );