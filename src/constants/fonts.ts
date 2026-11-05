import localFont from "next/font/local"


const yekanFont = localFont({
    src: [
  		{
			path: "../../public/fonts/IRANYekanX-UltraLight.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Thin.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Regular.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Medium.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Heavy.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Bold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-ExtraBold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Black.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-ExtraBlack.woff2",
			weight: "900",
			style: "normal",
		},
    ],
    variable: "--font-yekan",
});

export default yekanFont;
