# 개인 포트폴리오 웹사이트

바닐라 HTML, CSS, JavaScript로 제작된 개인 포트폴리오 웹사이트입니다.

## 🚀 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **부드러운 애니메이션**: 스크롤 기반 애니메이션과 호버 효과
- **모바일 네비게이션**: 햄버거 메뉴로 모바일 친화적 네비게이션
- **프로젝트 쇼케이스**: 개발 프로젝트들을 카드 형태로 깔끔하게 표시
- **연락처 섹션**: 이메일, GitHub, LinkedIn 등 연락 방법 제공

## 📁 프로젝트 구조

```
portfolio/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── main.js         # JavaScript 기능
├── images/             # 이미지 파일들
└── README.md           # 프로젝트 설명
```

## 🛠️ 사용 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript**: ES6+, DOM 조작, Intersection Observer API

## 📝 커스터마이징 가이드

### 1. 개인 정보 수정
`index.html`에서 다음 부분들을 수정하세요:
- `[이름]`: 본인의 이름으로 변경
- `[이메일]`: 본인의 이메일 주소
- `[깃헙아이디]`: GitHub 사용자명
- `[링크드인]`: LinkedIn 프로필 URL
- `[기술스택]`: 본인의 주요 기술 스택

### 2. 프로젝트 추가/수정
`index.html`의 프로젝트 섹션에서:
- 프로젝트 제목, 설명, 기술 스택 수정
- 프로젝트 이미지 추가 (`images/` 폴더에)
- GitHub 링크와 라이브 데모 링크 연결

### 3. 스타일 커스터마이징
`css/style.css`에서:
- 색상 테마 변경 (CSS 변수 활용 권장)
- 폰트 변경
- 레이아웃 조정

### 4. 이미지 추가
`images/` 폴더에 다음 이미지들을 추가하세요:
- `project1.jpg`, `project2.jpg`, `project3.jpg`: 프로젝트 스크린샷
- 필요시 프로필 사진이나 기타 이미지

## 🚀 GitHub Pages 배포

1. GitHub에 새 저장소 생성
2. 코드를 저장소에 푸시
3. Settings > Pages에서 Source를 "Deploy from a branch" 선택
4. Branch를 "main"으로 설정
5. 몇 분 후 `https://[사용자명].github.io/[저장소명]`에서 확인

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## ✨ 추가 기능 아이디어

- [ ] 다크 모드 토글
- [ ] 블로그 섹션 추가
- [ ] 연락처 폼 기능
- [ ] 다국어 지원
- [ ] 프로젝트 필터링 기능
- [ ] 스킬 프로그레스 바

## 📄 라이선스

MIT License - 자유롭게 사용하세요!