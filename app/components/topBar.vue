<script setup lang="ts">
import { ref } from "vue";

const isHovered = ref(false);
const isKeyboardFocused = ref(false);

const navEvents = {
	pointerenter: () => (isHovered.value = true),
	pointerleave: () => (isHovered.value = false),
	focus: handleFocus,
	blur: () => (isKeyboardFocused.value = false),
};

function handleFocus(event: FocusEvent) {
	const element = event.currentTarget;
	if (element instanceof HTMLElement) {
		isKeyboardFocused.value = element.matches(":focus-visible");
	}
}
</script>
<template>
	<nav class="topbar">
		<ul class="nav-list">
			<li><a href="#accueil">Accueil</a></li>
			<li>
				<a
					href="#projets"
					class="nav-link"
					id="nav-projets"
					v-on="navEvents"
					:data-active="isHovered || isKeyboardFocused"
					><lord-icon
						src="/icons/projets.json"
						target="#nav-projets"
						trigger="follow(data-active)"
						class="nav-icon"
					></lord-icon
					><span class="nav-label">Projets</span></a
				>
			</li>
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
	background-color: #ffffff;
	border-radius: 18px;
	z-index: 100;
}

a {
	text-decoration: none;
}

.nav-link:hover,
.nav-link:focus-visible {
	width: 128px;
	background-color: #eeeafe;

	.nav-label {
		opacity: 1;
		transform: translateX(0);
	}
}

.nav-list {
	display: flex;
	align-items: center;
	gap: 8px;
	list-style: none;
	padding: 0;
	margin: 0;
}

.nav-link {
	display: flex;
	align-items: center;
	gap: 8px;
	height: 48px;
	padding: 8px;
	border-radius: 12px;
	color: #171717;
	box-sizing: border-box;
	width: 48px;
	overflow: hidden;

	transition-property: width, background-color;
	transition-duration: 250ms;
	transition-timing-function: ease;
}

.nav-icon {
	flex-shrink: 0;
	width: 32px;
	height: 32px;
}

.nav-label {
	white-space: nowrap;
	flex-shrink: 0;
	opacity: 0;
	transform: translateX(-8px);

	transition-property: opacity, transform;
	transition-duration: 250ms;
	transition-timing-function: ease;
}
</style>
