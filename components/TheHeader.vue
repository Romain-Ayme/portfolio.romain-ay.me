<script setup>
const routes = [
	{ name: "Accueil", path: "/" },
	{ name: "Sites Web", path: "/category/siteweb" },
	{ name: "Prototypage", path: "/category/prototypage" },
	{ name: "Audiovisuel", path: "/category/audiovisuelle" },
	{ name: "3D", path: "/category/3d" },
];
</script>

<template>
	<header class="header">
		<div class="container">
			<nuxt-link to="/" class="logo">
				<h1>Romain AYME</h1>
			</nuxt-link>
			<nav class="nav">
				<ul class="nav-list">
					<li v-for="route in routes" :key="route.path" class="nav-item">
						<nuxt-link :to="route.path" class="nav-link">
							{{ route.name }}
						</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style scoped>
.header {
	background-color: #ffffff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 100;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.header-right {
	display: flex;
	align-items: center;
	gap: 1.5rem;
}

.logo {
	text-decoration: none;
	color: #0070f3;
}

.logo h1 {
	font-size: 1.5rem;
	font-weight: 700;
	margin: 0;
}

.nav-list {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
}

.nav-item {
	margin-left: 1.5rem;
}

.nav-link {
	text-decoration: none;
	color: #333;
	font-weight: 500;
	padding: 0.5rem 0;
	position: relative;
	transition: color 0.3s ease;
}

.nav-link:hover {
	color: #0070f3;
}

.nav-link::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 2px;
	background-color: #0070f3;
	transition: width 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
	width: 100%;
}

.router-link-active {
	color: #0070f3;
}

.social-nav {
	display: flex;
	gap: 1rem;
}

.social-link {
	color: #333;
	transition: color 0.3s ease;
}

.social-link:hover {
	color: #0070f3;
}

.social-icon {
	font-size: 1.5rem;
}

@media (max-width: 768px) {
	.container {
		flex-direction: column;
		align-items: flex-start;
	}

	.header-right {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		gap: 1rem;
	}

	.nav {
		margin-top: 1rem;
		width: 100%;
	}

	.nav-list {
		flex-wrap: wrap;
	}

	.nav-item {
		margin-left: 0;
		margin-right: 1rem;
		margin-bottom: 0.5rem;
	}

	.social-nav {
		margin-top: 0.5rem;
	}
}
</style>
