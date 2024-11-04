import path from "node:path";
import createTransform from "tailwindcss-multiple-classes";

const derivativesCSS = [".css", ".scss", ".sass", ".less", ".styl", ".stylus"];

export default function myPlugin({
	separator = ",",
	opBracket = "",
	clBracket = "",
} = {}) {
	const transformMultipleClasses = createTransform({
		separator,
		opBracket,
		clBracket,
	});

	return {
		name: "tailwindcss-multiple-classes",

		transform(code = "", pathFile = "") {
			const ext = path.extname(pathFile);

			if (derivativesCSS.includes(ext)) {
				return { code, map: null };
			}

			return {
				code: transformMultipleClasses(code),
				map: null, // provide source map if available
			};
		},
	};
}
