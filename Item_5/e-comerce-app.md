## **Estructura del Backend de una Aplicación de Comercio Electrónico**
1. **Introducción**: <br>
    El diseño del backend de nuestra aplicación de comercio electrónico debe ser robusto, 
    escalable, y seguro para manejar de manera eficiente las transacciones, la gestión de inventarios, 
    la autenticación de usuarios, entre otras cosas. A continuación, se detalla cada uno de los requerimientos 
    solicitados en el ejercicio 5 de esta prueba.

2. **Tecnologías a usar**:

    - **Lenguaje de Programación:** Python (Django o Flask), Node.js (Express.js o Nest Js)
    - **Base de Datos:** PostgreSQL, MongoDB
    - **Servidor Web:** Nginx, Apache
    - **Cache:** Redis
    - **Mensajería:** RabbitMQ, Apache Kafka
    - **Autenticación y Autorización:** JWT, OAuth 2.0
    - **Almacenamiento de Archivos:** Amazon S3
    - **Infraestructura como Código (IaC):** Terraform
    - **Contenedores:** Docker, Kubernetes

3. **Organización de Archivos**
    * La estructura General del Proyecto seria algo asi:
        * ecommerce-backend/ <br>
            │ <br>
            ├── src/ <br>
            │   ├── app/ <br>
            │   │   ├── __init__.py <br>
            │   │   ├── settings.py <br>
            │   │   ├── urls.py <br>
            │   │   ├── wsgi.py <br>
            │   │   └── asgi.py <br>
            │   │ <br>
            │   ├── authentication/ <br>
            │   │   ├── __init__.py <br>
            │   │   ├── models.py <br>
            │   │   ├── views.py <br>
            │   │   ├── serializers.py <br>
            │   │   ├── urls.py <br>
            │   │   └── tests.py <br>
            │   │ <br>
            │   ├── products/ <br>
            │   │   ├── __init__.py <br>
            │   │   ├── models.py <br>
            │   │   ├── views.py <br>
            │   │   ├── serializers.py <br>
            │   │   ├── urls.py <br>
            │   │   └── tests.py <br>
            │   │ <br>
            │   ├── orders/ <br>
            │   │   ├── __init__.py <br>
            │   │   ├── models.py <br>
            │   │   ├── views.py <br>
            │   │   ├── serializers.py <br>
            │   │   ├── urls.py <br>
            │   │   └── tests.py <br>
            │   │ <br>
            │   └── common/ <br>
            │       ├── __init__.py <br>
            │       ├── utilities.py <br>
            │       └── middleware.py <br>
            │ <br>
            ├── scripts/ <br>
            │   └── deploy.sh <br>
            │ <br>
            ├── tests/ <br>
            │   ├── __init__.py <br>
            │   ├── test_authentication.py <br>
            │   ├── test_products.py <br>
            │   └── test_orders.py <br>
            │ <br>
            ├── Dockerfile <br>
            ├── docker-compose.yml <br>
            ├── requirements.txt <br>
            ├── manage.py <br>
            └── README.md <br>
    **Nota**: *Cabe destacar que dentro de cada modulo se podra ir modificando la estructura de ser necesario 
            para dar orden, pero sin interferir con la estructura principal .*

4. **Patrones de Diseño**
    * **Patrones de Arquitectura:**
        * **Microservicios**: Para dividir la aplicación en servicios independientes para cada uno de los módulos 
        (autenticación, productos, pedidos, etc...) que se comunican a través de API REST o gRPC.
        * **CQRS (Command Query Responsibility Segregation):** Para separar las operaciones de lectura y 
        escritura en diferentes modelos.
        * **Event Sourcing:** Para registrar cambios de estado como una secuencia de eventos, 
        lo cual es útil para mantener la consistencia y realizar auditorías.

    * **Patrones de Código:**

        * **Repository Pattern**: Para tener una abstracción sobre la capa de datos y desacoplar el acceso a la base de datos.

        * **Service Layer Pattern:** Con este podemos centralizar la lógica de negocio en una capa de servicios para mantener los controladores ligeros.

        * **Factory Pattern:** Para tener control de las instancias complejas que se van creando

        * **Observer Pattern:** Para notificar a varios objetos sobre cambios en el estado de otro objeto, 
        útil para eventos como cambios de inventario o estado de pedidos.

5. **Consideraciones de Seguridad:**

    * **Encriptación de Datos:** Tendriamos el uso de SSL/TLS para encriptar datos en tránsito y AES para datos en reposo.

    * **Autenticación y Autorización:** Se implementaria OAuth 2.0 para acceso seguro a recursos y JWT para manejo de sesiones.

    * **Validación de Entradas:** Sanitización y validación estricta de todas las entradas de usuario para prevenir ataques de inyección.

    * **Políticas de Seguridad:** Aplicación de políticas de seguridad como CSP (*Content Security Policy*), 
    CORS (*Cross-Origin Resource Sharing*), y medidas contra CSRF (*Cross-Site Request Forgery*).

6. **Despliegue e Infraestructura:**

    * **CI/CD:** En la parte de integración y despliegue continuo podriamos usar Jenkins, GitLab CI, o GitHub Actions.

    * **Contenedores y Orquestación:** Uso de Docker para contenedorización y Kubernetes para la orquestación de contenedores.

    * **Monitorización y Logging:** Para la implementación de sistemas de monitorización usariamos: (Prometheus, Grafana) y para la parte del logging centralizado podriamos realizar una implementacion entre Elasticsearch con Logstash y Kibana.

