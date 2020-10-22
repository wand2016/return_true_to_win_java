#!/bin/sh

cat < /dev/stdin | envsubst '$$blank1' | tee Main.java
javac Main.java && java Main
