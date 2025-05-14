<script setup>
const activeFilter = ref("all");

const filters = [
	{ id: "all", label: "Tous" },
	{ id: "pro", label: "Professionnels" },
	{ id: "cours", label: "Cours" },
];

const searchCriteria = ref({
	query: "",
	year: "",
});

const emit = defineEmits(["filter-change"]);

function changeFilter(filter) {
	activeFilter.value = filter;
	emitFilterChanges();
}

function handleSearch(criteria) {
	searchCriteria.value = criteria;
	emitFilterChanges();
}

function emitFilterChanges() {
	emit("filter-change", {
		type: activeFilter.value,
		query: searchCriteria.value.query,
		year: searchCriteria.value.year,
	});
}
</script>

<template>
	<div class="filters-container">
		<ProjectSearch @search="handleSearch" />

		<div class="filters">
			<button
				v-for="filter in filters"
				:key="filter.id"
				class="filter-button"
				:class="{ active: activeFilter === filter.id }"
				@click="changeFilter(filter.id)">
				{{ filter.label }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.filters-container {
	margin: 2rem 0;
}

.filters {
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 1.5rem;
}

.filter-button {
	background: none;
	border: 2px solid #eaeaea;
	border-radius: 30px;
	padding: 0.5rem 1.25rem;
	font-size: 0.9rem;
	font-weight: 500;
	color: #666;
	cursor: pointer;
	transition: all 0.3s ease;
}

.filter-button:hover {
	border-color: #0070f3;
	color: #0070f3;
}

.filter-button.active {
	background-color: #0070f3;
	border-color: #0070f3;
	color: white;
}

@media (max-width: 480px) {
	.filters {
		flex-wrap: wrap;
	}

	.filter-button {
		font-size: 0.8rem;
		padding: 0.4rem 1rem;
	}
}
</style>
