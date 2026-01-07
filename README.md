# 🚀 AlgoTracker - 나만의 알고리즘 풀이 기록 저장소

> **Note for Developers**: 이 프로젝트를 처음부터 구현하는 방법이나 내부 구조가 궁금하다면 [**개발자 가이드 (README-developer.md)**](./README-developer.md)를 참고하세요.

**AlgoTracker**는 알고리즘 문제 풀이 기록을 체계적으로 관리하고 시각화해주는 정적 웹사이트 템플릿입니다. 이 저장소를 복사(Fork)하여 바로 당신만의 알고리즘 블로그를 시작할 수 있습니다.

## ✨ 주요 기능

- **📅 캘린더 뷰**: 월별 문제 풀이 현황을 한눈에 확인 (잔디심기 스타일)
- **🔍 실시간 검색**: 제목이나 요약으로 푼 문제를 즉시 검색
- **📊 통계 대시보드**: 총 풀이 수, 이번 달 풀이 수, 연속 풀이 일수(Streak) 자동 계산
- **🏷️ 난이도/유형 관리**: Easy/Medium/Hard 난이도 표시 및 유형별 정리
- **📱 반응형 디자인**: 깔끔하고 현대적인 UI

## 🏃‍♂️ 시작하기 (Quick Start)

### 1. 저장소 가져오기
이 레포지토리를 당신의 GitHub 계정으로 **Fork** 하거나, 템플릿으로 사용하여 새 저장소를 만드세요.

### 2. 설정 변경 (`_config.yml`)
`_config.yml` 파일을 열어 사이트 정보를 수정하세요.
```yaml
title: "My Algorithm Tracker"
description: "알고리즘 공부 기록"
baseurl: "/repository-name"  # 당신의 저장소 이름으로 변경 (예: /algo-study)
url: "https://username.github.io"
```

### 3. 문제 풀이 기록하기
`_posts` 폴더 안에 `YYYY-MM-DD-제목.md` 형식으로 파일을 생성하면 자동으로 사이트에 반영됩니다.

**파일 예시**: `_posts/2026-01-07-two-sum.md`
```markdown
---
layout: post
title: "[LeetCode 1] Two Sum"
date: 2026-01-07
type: "Array"
difficulty: "easy"  # easy, medium, hard 중 선택
link: "https://leetcode.com/problems/two-sum"
summary: "해시맵을 사용하여 O(n)으로 해결"
---

## 문제 풀이

여기에 풀이 내용과 코드를 작성하세요.
```

### 4. About 페이지 수정
`about.md` 파일을 열어 자기소개와 GitHub 링크 등을 본인의 정보로 업데이트하세요. 통계 데이터는 자동으로 계산되므로 건드리지 않아도 됩니다.

## 🛠️ 로컬에서 실행하기 (선택 사항)

내 컴퓨터에서 미리보기를 하려면 다음 환경이 필요합니다:
- Ruby & Bundler
- Node.js & NPM

```bash
# 의존성 설치
bundle install
npm install

# 실행 (Jekyll + Tailwind)
npm start  # 또는 package.json에 정의된 시작 스크립트 활용
# 없을 경우: 
# 1. 터미널 1: npx tailwindcss -i ./assets/css/index.css -o ./assets/css/output.css --watch
# 2. 터미널 2: bundle exec jekyll serve
```

## 🚀 배포하기

1. GitHub 저장소의 **Settings > Pages**로 이동합니다.
2. **Build and deployment** 소스를 **GitHub Actions**로 변경합니다. (이미 설정된 워크플로우가 자동으로 실행될 것입니다)
3. 잠시 후 `https://<username>.github.io/<repository-name>` 에서 사이트를 확인할 수 있습니다.

---
Happy Coding! 💻
