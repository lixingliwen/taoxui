<template>
    <button class="btn" @click="$emit('click')" :disabled="disabled" :class="['btn-'+type,{
        'btn-long':long
    }]" >
        <slot></slot>
        {{long}}
    </button>
</template>

<script>
    export default {
        name:'Button',
        props:{
            type:{
                type:String,
                default:'default'
            },
            long:{
                type:Boolean
            },
            disabled:{
                type:Boolean
            }
        }
    }
</script>

<style lang="less" scoped>
  @import "./var.less";
    .render(@color,@f,@r){
        background:@color;
        border-radius: @r;
        color:@f;
        border-color:@color;
        border-width: 1px;
        &:hover{
            background: lighten(@color,20%);
            transition:background 0.2s linear;
        }
    }
    .btn{
        border-style: solid;
        padding: 3px 7px;
        &.btn-default{
            .render(@Default,#495060,3px)
        }
        &.btn-success{
            .render(@Success,#fff,3px)
        }
        &.btn-error{
            .render(@Error,#fff,3px)
        }
        &.btn-info{
            .render(@Info,#fff,3px)
        }
        &.btn-warning{
            .render(@Warning,#fff,3px)
        }
        &.btn-primary{
            .render(@Primary,#fff,3px)
        }
        &.btn-long{
             display: block;
             width: 100%;
        }
    }
    
</style>