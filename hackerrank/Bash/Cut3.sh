#!/usr/bin/env bash

#Display a range of characters starting at the 2nd  position of a string and ending at the 7th  position (both positions included).
#
#Input Format
#
#A text file containing  lines of ASCII text only.
#
#Constraints
#
#Output Format
#
#The output should contain  lines.
#Each line should contain the range of characters starting at the  position of a string and ending at the position (both positions included). The output should contain  lines.
#Each line should contain the range of characters starting at the  position of a string and ending at the position (both positions included).



echo "$(cut -c2-7 /dev/stdin)"