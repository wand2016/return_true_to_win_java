#!/bin/sh

docker-compose run \
               -e  blank1='(1+1) == 2' \
               java < Main.java.tmpl
