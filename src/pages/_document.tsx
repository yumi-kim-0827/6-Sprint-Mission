import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='ko'>
			<Head>
				{/* <!-- Font --> */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />

				<link
					rel='stylesheet'
					type='text/css'
					href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Poppins:wght@400;700&display=swap'
					rel='stylesheet'
				/>
				{/* <!-- Reset Css --> */}
				<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/reset-css@4.0.1/reset.min.css' />

				<title>판다마켓</title>
				<meta name='description' content='판다마켓에 어서오세요' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
