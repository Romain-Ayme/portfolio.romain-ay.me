<script setup>
import categoriesData from "@/data/categories";
import projectsData from "@/data/projects";

const route = useRoute();
const category = computed(() => route.params.category);

// Map des catégories pour l'affichage - version simplifiée sans computed
const categoryInfo = {};
categoriesData.forEach((cat) => {
	categoryInfo[cat.id] = {
		title: cat.title,
		description: cat.description,
		icon: cat.icon,
	};
});

// Récupérer les projets
const projects = ref(projectsData);
const filteredProjects = ref([]);
const activeFilters = ref({
	type: "all",
	query: "",
	year: "",
});

onMounted(() => {
	applyFilters();
});

// Filtrer les projets par catégorie, type, recherche par nom et année
function applyFilters() {
	// Filtrer d'abord par catégorie (toujours appliqué)
	let result = projects.value.filter((p) => p.category === category.value);

	// Filtrer par type si nécessaire
	if (activeFilters.value.type !== "all") {
		result = result.filter((p) => p.type === activeFilters.value.type);
	}

	// Filtrer par recherche textuelle si une requête est définie
	if (activeFilters.value.query) {
		const query = activeFilters.value.query.toLowerCase();
		result = result.filter(
			(p) =>
				p.title.toLowerCase().includes(query) ||
				(p.description && p.description.toLowerCase().includes(query))
		);
	}

	// Filtrer par année si spécifiée
	if (activeFilters.value.year) {
		// Permet de filtrer aussi bien avec une date complète qu'une année seule
		result = result.filter((p) => {
			// Vérifier si le projet a une date ou une année
			if (p.date) {
				return p.date.includes(activeFilters.value.year);
			} else if (p.year) {
				return p.year.toString() === activeFilters.value.year;
			}
			return false;
		});
	}

	filteredProjects.value = result;
}

// Mettre à jour les filtres et appliquer
function updateFilters(filters) {
	activeFilters.value = filters;
	applyFilters();
}

// SEO
useHead(() => ({
	title: `${categoryInfo[category.value]?.title || "Projets"} - Romain AYME`,
	meta: [
		{
			name: "description",
			content:
				categoryInfo[category.value]?.description || "Portfolio de Romain AYME",
		},
	],
}));
</script>

<template>
	<div>
		<CategoryHeader
			:title="categoryInfo[category]?.title || 'Projets'"
			:description="categoryInfo[category]?.description || ''"
			:icon="categoryInfo[category]?.icon" />

		<div class="category-container">
			<ProjectFilters @filter-change="updateFilters" />

			<ProjectsGrid :projects="filteredProjects" :filter="activeFilters" />
		</div>
	</div>
</template>

<style scoped>
.category-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}
</style>
