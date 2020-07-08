<template>
<v-app style="padding-left:300px">
    
    <Header style="padding-left:325px" />
            <router-view style="padding-top:150px; padding-left:150px">

        </router-view>
    

</v-app>
</template>

<script>
import Header from './components/Header';

export default {
    name: 'App',

    components: {
        Header,
    },

    data: () => ({
        //
    }),
};
</script>
