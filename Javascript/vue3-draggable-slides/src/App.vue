<template>
    <div class="page">
        <h1>Draggable Slides V1</h1>
        <DraggableSlidesContainer></DraggableSlidesContainer>
        <h1>Draggable Slides V2</h1>
        <ScrollableSlides></ScrollableSlides>
    </div>
</template>

<script>
import DraggableSlidesContainer from "./components/DraggableSlidesContainer/DraggableSlidesContainer.vue";
import ScrollableSlides from "./components/ScrollableSlides/ScrollableSlides.vue";
export default {
    name: "Draggable Slides",
    components: {
        DraggableSlidesContainer: DraggableSlidesContainer,
        ScrollableSlides: ScrollableSlides,
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
