<script setup></script>
<template>
	<nav class="topbar">
		<ul class="nav-list">
			<li><a href="#accueil">Accueil</a></li>
			<li><a href="#projets">Projets</a></li>
			<li><a href="#a-propos">A propos</a></li>
			<li><a href="#parcours">Parcours</a></li>
			<li><a href="#homelab">Homelab</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
</template>
<style scoped>
.topbar {
	position: fixed;
	top: 24px;
	left: 50%;
	transform: translate(-50%);
	width: max-content;
	padding: 8px;
	background-color: #FFFFFF;
	border-radius: 18px;
	z-index: 100;
}

a {
	text-decoration: none;
}

.nav-list {
	display: flex;
	align-items: center;
	gap: 8px;
	list-style: none;
	padding: 0;
	margin: 0;
}
</style>
