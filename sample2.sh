#!/bin/sh

docker-compose run -e blank1="false" java < Main.java.tmpl
