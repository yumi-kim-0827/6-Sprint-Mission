import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

const getDeviceSize = (): 'mobile' | 'tablet' | 'desktop' => {
	if (typeof window !== 'undefined') {
		const screenWidth = window.innerWidth;

		if (screenWidth < 768) {
			return 'mobile';
		} else if (screenWidth <= 1200) {
			return 'tablet';
		} else {
			return 'desktop';
		}
	}
	return 'desktop'; // 기본 값으로 'desktop' 반환
};

/**
 * 디바이스 크기를 문자열로 반환
 * @return {string}
 */
const useDeviceSize = (): 'mobile' | 'tablet' | 'desktop' => {
	const [deviceSize, setDeviceSize] = useState<'mobile' | 'tablet' | 'desktop'>(getDeviceSize());

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = throttle(() => {
				setDeviceSize(getDeviceSize());
			}, 200);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	return deviceSize;
};

export default useDeviceSize;
