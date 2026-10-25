---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
author: ""
isbn: "" # cover comes from Open Library; or put a front.jpg next to this file
date: {{ .Date }} # the day you finished it
rating: # optional, 1–5
status: # "reading" while you are reading it: shown under "Now", without date or rating
---
