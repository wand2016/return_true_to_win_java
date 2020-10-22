FROM openjdk:16-alpine

RUN apk add gettext libintl
RUN envsubst --version

WORKDIR /usr/src/myapp
ADD ./init.sh init.sh
RUN chmod +x ./init.sh

ENTRYPOINT ["./init.sh"]
