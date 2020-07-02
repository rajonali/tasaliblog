<template>
<div>
    <h1>Featured Posts</h1>
    <Post />
    <button>View all ></button>
</div>
</template>

<script>
import Post from './Post'

export default {

    name: 'FeaturedPosts',
    components:{Post},
    data() {


        return {
            error: '',
            posts:[],
        }

    },

    methods: {
        //
    }
}
</script>

<style lang="scss" scoped>

</style>
