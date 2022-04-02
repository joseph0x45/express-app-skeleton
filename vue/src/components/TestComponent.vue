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
        <p>Bruh I love {{ number }} years olds</p>
        <p @click.stop>HAHAHA</p>
    </div>
</template>