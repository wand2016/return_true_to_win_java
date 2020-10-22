#!/bin/sh

echo "$blank1"
cat < /dev/stdin | envsubst '$$blank1' | tee Main.java
javac Main.java && java Main
