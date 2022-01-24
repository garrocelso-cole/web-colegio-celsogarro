@echo off
For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
set hora=%time:~0,2%
set hora=%hora: =0%
set minuto=%time:~3,2%
set segundo=%time:~6,2%
echo "Escriba el nombre commit correspondiente"
set /p nombre=:

git add .
TIMEOUT /T 4
git commit -m "%mydate%_%hora%.%minuto%.%segundo%-%nombre%"
TIMEOUT /T 4
git push