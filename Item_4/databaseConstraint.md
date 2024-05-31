* ## Restricciones de integridad:
    * **Usuarios**:
        - La tabla Usuarios tiene una **clave primaria** *usuario_id* y una **restricción de unicidad** en el campo *email*.
    * **Autores**:
        - La tabla Autores tiene una **clave primaria** *autor_id* y una **clave foránea** *usuario_id* que referencia a Usuarios(*usuario_id*).
    * **Vídeos**: La tabla Videos tiene una **clave primaria** *video_id*, una **clave foránea** *autor_id* que referencia a Autores(*autor_id*), y una **restricción de unicidad** en el campo *url*.
    * **Colaboradores:** 
        - La tabla Colaboradores tiene una **clave primaria** colaborador_id, y claves foráneas *video_id* y *usuario_id* que referencian a Videos(*video_id*) y Usuarios(*usuario_id*) respectivamente. También tiene una **restricción de unicidad** compuesta en *video_id* y *usuario_id* para asegurar que un usuario no sea colaborador del mismo vídeo más de una vez.
    * **Comentarios:**
        - La tabla Comentarios tiene una **clave primaria** *comentario_id*, y claves foráneas *usuario_id* y *video_id* que referencian a Usuarios(*usuario_id*) y Videos(*video_id*) respectivamente.
    * **Reviews:**
        - La tabla Reviews tiene una **clave primaria** *review_id*, una restricción **CHECK** para asegurar que la puntuación esté entre 1 y 5, y **claves foráneas** *usuario_id* y *video_id* que referencian a Usuarios(*usuario_id*) y Videos(*video_id*) respectivamente. También tiene una **restricción de unicidad** compuesta en *usuario_id* y *video_id* para asegurar que un usuario no pueda hacer más de una review al mismo vídeo.