<script setup>
// Récupérer tous les projets et catégories depuis les fichiers JS
import projectsData from "@/data/projects";
import categoriesData from "@/data/categories";

const projects = ref(projectsData);
const categories = categoriesData.map((cat) => cat.id);

// Limiter les projets récents à 4 par catégorie
const recentProjects = computed(() => {
	const result = {};

	categories.forEach((categoryId) => {
		result[categoryId] = projects.value
			.filter((project) => project.category === categoryId)
			.sort((a, b) => new Date(b.date) - new Date(a.date))
			.slice(0, 2);
	});

	return result;
});

// Map des titres de catégories
const categoryTitles = categoriesData.reduce((acc, cat) => {
	acc[cat.id] = cat.title;
	return acc;
}, {});

// SEO
useHead({
	title: "Romain AYME - Portfolio Créatif",
	meta: [
		{
			name: "description",
			content:
				"Portfolio de Romain AYME présentant des projets web, prototypage, audiovisuel et 3D",
		},
	],
});
</script>

<template>
	<div>
		<HeroBanner />

		<section class="recent-projects">
			<div class="container">
				<h2 class="section-title">Projets récents</h2>

				<div
					v-for="(categoryProjects, categoryId) in recentProjects"
					:key="categoryId"
					class="category-section">
					<div class="category-header">
						<h3 class="category-title">
							{{ categoryTitles[categoryId] }}
						</h3>
						<nuxt-link :to="`/category/${categoryId}`" class="view-all">
							Voir tous les projets
						</nuxt-link>
					</div>

					<div class="projects-preview">
						<ProjectCard
							v-for="project in categoryProjects"
							:key="project.id"
							:project="project" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}

.recent-projects {
	padding: 6rem 0 3rem;
}

.section-title {
	text-align: center;
	font-size: 2rem;
	margin-bottom: 3rem;
	color: #333;
}

.category-section {
	margin-bottom: 4rem;
}

.category-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
}

.category-title {
	font-size: 1.5rem;
	color: #333;
}

.view-all {
	color: #0070f3;
	font-weight: 500;
	transition: color 0.3s ease;
}

.view-all:hover {
	color: #0051b3;
	text-decoration: underline;
}

.projects-preview {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
}

@media (max-width: 768px) {
	.projects-preview {
		grid-template-columns: 1fr;
	}

	.category-header {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}
}
</style>
