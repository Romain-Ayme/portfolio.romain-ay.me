// Fonction pour normaliser les dates
const normalizeDate = (project) => {
	// Si une date précise existe, l'utiliser
	if (project.date && project.date.trim() !== "") {
		return new Date(project.date);
	}
	// Si year existe mais pas date, créer une date au 1er janvier de l'année
	if (project.year) {
		return new Date(`${project.year}-01-01`);
	}
	// Cas par défaut (ne devrait pas arriver)
	return new Date(0);
};

// Projets avec dates standardisées
const projects = [
	{
		id: "jean-philippe-rey-architecte",
		title: "Jean-Philippe Rey Architecte",
		description: "Site web pour Jean-Philippe Rey Architecte",
		category: "siteweb",
		type: "pro",
		image: "/images/projects/jean-philippe-rey-architecte.webp",
		technologies: ["Nuxt 3", "SCSS", "TypeScript"],
		date: "2025-02-01",
		link: "https://reyjeanphilippe.fr/",
	},
	{
		id: "otake-productions",
		title: "Otaké Productions",
		description: "Site web pour Otaké Productions",
		category: "siteweb",
		type: "pro",
		image: "/images/projects/otake-productions.webp",
		technologies: ["Nuxt 3", "SCSS", "TypeScript"],
		date: "2025",
		link: "https://www.otake-productions.com/",
	},
	{
		id: "festival-couleurs-urbaines-2025",
		title: "Festival Couleurs Urbaines 2025",
		description: "Site web pour le Festival Couleurs Urbaines 2025",
		category: "siteweb",
		type: "pro",
		image: "/images/projects/festival-couleurs-urbaines-2025.webp",
		technologies: ["Nuxt 3", "SCSS", "TypeScript"],
		date: "2025-04-01",
		link: "https://www.festival-couleursurbaines.com/",
	},
	{
		id: "festival-couleurs-urbaines-2024",
		title: "Festival Couleurs Urbaines 2024",
		description: "Site web pour le Festival Couleurs Urbaines 2024",
		category: "siteweb",
		type: "pro",
		image: "/images/projects/festival-couleurs-urbaines-2024.webp",
		technologies: ["Wordpress", "Custom Theme", "PHP"],
		date: "2024",
	},
	{
		id: "culture-plus",
		title: "Culture Plus",
		description: "Site web pour Culture Plus",
		category: "siteweb",
		type: "pro",
		image: "/images/projects/culture-plus.webp",
		technologies: ["HTML", "CSS", "JavaScript"],
		date: "2024",
		link: "https://cultureplus-asso.fr/",
	},
	{
		id: "peyrerol",
		title: "Pâtisserie Peyrerol",
		description: "Site web pour la pâtisserie Peyrerol",
		category: "siteweb",
		type: "pro",
		image: "/images/projects/peyrerol.webp",
		technologies: ["Wordpress", "Custom Theme", "PHP"],
		date: "2023-09-01",
		link: "http://peyrerol.fr/",
	},
	{
		id: "star-wars",
		title: "Star Wars",
		description: "Projet wordpress fait en Master 1 ACNCC.",
		category: "siteweb",
		type: "cours",
		image: "/images/projects/star-wars.webp",
		technologies: ["Wordpress", "Custom Theme", "PHP"],
		date: "2023",
	},
	{
		id: "vanestarre",
		title: "Vanestarre",
		description: "Projet PHP fait en DUT informatique.",
		category: "siteweb",
		type: "cours",
		image: "/images/projects/vanestarre.webp",
		technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
		date: "2021",
		link: "https://github.com/Romain-Ayme/vanestarre",
	},
	{
		id: "chuck-norris",
		title: "Projet JS - Chuck Norris",
		description: "Projet JavaScript effectuer en DUT informatique.",
		category: "siteweb",
		type: "cours",
		image: "/images/projects/chuck-norris.webp",
		technologies: ["HTML", "CSS", "JavaScript"],
		date: "2021",
		link: "https://chuck.etud.romain-ayme.fr/",
	},
	{
		id: "steam-app",
		title: "Steam App",
		description: "Prototypage d'une nouvelle interface pour Steam",
		category: "prototypage",
		type: "cours",
		image: "/images/projects/steam-app.webp",
		technologies: ["Adobe XD"],
		date: "2021",
		link: "https://xd.adobe.com/view/de513cac-d5f3-4ff4-938a-fc9a33f48980-8b02/?fullscreen",
	},
	{
		id: "sunbrella",
		title: "Sunbrella",
		description:
			"Prototypage d'un site web pour une entreprise de vente de parasols fictive",
		category: "prototypage",
		type: "cours",
		image: "/images/projects/sunbrella.webp",
		technologies: ["Figma"],
		date: "2022",
		link: "https://www.figma.com/proto/s9JxQsdFcZrNuL5lk3vQU1/Site?page-id=0%3A1&node-id=49-1541&p=f&viewport=948%2C267%2C0.06&t=jhUd9t760s1VPi9H-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=53%3A3618",
	},
	{
		id: "inspecteur-cyber",
		title: "Fiction audio - Inspecteur Cyber",
		description:
			"Fiction audio réalisé dans le cadre d'un projet universitaire",
		category: "audiovisuelle",
		type: "cours",
		image: "/images/projects/inspecteur-cyber.webp",
		technologies: ["Adobe Audition"],
		date: "2023",
	},
	{
		id: "golden-fate",
		title: "Court métrage - Golden Fate",
		description:
			"Court métrage réalisé dans le cadre d'un projet universitaire",
		category: "audiovisuelle",
		type: "cours",
		image: "/images/projects/golden-fate.webp",
		technologies: ["Adobe Premiere Pro", "Adobe After Effects"],
		date: "2023",
	},
	{
		id: "la-mobilite-a-toulon",
		title: "Reportage - La mobilité à Toulon",
		description: "Reportage effectué lors d'un TD de 4h en L3 info com",
		category: "audiovisuelle",
		type: "cours",
		image: "/images/projects/la-mobilite-a-toulon.webp",
		technologies: ["Adobe Premiere Pro"],
		date: "2022",
	},
	{
		id: "persistance",
		title: "Processing - Persistance",
		description: "Projet Processing effectué en Master 1 ACNCC",
		category: "audiovisuelle",
		type: "cours",
		image: "/images/projects/persistance.webp",
		technologies: ["Processing", "C++", "Python"],
		date: "2023",
	},
	{
		id: "robot-3d",
		title: "Modélisation 3D Robot",
		description: "Modélisation 3D d'un robot",
		category: "3d",
		type: "cours",
		image: "/images/projects/robot-3d.webp",
		technologies: ["Maya", "3ds Max", "Substance 3D Painter"],
		date: "2022",
	},
    {
		id: "portfolio-2025",
		title: "Portfolio 2025",
		description: "Portfolio 2025",
		category: "siteweb",
		type: "pro",
		image: "/images/projects/portfolio-2025.webp",
		technologies: ["Nuxt 3", "SCSS", "TypeScript"],
		date: "2025-05-14",
		link: "https://portfolio.romain-ay.me/",
	},
];

// Trier les projets par date (du plus récent au plus ancien)
const sortedProjects = [...projects].sort((a, b) => {
	const dateA = normalizeDate(a);
	const dateB = normalizeDate(b);
	return dateB - dateA; // Tri décroissant (du plus récent au plus ancien)
});

export default sortedProjects;
