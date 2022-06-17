#!/bin/bash
ls
printf "Which test file would you like to renew: "
read input
rm -rf ./$input/*
