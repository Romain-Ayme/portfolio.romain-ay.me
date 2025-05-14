<script setup>
import categoriesData from "@/data/categories";
</script>

<template>
	<div class="hero-banner">
		<div class="container">
			<div class="hero-content">
				<h1 class="hero-title">Romain AYME</h1>
				<h2 class="hero-subtitle">Portfolio Créatif</h2>
				<p class="hero-description">
					Bienvenue sur mon portfolio présentant mes projets dans les domaines
					du web, du prototypage, de l'audiovisuel et de la 3D.
				</p>
				<div class="hero-buttons">
					<nuxt-link to="/category/siteweb" class="hero-button primary">
						Voir mes projets
					</nuxt-link>
					<a href="mailto:contact@romain-ayme.fr" class="hero-button secondary">
						Me contacter
					</a>
				</div>
			</div>
			<div class="hero-categories">
				<div class="category-cards">
					<nuxt-link
						v-for="category in categoriesData"
						:key="category.id"
						:to="`/category/${category.id}`"
						class="category-card">
						<div class="icon-container">
							<Icon :name="category.icon" class="category-icon" />
						</div>
						<h3>{{ category.title }}</h3>
						<p>{{ category.description }}</p>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.hero-banner {
	background: linear-gradient(135deg, #0070f3 0%, #00c8ff 100%);
	color: white;
	padding: 4rem 0 6rem;
	margin-bottom: -4rem;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}

.hero-content {
	text-align: center;
	max-width: 800px;
	margin: 0 auto 4rem;
}

.hero-title {
	font-size: 3rem;
	font-weight: 800;
	margin-bottom: 0.5rem;
}

.hero-subtitle {
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 1.5rem;
	opacity: 0.9;
}

.hero-description {
	font-size: 1.125rem;
	line-height: 1.6;
	margin-bottom: 2rem;
	opacity: 0.8;
}

.hero-buttons {
	display: flex;
	justify-content: center;
	gap: 1rem;
}

.hero-button {
	padding: 0.75rem 1.5rem;
	border-radius: 5px;
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;
}

.hero-button.primary {
	background-color: white;
	color: #0070f3;
}

.hero-button.primary:hover {
	background-color: #f1f1f1;
	transform: translateY(-2px);
}

.hero-button.secondary {
	background-color: transparent;
	border: 2px solid white;
	color: white;
}

.hero-button.secondary:hover {
	background-color: rgba(255, 255, 255, 0.1);
	transform: translateY(-2px);
}

.category-cards {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	margin-top: 2rem;
}

.category-card {
	background-color: white;
	border-radius: 8px;
	padding: 2rem 1.5rem;
	text-align: center;
	color: #333;
	text-decoration: none;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.icon-container {
	margin-bottom: 1rem;
}

.category-icon {
	font-size: 2.5rem;
	color: #0070f3;
}

.category-card h3 {
	font-size: 1.25rem;
	margin-bottom: 0.5rem;
	color: #0070f3;
}

.category-card p {
	font-size: 0.875rem;
	color: #666;
}

@media (max-width: 992px) {
	.category-cards {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 768px) {
	.hero-title {
		font-size: 2.5rem;
	}

	.hero-subtitle {
		font-size: 1.25rem;
	}

	.hero-buttons {
		flex-direction: column;
	}

	.hero-button {
		width: 100%;
	}
}

@media (max-width: 480px) {
	.category-cards {
		grid-template-columns: 1fr;
	}

	.hero-banner {
		padding: 3rem 0 5rem;
	}
}
</style>
