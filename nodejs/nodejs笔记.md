# nodejs 基础命令

- global   node全局变量  || 相当于 js 中的 window
- process: 用于获取当前的Node进程信息,一般用于获取环境变量之类的信息
  - argv  属性返回一个数组, 用法: 第一个元素是process.execPath 第二个元素为当前执行的js文件路径, 剩余元素为其他命令行参数