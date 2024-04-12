import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {	
	--main-blue-color: #3692ff;
	--main-bg-color: #cfe5ff;
	--sub-light-blue-color: #1967d6;
	--sub-dark-blue-color: #1251aa;
	--sub-gray-color: #9ca3af;
	--red-color: #f74747;
	--gray900: #111827;
	--gray800: #1f2937;
	--gray600: #4b5563;
	--gray500: #6b7280;
	--gray400: #9ca3af;
	--gray200: #e5e7eb;
	--gray100: #f3f4f6;
	--gray50: #f3f4f6;	
}

body {
	font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
	'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
	'Segoe UI Symbol', sans-serif;
	background-color: #fcfcfc;
}

* {
  box-sizing: border-box;
  color: #374151;
}

a {
	text-decoration: none;
}

.container {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 24px;
}
`;

export default GlobalStyle;
