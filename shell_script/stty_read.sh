#!/bin/sh
stty -echo
echo 'Type something: \c'
read STR
stty echo
echo '\nYou typed:' $STR