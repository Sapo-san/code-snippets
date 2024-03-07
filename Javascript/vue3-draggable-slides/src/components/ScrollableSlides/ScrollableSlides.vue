<template>
    <div class="scrollableSlidesContainer">
        <div class="scrollableSlidesCenterer">
            <div
                class="scrollableSlides"
                @mousedown="startDrag"
                @mouseup="stopDrag"
                @mousemove="dragSlides"
                :style="`left: ${left}px;`"
                ref="scrollableSlides"
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
        const scrollableSlides = ref(null);
        return { scrollableSlides };
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
            isDown: false,
            startX: null,
            startY: null,
            scrollLeft: null,
            scrollTop: null,
        };
    },
    methods: {
        startDrag(e) {
            console.log(
                this.scrollableSlides.scrollLeft,
                this.scrollableSlides.scrollTop
            );
            this.isDown = true;
            this.startX = e.pageX - this.scrollableSlides.offsetLeft;
            this.startY = e.pageY - this.scrollableSlides.offsetTop;
            this.scrollLeft = this.scrollableSlides.scrollLeft;
            this.scrollTop = this.scrollableSlides.scrollTop;
            this.scrollableSlides.style.cursor = "grabbing";
        },
        stopDrag() {
            this.isDown = false;
            this.scrollableSlides.style.cursor = "grab";
        },
        dragSlides(e) {
            if (!this.isDown) return;
            e.preventDefault();
            const x = e.pageX - this.scrollableSlides.offsetLeft;
            const y = e.pageY - this.scrollableSlides.offsetTop;
            console.log(`${x} ${y}`);
            const walkX = (x - this.startX) * 1; // Change this number to adjust the scroll speed
            const walkY = (y - this.startY) * 1; // Change this number to adjust the scroll speed
            console.log(
                this.scrollLeft,
                walkX,
                "<<",
                this.scrollableSlides.scrollLeft,
                this.scrollableSlides.scrollTop
            );
            this.scrollableSlides.scrollLeft = this.scrollLeft - walkX;
            this.scrollableSlides.scrollTop = this.scrollTop - walkY;
            console.log(
                ">>",
                this.scrollableSlides.scrollLeft,
                this.scrollableSlides.scrollTop
            );
        },
    },
};
</script>
<style src="./ScrollableSlides.scss"></style>
