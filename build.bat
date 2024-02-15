@echo off
zola build
if exist "docs" rd /s /q "docs"
ren "public" "docs"

echo Successfully built website.
pause