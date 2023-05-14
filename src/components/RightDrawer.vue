<script setup lang="ts">

export interface IRightDrawerProps {
    modelValue: boolean
}

const props = withDefaults(defineProps<IRightDrawerProps>(), {
    modelValue: false
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

</script>

<template>
    <Transition name="slide-fade">
        <div v-if="modelValue" class="right-drawer">

            <button class="favourite-container" @click.stop.prevent="emit('update:modelValue', false)">

                <span class="mdi mdi-close"></span>

            </button>
            <slot />
        </div>
    </Transition>
</template>


<style scoped>
.right-drawer {
    position: fixed;
    right: 0;
    top: 0;
    background-color: aliceblue;
    min-width: 400px;
    width: 400px;
    height: 100vh;
    max-height: 100vh;
    opacity: 95%;
    border-radius: 10px 0px 0px 10px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(400px);
}

.favourite-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 15px;
    left: 15px;
    background-color: aliceblue;
    padding: 2px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    border: 3px solid white;
    font-size: large;
    cursor: pointer;
    opacity: 90%;

}
</style>
