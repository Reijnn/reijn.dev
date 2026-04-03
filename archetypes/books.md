---
title: "{{ replace .Name "-" " " | title }}"
author: ""
cover: ""
category: "work"
date: {{ .Date }}
draft: true
_build:
  list: true
  render: false
---
