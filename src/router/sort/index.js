export default{
    path:"/sort",
    name:"sort",
    //按需加载引入  路由的懒加载
    component:()=>import("@pages/sort")
}