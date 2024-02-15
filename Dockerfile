FROM mcr.microsoft.com/devcontainers/base:alpine-3.17

RUN sudo apk add zola

WORKDIR /app

COPY . .

EXPOSE 1111

CMD [ "zola", "serve"]