<template>
    <div class="page">
        <h1>Draggable Slides</h1>
        <DraggableSlidesContainer></DraggableSlidesContainer>
    </div>
</template>

<script>
import DraggableSlidesContainer from "./components/DraggableSlidesContainer/DraggableSlidesContainer.vue";
export default {
    name: "Draggable Slides",
    components: {
        DraggableSlidesContainer: DraggableSlidesContainer,
    },
};
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
    background-color: rgb(182, 244, 255);
    overflow: hidden;
}

.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
