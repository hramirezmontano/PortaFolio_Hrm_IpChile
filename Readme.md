# Portafolio Web - Hugo Ramírez Montaño

Proyecto web desarrollado para la asignatura de Desarrollo Web II (IPChile). Consiste en un portafolio interactivo desplegado en Apache Tomcat con persistencia de datos en MySQL mediante la arquitectura DAO en Java/JSP.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5, AOS (Animate On Scroll).
* **Backend:** Java (JSP / Servlets), Apache Tomcat.
* **Base de Datos:** MySQL (JDBC).
* **Control de Versiones:** Git & GitHub.

---

## 📋 Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

1. **Java JDK** (versión 8 o superior).
2. **Apache Tomcat** (versión 9.0 o superior).
3. **MySQL Server** y **MySQL Workbench** (o phpMyAdmin / XAMPP).
4. **Driver JDBC de MySQL** (`mysql-connector-j-x.x.x.jar`) dentro de la carpeta `WEB-INF/lib` del proyecto.
5. **Git**.

---

## 🗄️ 1. Configuración de la Base de Datos

1. Abre **MySQL Workbench** (o la herramienta de administración MySQL que utilices).
2. Crea una nueva base de datos o ejecuta el script SQL ubicado en la carpeta del proyecto (`sql/script.sql`).
3. Verifica las credenciales de conexión en tu clase Java de conexión (ubicada en `src/conexion/` o `src/dao/`):
   * **URL:** `jdbc:mysql://localhost:3306/nombre_tu_base_datos`
   * **Usuario:** `root` (o tu usuario de MySQL)
   * **Contraseña:** `tu_contraseña`

---

## 🚀 2. Clonar el Proyecto desde GitHub

Abre tu terminal (PowerShell o terminal de VS Code) y ejecuta los siguientes comandos:

```bash
# Clonar el repositorio
git clone https://github.com/HRAMIREZMONTANO/Portafolio_HRM_IPChile.git

# Entrar a la carpeta del proyecto
cd Portafolio_HRM_IPChile/Portafolio