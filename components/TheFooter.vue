<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-content">
				<div class="footer-logo">
					<h2>Romain AYME</h2>
					<p>Portfolio professionnel</p>
				</div>
				<div class="footer-contact">
					<h3>Contact</h3>
					<a href="mailto:contact@romain-ayme.fr" class="contact-link">
						<Icon name="mdi:email" class="contact-icon" />
						contact@romain-ayme.fr
					</a>
				</div>
				<div class="footer-social">
					<h3>Réseaux sociaux</h3>
					<div class="social-links">
						<a
							href="https://www.linkedin.com/in/romain-ayme/"
							target="_blank"
							class="social-link">
							<Icon name="mdi:linkedin" class="social-icon" />
							LinkedIn
						</a>
						<a
							href="https://github.com/romain-ayme"
							target="_blank"
							class="social-link">
							<Icon name="mdi:github" class="social-icon" />
							GitHub
						</a>
					</div>
				</div>
			</div>
			<div class="footer-copyright">
				<p>
					&copy; {{ new Date().getFullYear() }} Romain AYME. Tous droits
					réservés.
				</p>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	background-color: #f9f9f9;
	padding: 3rem 0 1rem;
	margin-top: 4rem;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}

.footer-content {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-bottom: 2rem;
}

.footer-logo h2 {
	font-size: 1.5rem;
	color: #0070f3;
	margin-bottom: 0.5rem;
}

.footer-logo p {
	color: #666;
}

.footer-contact h3,
.footer-social h3 {
	font-size: 1.125rem;
	margin-bottom: 1rem;
	color: #333;
}

.contact-link,
.social-link {
	display: flex;
	align-items: center;
	color: #666;
	text-decoration: none;
	transition: color 0.3s ease;
	margin-bottom: 0.5rem;
}

.contact-link:hover,
.social-link:hover {
	color: #0070f3;
}

.contact-icon,
.social-icon {
	margin-right: 0.5rem;
	font-size: 1.25rem;
}

.social-links {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.footer-copyright {
	border-top: 1px solid #eaeaea;
	padding-top: 1rem;
	text-align: center;
	color: #888;
	font-size: 0.875rem;
}
</style>
