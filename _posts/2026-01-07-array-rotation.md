---
title: "[백준 1234] 배열 회전"
date: 2026-01-07
type: "구현"
link: "https://boj.kr/1234"
summary: "배열을 시계 방향으로 회전시키는 구현 문제. deque를 써서 풀었다."
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
