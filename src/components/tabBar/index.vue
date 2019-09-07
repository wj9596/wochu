<template>
    <div id="footer">
        <ul>
            <router-link 
                :to="item.path"
                tag="li"
                v-for="(item,index) in tabBars" 
                :key="index">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            tabBars:[
                {
                    icon:"&#xe717;",
                    title:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe717;",
                    title:"分类",
                    path:"/sort"
                },
                {
                    icon:"&#xe717;",
                    title:"购物车",
                    path:"/cart"
                },
                {
                    icon:"&#xe605;",
                    title:"我的",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>

<style>
    #footer{
        width: 100%;
        height: 0.44rem;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: 1px solid #ccc;
    }
    #footer ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #footer ul li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #footer ul .router-link-active{
        color: #c33;
    }
    #footer ul li i{
        font-size: 0.15rem;
    }
    #footer ul li span{
        font-size: 0.15rem;
    }
</style>