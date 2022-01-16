#!/bin/bash

LOCAL_UID=1000
LOCAL_GID=1000
USER_ID=${LOCAL_UID:-9001}
GROUP_ID=${LOCAL_GID:-9001}

echo "Starting with UID : $USER_ID, GID: $GROUP_ID"
useradd -u $USER_ID -o -m laravel
groupmod -g $GROUP_ID laravel
export HOME=/home/laravel

#exec /usr/sbin/gosu laravel "$@"