<template>
    <div> 
        <button>按钮</button>
        <h1>这是一个标题</h1>
        <h1>这是一个标题</h1>
        <h1>33</h1>
        <h1>{{key}}</h1>
        <img src="../image/logo.jpg" alt="">
    </div>
        
    
</template>

<script>
    export default {
        name:'App',
        data() {
            return {
                key: "涒fcu"
            }
        },
    }
</script>

<style lang = "less">
    button{
        background: rgb(224, 224, 160);
        width: 200px;
        height: 50px;
        border-radius: 10%;
    }
</style>