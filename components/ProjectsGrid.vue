<script setup>
defineProps({
	projects: {
		type: Array,
		required: true,
	},
	filter: {
		type: Object,
		default: () => ({
			type: "all",
			query: "",
			year: "",
		}),
	},
});
</script>

<template>
	<div class="projects-container">
		<div v-if="projects.length === 0" class="no-projects">
			<p>Aucun projet à afficher</p>
		</div>
		<div v-else class="projects-grid">
			<ProjectCard
				v-for="project in projects"
				:key="project.id"
				:project="project"
				class="project-item" />
		</div>
	</div>
</template>

<style scoped>
.projects-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}

.projects-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
	margin: 2rem 0;
}

.no-projects {
	text-align: center;
	padding: 3rem 0;
	color: #666;
}

@media (max-width: 768px) {
	.projects-grid {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1.5rem;
	}
}

@media (max-width: 480px) {
	.projects-grid {
		grid-template-columns: 1fr;
	}
}
</style>
