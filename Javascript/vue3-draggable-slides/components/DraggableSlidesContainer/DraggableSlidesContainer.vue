<template>
    <div class="draggableSlidesContainer">
        <div
            class="draggableSlides"
            @mousedown="startDrag"
            @mouseup="stopDrag"
            @mousemove="dragSlides"
            :style="`left: ${left}px;`"
            ref="draggableSlides"
        >
            <DraggableSlide
                v-for="slide in slides"
                :image="sampleImage"
                :title="slide.title"
                :text="slide.text"
            ></DraggableSlide>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
import DraggableSlide from "../DraggableSlide/DraggableSlide.vue";
export default {
    name: "DraggableSlidesContainer",
    components: {
        DraggableSlide,
    },
    setup() {
        const draggableSlides = ref(null);
        return { draggableSlides };
    },
    mounted() {
        window.addEventListener("mouseup", () => {
            this.dragging = false;
        });
    },
    data() {
        return {
            sampleImage:
                "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww",
            slides: [
                { title: "Slide 1", text: "Sample text for slide 1." },
                { title: "Slide 2", text: "Sample text for slide 2." },
                { title: "Slide 3", text: "Sample text for slide 3." },
                { title: "Slide 4", text: "Sample text for slide 4." },
                { title: "Slide 5", text: "Sample text for slide 5." },
                { title: "Slide 6", text: "Sample text for slide 6." },
                { title: "Slide 7", text: "Sample text for slide 7." },
            ],
            dragging: false,
            left: 0,
            initialContainerPos: 0,
            initialMousePos: null,
        };
    },
    methods: {
        startDrag(e) {
            this.dragging = true;
            this.initialMousePos = e.offsetX;
        },
        stopDrag() {
            this.dragging = false;
        },
        dragSlides(e) {
            if (!this.dragging) return; // si no hay drag, terminar

            // Calculamos movimiento
            this.amountToMoveContainer = e.offsetX - this.initialMousePos;

            let newLeft = this.left + this.amountToMoveContainer;

            // Verificamos si está dentro de los limites
            let maxLimit = 0;
            let minLimit =
                this.draggableSlides.getBoundingClientRect().width / -2;

            if (newLeft <= maxLimit && newLeft >= minLimit) {
                this.left = newLeft;
            }
        },
    },
};
</script>
<style src="./DraggableSlidesContainer.scss"></style>
