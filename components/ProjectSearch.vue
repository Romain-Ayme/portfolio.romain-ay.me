<script setup>
import projectsData from "@/data/projects";
const searchQuery = ref("");
const selectedYear = ref("");

// Extraire toutes les années uniques des projets, de la plus récente à la plus ancienne
const availableYears = computed(() => {
	const years = new Set();

	projectsData.forEach((project) => {
		if (project.date) {
			// Extraire l'année de la date (peut être au format YYYY ou YYYY-MM-DD)
			const year = project.date.substring(0, 4);
			years.add(year);
		}
		if (project.year) {
			years.add(project.year.toString());
		}
	});

	// Convertir le Set en tableau et trier par ordre décroissant (plus récent au plus ancien)
	return Array.from(years).sort((a, b) => b - a);
});

const emit = defineEmits(["search"]);

// Fonction pour émettre les critères de recherche
function updateSearch() {
	emit("search", {
		query: searchQuery.value,
		year: selectedYear.value,
	});
}

// Effectuer la recherche lorsque l'un des critères change
watch([searchQuery, selectedYear], updateSearch);

// Réinitialiser la recherche
function resetSearch() {
	searchQuery.value = "";
	selectedYear.value = "";
	updateSearch();
}
</script>

<template>
	<div class="search-container">
		<div class="search-input-container">
			<!-- Champ de recherche par nom -->
			<div class="search-field">
				<label for="search-input" class="search-label">Rechercher</label>
				<div class="input-wrapper">
					<input
						id="search-input"
						v-model="searchQuery"
						type="text"
						placeholder="Rechercher un projet..."
						class="search-input" />
					<Icon name="mdi:magnify" class="input-icon" />
				</div>
			</div>

			<!-- Sélecteur d'année -->
			<div class="year-select">
				<label for="year-select" class="search-label">Année</label>
				<div class="select-wrapper">
					<select id="year-select" v-model="selectedYear" class="year-dropdown">
						<option value="">Toutes</option>
						<option v-for="year in availableYears" :key="year" :value="year">
							{{ year }}
						</option>
					</select>
					<Icon name="mdi:calendar" class="select-icon" />
				</div>
			</div>

			<!-- Bouton de réinitialisation -->
			<button
				v-if="searchQuery || selectedYear"
				class="reset-button"
				aria-label="Réinitialiser la recherche"
				@click="resetSearch">
				<Icon name="mdi:close" class="reset-icon" />
			</button>
		</div>
	</div>
</template>

<style scoped>
.search-container {
	margin-bottom: 2rem;
}

.search-input-container {
	display: flex;
	align-items: flex-end;
	max-width: 700px;
	margin: 0 auto;
	gap: 1.25rem;
}

.search-field {
	flex: 1;
	display: flex;
	flex-direction: column;
}

.year-select {
	width: 180px;
	display: flex;
	flex-direction: column;
}

.search-label {
	font-size: 0.9rem;
	margin-bottom: 0.5rem;
	color: #555;
	font-weight: 500;
}

.input-wrapper,
.select-wrapper {
	position: relative;
	width: 100%;
}

.input-icon,
.select-icon {
	position: absolute;
	right: 1rem;
	top: 50%;
	transform: translateY(-50%);
	color: #666;
	font-size: 1.25rem;
	pointer-events: none;
}

.search-input,
.year-dropdown {
	width: 100%;
	padding: 0.75rem 1rem;
	padding-right: 2.5rem;
	border: 2px solid #eaeaea;
	border-radius: 8px;
	font-size: 1rem;
	transition: border-color 0.3s ease;
}

.year-dropdown {
	background-color: white;
	cursor: pointer;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
}

.search-input:focus {
	outline: none;
	border-color: #0070f3;
}

.year-dropdown:focus {
	outline: none;
	border-color: #0070f3;
}

.reset-button {
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background-color: #f0f0f0;
	transition: background-color 0.2s ease;
	margin-bottom: 0.25rem;
}

.reset-button:hover {
	background-color: #e0e0e0;
}

.reset-icon {
	font-size: 1.25rem;
	color: #666;
}

@media (max-width: 640px) {
	.search-input-container {
		flex-direction: column;
		align-items: stretch;
		gap: 1rem;
	}

	.year-select {
		width: 100%;
	}

	.reset-button {
		align-self: flex-end;
		margin-top: 0.5rem;
	}
}
</style>
