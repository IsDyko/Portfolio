<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
	href: string;
	label: string;
	icon: string;
}>();

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
	<li>
		<a
			:href="props.href"
			class="nav-link"
			v-on="navEvents"
			:data-active="isHovered || isKeyboardFocused"
			><lord-icon
				:src="props.icon"
				target="a"
				trigger="follow(data-active)"
				class="nav-icon"
			></lord-icon
			><span class="nav-label">{{ props.label }}</span></a
		>
	</li>
</template>
<style lang="css" scoped>
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

.nav-link {
	display: flex;
	align-items: center;
	justify-content: safe center;
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
	font-family: "Geist", sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.4;

	transition-property: opacity, transform;
	transition-duration: 250ms;
	transition-timing-function: ease;
}
</style>
