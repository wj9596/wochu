export default{
    path:"/cart",
    name:"cart",
    //按需加载引入  路由的懒加载
    component:()=>import("@pages/cart")
}