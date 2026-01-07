---
title: "[BOJ 1234] Array Rotation"
date: 2026-01-07
type: "Implementation"
difficulty: "medium"
link: "https://boj.kr/1234"
summary: "Rotate an array clockwise. Solved using deque."
layout: post
---

## CODE

```python
from collections import deque

def rotate(arr, k):
    d = deque(arr)
    d.rotate(k)
    return list(d)
```
