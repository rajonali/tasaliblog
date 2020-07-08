<template>
    <div>
<Post />
<br />
   <center><button>View all ></button></center>
    </div>
</template>

<script>
import Post from './Post';


    export default {
        components:{Post},
    name:'PaginatedPosts'    
    }
</script>

<style lang="scss" scoped>

</style>