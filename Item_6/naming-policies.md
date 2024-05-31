# Politicas de Nomenclatura
1. Nomenclatura de Bases de Datos
    * Nombres de Tablas: 
        - Utilizar nombres en minúsculas y en singular.
        - Separar palabras con guiones bajos (_).
        - *Ejemplo: usuario, producto, orden_compra.*
    * Nombres de Columnas
        - Utilizar nombres en minúsculas.
        - Separar palabras con guiones bajos (_).
        - Prefijar con el nombre de la tabla si es necesario para evitar ambigüedades.
        - *Ejemplo: nombre, fecha_creacion, usuario_id.*
    * Nombres de Índices
        - Prefijar con idx_ seguido del nombre de la tabla y la columna.
        - Separar palabras con guiones bajos (_).
        - *Ejemplo: idx_usuario_nombre, idx_producto_precio.*
    * Nombres de Claves Primarias y Foráneas
        - Prefijar con pk_ para claves primarias y fk_ para claves foráneas.
        - Seguir con el nombre de la tabla y columna.
        - *Ejemplo: pk_usuario_id, fk_orden_compra_usuario_id.*
2. Nomenclatura de Variables
    * Variables en Lenguajes de Programación
        - Utilizar camelCase para variables locales y parámetros de funciones.
        - Utilizar snake_case para variables globales y constantes.
        - *Ejemplo:
        - Variables locales: totalVentas, nombreUsuario.
        - Variables globales: total_ventas_global, nombre_usuario_global.
        - Constantes: MAX_VALOR, TIEMPO_ESPERA.*
    * Variables en Scripts y Archivos de Configuración
        - Utilizar nombres en minúsculas y separar palabras con guiones bajos (_).
        - *Ejemplo: ruta_archivo, usuario_conexion.*
3. Nomenclatura de Funciones
    * Funciones en Lenguajes de Programación
        - Utilizar camelCase.
        - Utilizar verbos descriptivos para indicar la acción que realiza la función.
        - *Ejemplo: calcularTotalVentas(), obtenerNombreUsuario().*
    * Procedimientos Almacenados (Stored Procedures)
        - Utilizar snake_case.
        - Prefijar con sp_.
        - *Ejemplo: sp_calcular_total_ventas, sp_obtener_nombre_usuario.*
4. Nomenclatura de Clases
    * Clases en Lenguajes de Programación
        - Utilizar PascalCase.
        - Utilizar nombres sustantivos que describan claramente el propósito de la clase.
        - *Ejemplo: Usuario, Producto, OrdenCompra.*
    * Interfaces
        - Utilizar PascalCase.
        - Prefijar con I.
        - *Ejemplo: IUsuario, IProducto.*
    * Enumeraciones
        - Utilizar PascalCase.
        - *Ejemplo: EstadoOrden, TipoUsuario.*
5. Nomenclatura de Git
    * Branches (Ramas)
        - Utilizar nombres en minúsculas.
        - Separar palabras con guiones medios (-).
        - Utilizar prefijos para indicar el tipo de trabajo:
            * *feature/* para nuevas funcionalidades.
            * *bugfix/* para corrección de errores.
            * *hotfix/* para correcciones urgentes.
            * *release/* para preparaciones de lanzamientos.
            * *test/* para pruebas.
        *Ejemplo: feature/nueva-funcionalidad, bugfix/correccion-error-login, hotfix/corregir-bug-produccion.*
    * Commits
        - Utilizar el presente simple en inglés.
        - Incluir un prefijo que indique el tipo de cambio:
            - *feat:* para nuevas funcionalidades.
            - *fix:* para correcciones de errores.
            - *docs:* para cambios en la documentación.
            - *style:* para cambios de estilo (formato, espacios, etc.).
            - *refactor:* para refactorizaciones de código.
            - *test:* para agregar o modificar pruebas.
            - *chore:* para tareas de mantenimiento.
            - *Ejemplo: feat: add user login functionality, fix: correct typo in homepage, docs: update API documentation.*
    * Tags
        - Utilizar formato de versión siguiendo SemVer.
        - *Ejemplo: v1.0.0, v1.0.1.*