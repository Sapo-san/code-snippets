<template>
    <div class="draggableSlide">
        <img :src="image" class="dsImage" />
        <div class="dsContent">
            <h1 class="dsTitle">{{ title }}</h1>
            <p class="dsText">{{ text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "draggableSlide",
    props: {
        title: String,
        image: String,
        text: String,
    },
};
</script>
<style src="./DraggableSlide.scss"></style>
