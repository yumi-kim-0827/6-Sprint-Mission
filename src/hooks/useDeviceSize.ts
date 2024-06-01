import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

/**
 * 디바이스 사이즈를 반환하는 함수
 * - mobile: 768px 미만
 * - tablet: 768px 이상 1200px 이하
 * - desktop: 1200px 초과
 * @function getDeviceSize
 * @example
 * const deviceSize = getDeviceSize();
 * console.log(deviceSize); // 'mobile' | 'tablet' | 'desktop'
 * @returns {('mobile' | 'tablet' | 'desktop')}
 */
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
	return 'desktop';
};

/**
 * 디바이스 사이즈를 반환하는 훅
 * - mobile: 768px 미만
 * - tablet: 768px 이상 1200px 이하
 * - desktop: 1200px 초과
 * @returns {('mobile' | 'tablet' | 'desktop')}
 * @function useDeviceSize
 * @example
 * const deviceSize = useDeviceSize();
 * console.log(deviceSize); // 'mobile' | 'tablet' | 'desktop'
 */
const useDeviceSize = (): 'mobile' | 'tablet' | 'desktop' => {
	const [deviceSize, setDeviceSize] = useState<'mobile' | 'tablet' | 'desktop'>(getDeviceSize());

	// 리사이즈 이벤트 핸들러
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
