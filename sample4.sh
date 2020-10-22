#!/bin/sh

docker-compose run \
               -e  blank1='1' \
               java < Main.java.tmpl
