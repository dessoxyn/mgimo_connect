@echo off
setlocal
cd /d "%~dp0"

start "MGIMO Connect Server" powershell -NoExit -ExecutionPolicy Bypass -File "%~dp0serve-site.ps1" -Port 4173
timeout /t 2 /nobreak >nul
start "" http://localhost:4173/
