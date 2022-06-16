#!/bin/bash
ls
printf "Test file name: "
read test_file
echo "(_O-TEST) Starting test in dir: "
printf $test_file
echo "--------------------------------"
cd $test_file
node ../../index.js
echo "Test Complete."