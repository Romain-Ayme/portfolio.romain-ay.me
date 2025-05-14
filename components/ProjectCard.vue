<script setup>
defineProps({
	project: {
		type: Object,
		required: true,
	},
});

// Fonction pour extraire l'année d'une date
const getYear = (dateString) => {
	return new Date(dateString).getFullYear();
};
</script>

<template>
	<div class="project-card">
		<img :src="project.image" :alt="project.title" class="project-image" />
		<div class="project-content">
			<h3 class="project-title">{{ project.title }}</h3>
			<p class="project-description">{{ project.description }}</p>
			<div class="project-meta">
				<span class="project-year">{{ getYear(project.date) }}</span>
				<span class="project-type" :class="project.type">
					{{ project.type === "pro" ? "Professionnel" : "Cours" }}
				</span>
			</div>
			<div class="project-technologies">
				<span
					v-for="tech in project.technologies"
					:key="tech"
					class="technology-tag">
					{{ tech }}
				</span>
			</div>
			<a
				v-if="project.link"
				:href="project.link"
				target="_blank"
				class="project-link">
				Voir le projet
			</a>
		</div>
	</div>
</template>

<style scoped>
.project-card {
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;
	background: white;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.project-card:hover {
	transform: translateY(-5px);
}

.project-image {
	width: 100%;
	height: 200px;
	object-fit: cover;
	object-position: top;
}

.project-content {
	padding: 1.5rem;
	flex: 1;
	display: flex;
	flex-direction: column;
}

.project-title {
	font-size: 1.25rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
}

.project-description {
	color: #666;
	margin-bottom: 1rem;
	flex: 1;
}

.project-meta {
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
}

.project-year {
	color: #888;
}

.project-type {
	font-size: 0.875rem;
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
	font-weight: 500;
}

.project-type.pro {
	background-color: #e6f7ff;
	color: #0070f3;
}

.project-type.cours {
	background-color: #fff7e6;
	color: #fa8c16;
}

.technology-tag {
	display: inline-block;
	background: #f1f1f1;
	color: #333;
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
	font-size: 0.75rem;
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
}

.project-link {
	display: inline-block;
	background: #0070f3;
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	text-decoration: none;
	margin-top: 1rem;
	text-align: center;
	font-weight: 500;
	transition: background-color 0.3s ease;
}

.project-link:hover {
	background: #0051b3;
}

.project-technologies {
	margin-top: 0.5rem;
}
</style>
