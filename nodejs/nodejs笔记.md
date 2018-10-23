# nodejs 基础命令

- global   node全局变量  || 相当于 js 中的 window

- process: 用于获取当前的Node进程信息,一般用于获取环境变量之类的信息

  -argv  属性返回一个数组, 用法: 第一个元素是process.execPath 第二个元素为当前执行的js文件路径, 剩余元素为其他命令行参数

  -stdin  输入

  -stdout 输出  process.stdout.write(文本内容);

  process.stdout.write('\033[2j');  清空控制台

  process.stdout.write('\033[0f');

  process.stdout.getWindowSize();

  