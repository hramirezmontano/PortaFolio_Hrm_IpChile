@echo off
title Despliegue de Portafolio a Apache Tomcat
echo ===================================================
echo   Sincronizando archivos con Apache Tomcat...
echo ===================================================

:: Ruta de destino en tu Tomcat local
set TOMCAT_WEBAPPS="C:\apache-tomcat-10.1.57\webapps\Portafolio"

:: Copiar todos los archivos JSP, HTML, assets, WEB-INF, etc.
xcopy /E /Y /I ".\*" %TOMCAT_WEBAPPS%

echo.
echo ===================================================
echo   !Despliegue completado con exito!
echo   Abre tu navegador en: http://localhost:8080/Portafolio/index.jsp
echo ===================================================
pause