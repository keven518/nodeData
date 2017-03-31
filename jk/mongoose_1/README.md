# nodeData

Node.js 实践：Mongoose 使用进阶

模式的扩展
默认值的类型（demo1）
1、固定值
2、即时生成

模式修饰符：
1、预定义的模式修饰符 （去除字符串两头空格，字符串大写转成小写）
2、自定义setter修饰符 （数据存入数据库之前，创建模型的时候用到它） demo2
3、自定义getter修饰符 （从数据库里拿到文档，把文档转化成模型的时候会执行的） demo3

虚拟属性（不需要存储到数据库里面的数据） demo4
1、Schema.virtual()
2、转化为JSON

索引
1、索引的目的
2、唯一索引
3、辅助索引

模型的方法
1、方法的分类
2、自定义静态方法
3、自定义实例方法

数据的校验
1、预定义的验证器：required(所有类型),Number(max,min),String(enum(枚举验证器),match)
2、自定义的验证器

中间件
1、类型
文档中间件(init/validate/save/remove)
查询中间件(count/find/findOne/findOneAndRemove/findOneAndUpdate/update)
预处理中间件
后置处理中间件