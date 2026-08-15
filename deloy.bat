@echo off
echo Copiando archivos a Tomcat...
xcopy /E /Y /I "%~dp0*" "C:\apache-tomcat-10.1.57\webapps\Portafolio\"
echo !Despliegue completado!
pause