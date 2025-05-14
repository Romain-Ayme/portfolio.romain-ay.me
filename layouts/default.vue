<template>
	<div class="layout">
		<TheHeader />
		<main class="main-content">
			<slot />
		</main>
		<TheFooter />
	</div>
</template>

<style>
html {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, sans-serif;
	box-sizing: border-box;
	font-size: 16px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

body {
	background-color: #fcfcfc;
	color: #333;
	line-height: 1.6;
}

.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.main-content {
	flex: 1;
}

a {
	color: #0070f3;
	text-decoration: none;
}

img {
	max-width: 100%;
	height: auto;
}
</style>
