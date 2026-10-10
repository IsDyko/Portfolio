<script  setup lang="ts">
import { ref, onMounted } from 'vue';

const name:string = "Diogo."
let text = ref('');
let index = 0;
const speed:number = 150; // Adjust typing speed
let showCursor = ref(true)

function typeWriter() {
  if (index < name.length) {
    text.value += name.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
	else{
		setTimeout(() => {
        showCursor.value = false;
    }, 700);
	}
}

onMounted(typeWriter);

</script>
<template>
	<div class="hero-section">
		<div class="text-block">
		<p class="work">Développeur d'applications</p>
		<h1>Salut, moi c'est <span class="name" :class="{typing: showCursor}" id="name">{{ text }}</span></h1>
		<p class="description">Je transforme mes idées en expériences numériques</p>
		<button class="projects-button">Découvrir mes projets ↗</button>
		</div>
		<div class="scene-3d"></div>
	</div>

</template>
<style lang="css" scoped>
.hero-section {
	display: grid;
	grid-template-columns: 2fr 3fr;
	min-height: 80vh;
	align-items: center;
	max-width: 1200px;
	margin-inline: auto;
	padding-inline: 24px;
}

/* PRESENTATION */
.text-block {
	max-width: 400px;
}

h1 {
	font-family:"Bricolage Grotesque", sans-serif;
	font-size: 48px;
	margin: 0;
}

p {
	font-family: "Geist", sans-serif;
}

.name {
	color: #7567F8;
	display: block;
	width: fit-content;
	min-height: 1.1em;
}

	.typing {
		border-right: 0.15em solid #7567F8; /* cursor effect */
		animation: blink-caret 0.75s step-end infinite;
	}

.description {
	color: #6F6F73;
	font-size: 16px;
}

.work {
	color: #7567F8;
	text-transform: uppercase;
	font-size: 12px;
}

.projects-button{
	background-color: #7567F8 ;
	color: #FFFFFF;
	font-family: "Geist", sans-serif;
	font-size: 15px;
	font-weight: 600;
	border: 1px solid rgba(0,0,0,.06);
	box-shadow:  0 4px 16px rgba(0,0,0,.04);
	border-radius: 18px;
	padding: 16px;
	text-align: left;
	transition: box-shadow, transform;
	transition-duration: 200ms;
	transition-timing-function: ease;
	cursor: pointer;
}

.projects-button:hover {
	transform: translateY(-2px);
	box-shadow:  0 4px 16px rgba(0, 0, 0, 0.315);
	
}

@keyframes blink-caret {
    0%, 100% {
        border-color: #7567F8;
    }

    50% {
        border-color: transparent;
    }
}

/* RESPONSIVE */
@media (max-width: 768px){
	.hero-section{
		grid-template-columns: 1fr;
		min-height: auto;
		padding-inline: 24px;
		gap: 32px;
		padding-block: 20px;
		padding-top: 150px;
	}

	h1{
		font-size: 36px;
	}

	.text-block{
		max-width: 100%;
	}
}
</style>