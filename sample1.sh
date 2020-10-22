#!/bin/sh

docker-compose run \
               -e  blank1='true' \
               java < Main.java.tmpl
