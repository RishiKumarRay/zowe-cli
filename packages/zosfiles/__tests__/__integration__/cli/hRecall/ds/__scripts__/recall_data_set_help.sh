#!/bin/bash
set -e

echo "================Z/OS FILES MIGRATE DATA-SET-SEQUENTIAL HELP==============="
zowe zos-files hRecall data-set --help
if [ $? -gt 0 ]
then
    exit $?
fi
