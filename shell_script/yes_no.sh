#!/bin/sh

echo  "Type Your Anser [y/n]:"

tty_state=$(stty -g)
stty raw

char=$(dd bs=1 count=1 2> /dev/null)
stty "$tty_state"

echo

case "$char" in
 [yY])
 echo "Yes"
 ;;
 [nN])
 echo "No"
 ;;
 *)
 ;;
 esac