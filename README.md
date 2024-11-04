<div align="center">
<h1>vite-rollup-tailwind-multiple-classes</h1>

<p>Defining several classes at once for one variant</p>
</div>

---

## [The main plugin](https://www.npmjs.com/package/tailwindcss-multiple-classes?activeTab=readme)

Support Vite

`Important`: Does not process `.css` files and its derivatives.
[This is handled by postcss](https://vitejs.ru/guide/features.html#postcss)

[Installation](#installation)

## Demonstration

### jsx

#### Example 1 { separator = "," }:
[One of the proposed syntaxes in X, which is voted for the most](https://x.com/adamwathan/status/1849509712368226792)

`Before:`

```jsx
const Main = () => {
	return <main className="flex mm:bg-red,text-green,hover:text-3xl">...</main>;
};
```

`After:`

```jsx
const Main = () => {
	return <main className="flex mm:bg-red mm:text-green mm:hover:text-3xl ">...</main>;
};
```

#### Example 2 { separator = ",", opBracket = "(", clBracket = ")" }:

```jsx
const main = () => {
  return <main className="flex supports-[not(**)]:min-height-[10.1px]:h-10,sm:h-20,md:h-30, lg:h-40,xl:h-50,hover:(pl-4,py-3) pl-3">...</main>;};
```

`After:`

```jsx
const main = () => {
        return <main className="flex supports-[not(**)]:min-height-[10.1px]:h-10 supports-[not(**)]:min-height-[10.1px]:sm:h-20 supports-[not(**)]:min-height-[10.1px]:md:h-30 supports-[not(**)]:min-height-[10.1px]:lg:h-40 supports-[not(**)]:min-height-[10.1px]:xl:h-50 supports-[not(**)]:min-height-[10.1px]:hover:pl-4 supports-[not(**)]:min-height-[10.1px]:hover:py-3 pl-3">...</main>;};
```
### css

`IMPORTANT`: You need to connect the PostCSS plugin

`Before:`

```css
.class {
	@apply mm:bg-red,text-green;
}
```

`After:`

```css
.class {
	@apply mm:bg-red mm:text-green;
}
```

## Installation

Installation depending on the developer

```
npm install --save-dev tailwindcss-multiple-classes rollup-plugin-tailwindcss-multiple-classes
```

```javascript
// vite.config.js
import tailwindMultipleClasses from "rollup-plugin-tailwindcss-multiple-classes";

export default defineConfig({
	plugins: [tailwindMultipleClasses({ separator: ",", opBracket: "(", clBracket: ")" }), react()],
});
```
