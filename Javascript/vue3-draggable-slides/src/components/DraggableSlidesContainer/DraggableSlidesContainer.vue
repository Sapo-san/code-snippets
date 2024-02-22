<template>
    <div class="draggableSlidesContainer">
        <div class="draggableSlidesCenterer">
            <div
                class="draggableSlides"
                @mousedown="startDrag"
                @mouseup="stopDrag"
                @mousemove="dragSlides"
                @touchstart="startDrag"
                @touchend="stopDrag"
                @touchmove="dragSlides"
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
        window.addEventListener("touchend", () => {
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

            if (e.type === "touchstart") {
                // Get the position of the target element
                const rect = this.$refs.draggableSlides.getBoundingClientRect();

                // Calculate the relative position of the touch within the element
                const touch = e.touches[0];
                this.initialMousePos = touch.clientX - rect.left;
            } else if (e.type === "mousedown") {
                this.initialMousePos = e.offsetX;
            }
        },
        stopDrag() {
            this.dragging = false;
        },
        dragSlides(e) {
            if (!this.dragging) return; // si no hay drag, terminar

            // Calculamos movimiento
            if (e.type.includes("touch")) {
                // Caso Touch
                const rect = this.$refs.draggableSlides.getBoundingClientRect();
                const touch = e.touches[0];
                let offsetX = touch.clientX - rect.left;

                this.amountToMoveContainer = offsetX - this.initialMousePos;
            } else if (e.type.includes("mouse")) {
                // Caso Mouse
                this.amountToMoveContainer = e.offsetX - this.initialMousePos;
            }

            let newLeft = this.left + this.amountToMoveContainer;
            console.log("newleft", newLeft);

            // Verificamos si está dentro de los limites
            let maxLimit = 0;
            let minLimit =
                this.draggableSlides.getBoundingClientRect().width * -1 +
                200 + // Ancho de la slide en px
                16; // margen y padding?

            if (newLeft <= maxLimit && newLeft >= minLimit) {
                this.left = newLeft;
            }

            console.log("left", this.left);
        },
    },
};
</script>
<style src="./DraggableSlidesContainer.scss"></style>
