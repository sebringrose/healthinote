#!/bin/sh
export SI=$1
export FILENAME=$2

sed -e 's@###siteId###@'"$SI"'@g' $FILENAME > $FILENAME.tmp
rm -f $FILENAME
mv $FILENAME.tmp $FILENAME
