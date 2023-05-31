<template>
    <ul class="video-list">
        <li
            v-for="video in videos"
            :key="video.id"
            @click="selectVideo(video.id)"
        >
            <div
                :class="[
                    'video-item',
                    { active: video.id === selectedVideoId },
                ]"
            >
                <div class="video-thumbnail">
                    <div class="aspect-ratio-container">
                        <img :src="video.portada" alt="Video Thumbnail" />
                        <q-icon color="primary" size="xl" class="play-icon" name="play_arrow"></q-icon>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        videos: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            selectedVideoId: null,
        };
    },
    methods: {
        selectVideo(videoId) {
            this.$emit("videoSelected", videoId);
        },
        stopVideos() {
            // Lógica para detener la reproducción de los videos no seleccionados
            // Puedes usar la API de YouTube o cualquier otra librería que estés utilizando
        },
    },
};
</script>

<style scoped>
.video-list {
    display: inline-flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    list-style: none;
    margin: 0;
    padding: 0;
}
.video-item {
    cursor: pointer;
    list-style: none;
    max-height: 150px; /* Establece la altura máxima deseada */
    max-width: 300px; /* Establece el ancho máximo de cada elemento */
    overflow: hidden; /* Oculta el contenido que se desborde */
}
.aspect-ratio-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.aspect-ratio-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
