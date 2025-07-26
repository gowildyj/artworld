# 프로젝트 폴더 구조

📦 src
┣ 📂assets # 이미지, 폰트, 공통 정적 리소스
┃ ┣ 📂images
┃ ┣ 📂fonts
┃ ┗ styles.css
┣ 📂components # 범용 재사용 UI 컴포넌트
┃ ┣ 📂common # Button, Card, Modal 등 공통 컴포넌트
┃ ┗ 📂layout # Header, Footer, Sidebar, PageWrapper 등 공통 레이아웃
┣ 📂features # 기능/도메인 단위 폴더 (DDD 기반 설계)
┃ ┣ 📂auth # 로그인, 회원관리, 인증
┃ ┃ ┣ components # 로그인 폼 등 auth 전용 컴포넌트
┃ ┃ ┗ services.ts # API 통신 등 로직
┃ ┣ 📂gallery # 작품 목록, 상세 보기, 확대 뷰어
┃ ┃ ┣ components # 작품 카드, 상세 모달
┃ ┃ ┣ viewer # OpenSeadragon 뷰어
┃ ┃ ┗ services.ts
┃ ┣ 📂exhibition # 전시일정 목록, 상세
┃ ┣ 📂admin # 관리자 기능 (글쓰기, 테마 변경 등)
┃ ┣ 📂comments # 댓글 기능
┃ ┗ 📂settings # 테마 설정, 언어 설정 등 유저 커스터마이징
┣ 📂hooks # 커스텀 훅
┣ 📂i18n # 다국어 번역 리소스 및 설정
┃ ┣ en.json
┃ ┣ ko.json
┃ ┣ fr.json
┃ ┗ i18n.ts
┣ 📂pages # 라우팅 단위 페이지 (라우트용 껍데기)
┃ ┣ 📂Home
┃ ┣ 📂Gallery
┃ ┣ 📂Exhibitions
┃ ┣ 📂Admin
┃ ┗ 📂NotFound
┣ 📂routes # react-router-dom 설정
┃ ┗ index.tsx
┣ 📂store # 전역 상태관리 (Redux Toolkit 기반)
┃ ┣ index.ts
┃ ┗ 📂slices # 도메인별 slice
┃ ┃ ┣ authSlice.ts
┃ ┃ ┣ gallerySlice.ts
┃ ┃ ┗ ...
┣ 📂styles # 글로벌 스타일, 테마 설정
┃ ┣ tailwind.css
┃ ┣ reset.css
┃ ┣ global.css
┃ ┣ themes.ts # 테마 정의 (ex. light, dark, pink, blue)
┃ ┗ themeContext.tsx # 테마 컨텍스트 (or zustand/store 가능)
┣ 📂types # 전역 TypeScript 타입 정의
┃ ┣ gallery.ts
┃ ┣ user.ts
┃ ┣ theme.ts
┃ ┗ ...
┣ 📂utils # 유틸 함수들 (포매팅, 파서, API 등)
┣ App.tsx # 최상위 App 컴포넌트
┣ main.tsx # React 진입점
┗ vite-env.d.ts # Vite 타입 정의

# 이미지 넣기 assets vs public

🟢 src/assets (추천: 대부분의 이미지, 아이콘, CSS, 폰트 등)

- import logo from './assets/logo.png';
- <img src={logo} alt="로고" />
  • 컴포넌트에서 사용하는 로고, UI 아이콘
  • 각 작품 썸네일, 배경 이미지 등 자주 import해서 사용할 파일
  • import img from '@assets/art1.jpg'처럼 사용

🟡 public/

- <img src="/img/art.jpg" alt="작품 이미지" />
- <img src={import.meta.env.PUBLIC_URL + "/logo192.png"} />
  • 앱 실행 전에 브라우저가 직접 접근해야 하는 파일
  • 예:
  • favicon.ico
  • robots.txt
  • manifest.json
  • OG 이미지 (og:image 용 /meta/og.jpg 등)
  • PDF 등 정적인 다운로드 파일
