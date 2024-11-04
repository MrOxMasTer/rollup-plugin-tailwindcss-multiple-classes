import path from "node:path";
import createTransform from "tailwindcss-multiple-classes";

const derivativesCSS = [".css", ".scss", ".sass", ".less", ".styl", ".stylus"];

// FIXME: .min.

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

		transform(code = "", file = "") {
			const ext = path.extname(file);

			if (derivativesCSS.includes(ext) || file.indexOf("node_modules") !== -1) {
				return { code, map: null };
			}

			console.log(`CODE: ${file} : ${code}`);

			return {
				code: transformMultipleClasses(code),
				map: null, // provide source map if available
			};
		},
	};
}
