<template>
    <div class="root">
        <button class="selected" @click="handleClick">
            {{ computedFlag }}
        </button>
        <div v-if="opened" class="options">
            <div class="option" v-for="(option, index) in options" :key="index" @click="handleSelectOption(option.value)">
                {{ option.icon }} {{ t(option.name) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue"
import { useI18n } from 'vue-i18n'

export interface IFlagSelectOption {
    name: string,
    value: string,
    icon: string
}

export interface IFlagSelectProps {
    options: Array<IFlagSelectOption>,
    modelValue: string
}

const props = withDefaults(defineProps<IFlagSelectProps>(), {
    options: () => [],
    modelValue: ""

})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const { t } = useI18n()
const opened = ref(false)

const handleClick = () => {
    opened.value = !opened.value
}

const handleSelectOption = (option: string) => {
    opened.value = false
    emit("update:modelValue", option)
}

const computedFlag = computed(() => {
    for (var option of props.options) {
        if (option.value === props.modelValue) {
            return option.icon
        }
    }
    return ""
})

const computedName = computed(() => {
    for (var option of props.options) {
        if (option.value === props.modelValue) {
            return option.name
        }
    }
    return ""
})

</script>

<style scoped>
.root {
    position: relative;
}

.selected {
    width: 35px;
    height: 35px;
    background-color: aliceblue;
    border: 3px solid white;
    border-radius: 100%;
    font-size: large;
}

.selected:hover {
    filter: brightness(90%);
    cursor: pointer;

}

.options {
    position: absolute;
    right: 5px;
    top: 37px;
    background-color: aliceblue;
    min-width: 110px;
    border-radius: 10px;
    border: 1px solid white;
    padding: 5px;
    box-shadow: 5px 5px 5px rgb(244, 244, 244);
}


.option {
    font-size: medium;
    padding: 10px;
    border-radius: 10px;
}

.option:hover {
    cursor: pointer;
    background-color: white;
}

</style>