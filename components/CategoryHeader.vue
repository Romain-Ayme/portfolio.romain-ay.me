<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<div class="category-header">
		<div class="container">
			<div v-if="icon" class="category-icon-container">
				<Icon :name="icon" class="category-icon" />
			</div>
			<h1 class="category-title">{{ title }}</h1>
			<p v-if="description" class="category-description">{{ description }}</p>
		</div>
	</div>
</template>

<style scoped>
.category-header {
	background-color: #f9f9f9;
	padding: 3rem 0;
	margin-bottom: 2rem;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
	text-align: center;
}

.category-icon-container {
	margin-bottom: 1.5rem;
}

.category-icon {
	font-size: 3rem;
	color: #0070f3;
}

.category-title {
	font-size: 2.5rem;
	color: #333;
	margin-bottom: 1rem;
	font-weight: 700;
}

.category-description {
	max-width: 800px;
	margin: 0 auto;
	color: #666;
	font-size: 1.1rem;
	line-height: 1.6;
}

@media (max-width: 768px) {
	.category-header {
		padding: 2rem 0;
	}

	.category-title {
		font-size: 2rem;
	}

	.category-description {
		font-size: 1rem;
	}

	.category-icon {
		font-size: 2.5rem;
	}
}
</style>
