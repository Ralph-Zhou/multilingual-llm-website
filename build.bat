@echo off
zola build
if exist "docs" rd /s /q "docs"
ren "public" "docs"

cd "docs"
echo multilingual-llm.net>"CNAME"

echo Successfully built website.
pause