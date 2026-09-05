CREATE TABLE IF NOT EXISTS usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    telefone VARCHAR NOT NULL UNIQUE
);

INSERT INTO usuarios(nome,email,telefone)
VALUES ('Nicollas', 'nicollas@exampple.com', '21999999999');