-- Tabla de Usuarios
CREATE TABLE Usuarios (
    usuario_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Autores
CREATE TABLE Autores (
    autor_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    biografia TEXT,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

-- Tabla de Vídeos
CREATE TABLE Videos (
    video_id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    url VARCHAR(255) UNIQUE NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES Autores(autor_id)
);

-- Tabla de Colaboradores
CREATE TABLE Colaboradores (
    colaborador_id SERIAL PRIMARY KEY,
    video_id INT NOT NULL,
    usuario_id INT NOT NULL,
    rol VARCHAR(100),
    FOREIGN KEY (video_id) REFERENCES Videos(video_id),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id),
    UNIQUE (video_id, usuario_id)
);

-- Tabla de Comentarios
CREATE TABLE Comentarios (
    comentario_id SERIAL PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT NOT NULL,
    video_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id),
    FOREIGN KEY (video_id) REFERENCES Videos(video_id)
);

-- Tabla de Reviews
CREATE TABLE Reviews (
    review_id SERIAL PRIMARY KEY,
    puntuacion INT CHECK (puntuacion >= 1 AND puntuacion <= 5),
    comentario TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT NOT NULL,
    video_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id),
    FOREIGN KEY (video_id) REFERENCES Videos(video_id),
    UNIQUE (usuario_id, video_id)
);
