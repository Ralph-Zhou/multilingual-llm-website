#!/bin/bash
zola build
rm -rf docs
mv public docs
echo "mllm-survey.net" > docs/CNAME
echo "Successfully built the site!"