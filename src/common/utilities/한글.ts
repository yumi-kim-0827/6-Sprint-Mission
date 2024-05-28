/** @see https://github.com/toss/slash/tree/main/packages/common/hangul */
export default class 한글
{
	public static readonly 초 = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
	public static readonly 중 = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
	public static readonly 종 = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

	public static ["이/가"](string: string)
	{
		return 조사(string, "이", "가");
	}

	public static ["은/는"](string: string)
	{
		return 조사(string, "는", "은");
	}
	
	public static ["을/를"](string: string)
	{
		return 조사(string, "를", "을");
	}

	public static ["와/과"](string: string)
	{
		return 조사(string, "와", "과");
	}
}

function 조사(string: string, isEmpty: string, isNotEmpty: string)
{
	const ABC = 초중종(string[string.length - 1]);

	return ABC === null ? string : string + (ABC.종.isEmpty ? isEmpty : isNotEmpty);
}

function 초중종(char: string)
{
	if ("가".charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= "힣".charCodeAt(0))
	{
		const unicode = char.charCodeAt(0) - "가".charCodeAt(0);
	
		return { 초: 한글.초[Math.floor((unicode / (28 * 21)))], 중: 한글.중[Math.floor((unicode % (28 * 21)) / 28)], 종: 한글.종[Math.floor((unicode % 28))]};
	}
	return null;
}
