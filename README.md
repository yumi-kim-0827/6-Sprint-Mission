# 판다마켓 서비스 개발

## 주요 폴더 & 파일

#### src

- `index.tsx` : 최상위 컴포넌트
- `App.tsx` : 공통 디자인 렌더링 & 라우팅 설정

#### src/pages

- 페이지 컴포넌트 & 스타일 시트

## 프로젝트 구조

```
wdy@wdy src % tree
.
├── App.tsx
├── assets
│   ├── icons
│   │   ├── icon-arrow-left.svg
│   │   ├── icon-arrow-right.svg
│   │   ├── icon-back-page.svg
│   │   └── icon-heart.svg
│   └── images
│       └── logo
│           └── logo.svg
├── components
│   ├── Layout
│   │   ├── Header.scss
│   │   └── Header.tsx
│   └── UI
│       ├── PaginationBar.scss
│       └── PaginationBar.tsx
├── hooks
│   └── useFetch.ts
├── index.tsx
├── interfaces
│   ├── comment.interface.ts
│   └── item.interface.ts
├── pages
│   ├── add-item
│   │   ├── AddItemPage.scss
│   │   ├── AddItemPage.tsx
│   │   └── components
│   │       ├── AddItemForm.tsx
│   │       └── FileInput.tsx
│   ├── home
│   │   └── HomePage.tsx
│   ├── item-detail
│   │   ├── ItemDetailPage.scss
│   │   ├── ItemDetailPage.tsx
│   │   └── components
│   │       ├── ItemDetailSection.tsx
│   │       └── comment
│   │           ├── AddComment.tsx
│   │           ├── CommentList.tsx
│   │           └── CommentSection.tsx
│   └── item-list
│       ├── ItemPage.scss
│       ├── ItemPage.tsx
│       └── components
│           ├── AllItems.tsx
│           ├── BestItems.tsx
│           └── ItemCard.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── services
│   └── api.ts
├── setupTests.ts
└── styles
    └── global.scss
```
