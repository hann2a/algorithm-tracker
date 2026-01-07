# 🛠️ 개발자용 가이드: AlgoTracker 구현 A to Z

이 문서는 **AlgoTracker** 프로젝트를 처음부터 구현하는 과정을 단계별로 설명하는 **개발자 공부용 가이드**입니다. Jekyll 기반의 정적 사이트에 Tailwind CSS를 입히고, 동적 기능을 JavaScript로 구현하는 방법을 다룹니다.

## 1. 사전 준비 (Prerequisites)

- **Ruby & Jekyll**: 정적 사이트 생성을 위한 프레임워크
- **Node.js & NPM**: Tailwind CSS 빌드를 위해 필요
- **Git**: 버전 관리

## 2. 프로젝트 구조 (Project Structure)

```
algorithm-tracker/
├── _includes/          # 재사용 가능한 HTML 컴포넌트 (Sidebar, Calendar 등)
│   ├── calendar.html   # JS로 동작하는 동적 캘린더 컴포넌트
│   └── sidebar.html    # 사이드바 & 검색 모달
├── _layouts/           # 페이지 템플릿 (default, post)
├── _posts/             # 알고리즘 풀이 마크다운 파일들
├── assets/             # 정적 리소스
│   └── css/            # Tailwind CSS 파일 (index.css -> output.css)
├── _config.yml         # Jekyll 설정 (제목, URL 등)
├── tailwind.config.js  # Tailwind 설정
└── deploy.yml          # GitHub Actions 배포 설정
```

## 3. 프로젝트 초기 세팅

### Jekyll 프로젝트 생성
```bash
jekyll new algorithm-tracker
cd algorithm-tracker
```

### Tailwind CSS 설치 및 설정
1. **NPM 초기화 및 패키지 설치**
   ```bash
   npm init -y
   npm install -D tailwindcss
   npx tailwindcss init
   ```

2. **`tailwind.config.js` 설정**
   Jekyll의 HTML 및 Markdown 파일에서 클래스를 감지하도록 설정합니다.
   ```javascript
   module.exports = {
     content: [
       './_includes/**/*.{html,js}',
       './_layouts/**/*.{html,js}',
       './_posts/*.{md,html}',
       './*.{html,md}'
     ],
     theme: { ... }
   }
   ```

3. **CSS 파일 생성**
   `assets/css/index.css`를 생성하고 Tailwind 디렉티브를 추가합니다.
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **빌드 명령어**
   CSS를 컴파일하여 `_site`와 `assets`에 출력합니다.
   ```bash
   npx tailwindcss -i ./assets/css/index.css -o ./assets/css/output.css --watch
   ```

## 3. 핵심 기능 구현

### A. 사이드바 레이아웃
- `_includes/sidebar.html`에 고정 사이드바(fixed)를 구현합니다.
- `_layouts/default.html`에서 사이드바를 포함하고, 메인 콘텐츠 영역(`main`)에 `ml-64` 등의 마진을 주어 겹치지 않게 배치합니다.

### B. 동적 캘린더 (Home)
Jekyll은 정적 사이트이므로, 현재 날짜 기준의 캘린더나 상호작용은 **JavaScript**로 처리해야 합니다.
1. **Liquid 데이터 주입**: Jekyll의 `site.posts` 데이터를 JSON 형태의 JavaScript 변수로 변환하여 HTML에 심습니다.
   ```liquid
   const posts = [
     {% for post in site.posts %}
       {
         date: "{{ post.date | date: '%Y-%m-%d' }}",
         title: "{{ post.title | escape }}",
         difficulty: "{{ post.difficulty }}"
       },
     {% endfor %}
   ];
   ```
2. **달력 렌더링**: JavaScript `Date` 객체를 사용하여 현재 월의 1일의 요일과 마지막 날짜를 계산하고 그리드를 생성합니다.
3. **매핑**: 날짜별로 `posts` 배열을 필터링하여 일치하는 날짜에 점(Dot)을 표시합니다.

### C. 검색 기능 (Modal)
별도의 백엔드 없이 클라이언트 사이드 검색을 구현합니다.
1. 모든 포스트의 메타데이터(제목, 요약, 날짜, URL)를 JavaScript 배열로 미리 로드합니다.
2. 입력창(`input`) 이벤트 리스너를 통해, 입력값과 제목/요약을 실시간 비교(`filter`)합니다.
3. 결과가 있으면 모달 내에 리스트를 동적으로 렌더링합니다.

### D. 통계 (About 페이지)
Liquid 템플릿 언어를 사용하여 빌드 타임에 데이터를 계산합니다.
- **Total Solved**: `{{ site.posts | size }}`
- **This Month**: 현재 시간(`site.time`)과 포스트 날짜를 비교하여 카운트.
- **Streak**: 날짜 연속성은 Liquid로 계산하기 복잡하므로, JavaScript를 사용하여 `posts` 날짜 데이터를 분석해 계산합니다.

## 4. 데이터 구조 (Frontmatter)

각 문제 풀이(포스트)는 `_posts` 폴더에 마크다운으로 저장하며, 머리말(Frontmatter)을 통해 메타데이터를 관리합니다.

```yaml
---
layout: post
title: "[BOJ 1000] A+B"       # 문제 제목
date: 2026-01-01              # 풀이 날짜
type: "Math"                  # 알고리즘 유형
difficulty: "easy"            # 난이도 (easy/medium/hard)
link: "https://..."           # 문제 링크
summary: "간단한 요약"        # 요약 (검색 및 툴팁용)
---
```

## 5. 배포 (GitHub Actions)

`deploy.yml` 워크플로우를 생성하여 자동화합니다.
1. **Checkout**: 코드 가져오기
2. **Setup Ruby & Node**: 환경 세팅
3. **Build CSS**: `npx tailwindcss ...`
4. **Build Jekyll**: `jekyll build`
5. **Deploy**: `peaceiris/actions-gh-pages` 액션을 사용해 `_site` 폴더를 `gh-pages` 브랜치로 배포

---
이 프로젝트는 정적 사이트 생성기(Jekyll)의 한계(동적 기능 부재)를 JavaScript와 데이터 전처리(Liquid)로 극복하는 좋은 예시입니다.
