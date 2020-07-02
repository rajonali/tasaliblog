<template>
<div>
    <h1>{{title}}</h1>
    <h2>{{author}}</h2>
    <p>{{body}}</p>

</div>
</template>

<script>
export default {


    name: 'Post',
    data() {


        return {
            error: '',
            title: 'title',
            body: 'body',
            author: 'author',
        }

    },

    methods: {
        //
    }
}
</script>

<style lang="scss" scoped>

</style>
