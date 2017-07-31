#!/usr/bin/env bash

#Display the 2 and 7 character from each line of text.
#
#Input Format
#
#A text file with N lines of ASCII text only.
#
#Constraints
#
#Output Format
#
#The output should contain N lines. Each line should contain just two characters at the 2 and the 7 position of the corresponding input line.
#
#Sample Input
#
#Hello
#
#World
#
#how are you
#
#Sample Output
#
#e
#
#o
#
#oe

echo "$(cut -c2,7 /dev/stdin)"