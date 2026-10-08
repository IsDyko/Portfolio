<script setup lang="ts">
type NavLink = {
	href: string;
	label: string;
	icon: string;
};

const navLinks: NavLink[] = [
	{ href: "#accueil", label: "Home", icon: "/icons/accueil.json" },
	{ href: "#projets", label: "Projects", icon: "/icons/projets.json" },
	{ href: "#a-propos", label: "About me", icon: "/icons/a-propos.json" },
	{ href: "#parcours", label: "Path", icon: "/icons/parcours.json" },
	{ href: "#homelab", label: "Homelab", icon: "/icons/homelab.json" },
	{ href: "#contact", label: "Contact", icon: "/icons/contact.json" },
];
</script>
<template>
	<nav class="topbar">
		<ul class="nav-list">
			<NavItem
				v-for="link in navLinks"
				:key="link.href"
				v-bind="link"
			></NavItem>
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
	background-color: #ffffff;
	border-radius: 18px;
	z-index: 100;
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
