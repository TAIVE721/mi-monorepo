-- Active: 1755115784504@@127.0.0.1@5432@Mars_P

DROP TABLE IF EXISTS M_C;

CREATE TABLE M_C (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    priority INTEGER NOT NULL
);

SELECT * FROM M_C;

INSERT INTO
    M_C (name, priority)
VALUES ('Engines', 1),
    ('Supplies', 2);