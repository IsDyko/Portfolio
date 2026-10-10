<script setup lang="ts">
import { Environment } from "@tresjs/cientos";
import { ref } from "vue";
import { useLoop } from "#imports";
import type { Mesh } from "three";

const ring1 = ref<Mesh | null>(null);
const ring2 = ref<Mesh | null>(null);
const ring3 = ref<Mesh | null>(null);

const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  if (ring1.value) {
    ring1.value.rotation.y += delta * 0.3;
  }
  if (ring2.value) {
    ring2.value.rotation.x += delta * 0.3;
  }
  if (ring3.value) {
    ring3.value.rotation.y += delta * 0.3;
    ring3.value.rotation.x += delta * 0.3;
  }
});
</script>
<template>
  <!-- CAMERA -->
  <TresPerspectiveCamera
    :position="[0.5, 2, 6]"
    :look-at="[0, 2, 0]"
  ></TresPerspectiveCamera>
  <!-- LIGHTS -->
  <TresAmbientLight color="#ffffff" :intensity="0.5" />
  <TresDirectionalLight color="#B8DDF5" :intensity="1" :position="[-3, 5, 5]" />
  <!-- RING -->
  <TresMesh ref="ring1" :position="[0, 2, 0]" :rotation="[0, 0, 0]">
    <TresTorusGeometry :args="[1.5, 0.15, 24, 96]" />
    <TresMeshPhysicalMaterial
      color="#9683ec"
      :roughness="0.05"
      :metalness="0"
      :transmission="0.5"
      :ior="1.5"
      :iridescence="0.7"
      :iridescence-thickness-range="[150, 150]"
    />
  </TresMesh>

  <TresMesh ref="ring2" :position="[0, 2, 0]" :rotation="[0, 0, 0]">
    <TresTorusGeometry :args="[1.2, 0.15, 24, 96]" />
    <TresMeshPhysicalMaterial
      color="#9683ec"
      :roughness="0.05"
      :metalness="0"
      :transmission="0.5"
      :ior="1.5"
      :iridescence="0.7"
      :iridescence-thickness-range="[150, 150]"
    />
  </TresMesh>

  <TresMesh ref="ring3" :position="[0, 2, 0]" :rotation="[0, 0, 0]">
    <TresTorusGeometry :args="[0.9, 0.15, 24, 96]" />
    <TresMeshPhysicalMaterial
      color="#9683ec"
      :roughness="0.05"
      :metalness="0"
      :transmission="0.5"
      :ior="1.5"
      :iridescence="0.7"
      :iridescence-thickness-range="[150, 150]"
    />
  </TresMesh>
  <!-- ENVIRONMENT -->
  <Suspense>
    <Environment preset="studio" />
  </Suspense>
  <!-- HELPERS -->
  <!-- <TresAxesHelper />
  <TresGridHelper /> -->
</template>
