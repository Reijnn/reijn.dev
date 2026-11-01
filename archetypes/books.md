---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
author: ""
description: "" # a sentence or two on what the book is about; also the page's search description
isbn: "" # cover comes from Open Library; or put a front.jpg next to this file
date: {{ .Date }} # the day you finished it
yearOnly: # true when you only know the year: the book page then shows just the year
rating: # optional, 1–5
status: # "reading" while you are reading it: shown under "Now", without date or rating
---
