@echo off
title Tailwind CSS Watcher - Geekcraft Doctor Template
echo.
echo Starting Tailwind watcher...
echo Press Ctrl+C to stop.
echo.
.\tailwindcss.exe -i assets\css\input.css -o assets\css\output.css --watch
echo.
echo Watcher stopped.
pause