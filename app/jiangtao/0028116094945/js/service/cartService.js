/**
 * Created by hxsd on 2016/11/17.
 *
 * 在angular.module("marsService");模块中注册一个单例的购物车对象(service)
 *
 * 这种单例对象在整个程序中只有一个，所以可以用它在各个控制器之前共享数据
 * 哪个控制器需要用它，就使用“依赖注入”将该对象注入到控制器中使用
 *
 * 在angular中创建service有多种方法，最常用的一个是.factory方法
 */
angular.module("marsService").factory("cartShop",function(){
    // 声明一个数组，保存购买的商品项-充当购物车的购物筐
    var cart = [];

    return{
        // 添加商品到购物车的方法
        add:function(product){
            for(var i=0;i<cart.length;i++){
                var item = cart[i];
                // 判断购物车中是否已经有了该商品
                if(item.product.name == product.name){
                    // 说明购物车中已经有了该商品，将该商品的购买数量+1
                    item.number++;
                    return; // 添加商品过程结束
                }
            }

            // 如果代码执行到这里，说明购物车中没有要添加的商品
            // 构造一个购买项item，加入到购物筐中
            cart.push({product:product,number:1});
        },
        // 从购物车中删除某种商品的方法
        remove:function(name){
            // 遍历购物筐，找到要删除的商品
            for(var i=0;i<cart.length;i++){
                var item = cart[i];
                // 判断购物车中是否已经有了该商品
                if(item.product.name == name){
                    // 说明找到了要删除的商品，将该商品的从数组中删除
                    cart.splice(i,1);
                    return; // 结束
                }
            }
        },
        // 获得购物车中所有商品的方法
        findAll:function(){
            return cart;
        },
        // 清空购物车
        clear:function(){
            cart.length = 0;
        }
    };
});