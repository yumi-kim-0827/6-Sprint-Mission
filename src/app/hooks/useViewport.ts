import useMediaQuery from "./useMediaQuery";

export default function useViewport()
{
	return {
		isMobile: useMediaQuery("(375px <= width < 768px)"), isTablet: useMediaQuery("(768px <= width < 1200px)"), isDesktop: useMediaQuery("(1200px <= width)"),
	};
}
