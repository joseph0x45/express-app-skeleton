<script>
export default {
    data(){
        return {
            number: 90
        }
    }
}
</script>

<template>
    <div @click="number--">
        <p @click.stop>HAHAHA</p>
    </div>
</template>