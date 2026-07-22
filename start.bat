@echo off
cd /d "%~dp0"
start "Mom Dad OS Server" /min cmd /c "node server.js"
timeout /t 2 /nobreak >nul
start "" "http://localhost:8088"
