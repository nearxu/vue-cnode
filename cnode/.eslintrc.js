// https://eslint.org/docs/user-guide/configuring
module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    sourceType: 'module', //解决import报警告
    parser: "babel-eslint"
  },
  plugins: ['vue'], //解决<template>报警告
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',

    //自定义配置的
    'indent': [2, 2, { 'SwitchCase': 1 }],//首行缩进2个空格，(建议把编辑器中的tab改成2个空格)
    'quotes': [1, 'single'],//引号类型 `` "" ''
    'no-multiple-empty-lines': [1, { 'max': 5 }], //空行最多不能超过设置成5行
    //关闭检测的
    'spaced-comment': 0, //注释//后面带空格，没必要
    'padded-blocks': 0, //块语句内行首行尾是否要空行，没必要
    'eol-last': 0, //文件以单一的换行符结束，没必须
    'no-console': 0, //允许console
    'object-curly-spacing': 0, //{loader: 'css-loader'} 对象大括号里面加空格，关闭
    //需要检测的
    'yoda': 2, //请书写优雅的条件语句（avoid Yoda conditions）。 
    'yield-star-spacing': 2, //yield * 中的 * 前后都要有空格。 
    'wrap-iife': [2, 'inside'], //自调用匿名函数 (IIFEs) 使用括号包裹。 
    'valid-typeof': 2, //用合法的字符串跟 typeof 进行比较操作
    'use-isnan': 2, //检查 NaN 的正确姿势是使用 isNaN()。 
    'template-curly-spacing': 2, //模板字符串中变量前后不加空格。 
    'space-unary-ops': 2, //一元运算符后面跟一个空格。 
    'space-in-parens': 2,  //圆括号间不留空格。 
    'space-before-blocks': 2,   //代码块首尾留空格。 
    'semi-spacing': 2, //遇到分号时空格要后留前不留。 
    'rest-spread-spacing': 2, //展开运算符与它的表达式间不要留空白。 
    'object-property-newline': [2, { 'allowAllPropertiesOnSameLine': true }], //对象属性换行时注意统一代码风格。 
    'no-with': 2, //禁止使用 with。 
    'no-whitespace-before-property': 2, //属性前面不要加空格。 
    'no-useless-rename': 2,  //import, export 和解构操作中，禁止赋值到同名变量
    'no-useless-escape': 2, //禁止不必要的转义。 
    'no-useless-constructor': 2, //禁止多余的构造器。 
    'no-useless-computed-key': 2, //避免使用不必要的计算值作对象属性。 
    'no-useless-call': 2, //避免不必要的 .call() 和 .apply()。 
    'no-unsafe-negation': 2, //关系运算符的左值不要做取反操作。 
    'no-unsafe-finally': 2, //finally 代码块中不要再改变程序执行流程。 
    'no-unreachable': 2, //return，throw，continue 和 break 后不要再跟代码。 
    'no-unneeded-ternary': 2, //如果有更好的实现，尽量不要使用三元表达式。 
    'no-unmodified-loop-condition': 2, //循环语句中注意更新循环变量
    'no-undef-init': 2, //不要使用 undefined 来初始化变量
    'no-trailing-spaces': 2, //行末不留空格。 
    'no-throw-literal': 2, //用 throw 抛错时，抛出 Error 对象而不是字符串
    'no-this-before-super': 2, //使用 this 前请确保 super() 已调用。 
    'no-template-curly-in-string': 2, //正确使用 ES6 中的字符串模板
    'no-tabs': 2, //不要使用制表符
    'no-sparse-arrays': 2, //禁止使用稀疏数组（Sparse arrays）
    'no-shadow-restricted-names': 2, //不要随意更改关键字的值
    'no-sequences': 2, //避免使用逗号操作符
    'no-self-compare': 2, //避免将变量与自己进行比较操作
    'no-self-assign': 2, //避免将变量赋值给自己。 
    'no-return-assign': 2, //return 语句中的赋值必需有括号包裹
    'no-regex-spaces': 2, //正则中避免使用多个空格
    'no-redeclare': 2, //不要重复声明变量
    'no-proto': 2, //使用 getPrototypeOf 来替代 __proto__
    'no-path-concat': 2, //使用 __dirname 和 __filename 时尽量避免使用字符串拼接
    'no-octal-escape': 2, //字符串字面量中也不要使用八进制转义字符
    'no-octal': 2, //不要使用八进制字面量
    'no-obj-calls': 2, //不要将全局对象的属性作为函数调用
    'no-new-wrappers': 2, //禁止使用原始包装器
    'no-new-symbol': 2, //禁止使用 Symbol 构造器
    'no-new-require': 2, //禁止使用 new require
    'no-new-object': 2, //禁止使用 Object 构造器
    'no-new-func': 2, //禁止使用 Function 构造器
    'no-new': 2, //new 创建对象实例后需要赋值给变量
    'no-multi-str': 2, //不要使用多行字符串
    'no-multi-spaces': 2, //除了缩进，不要使用多个空格
    'no-mixed-spaces-and-tabs': 2, //不要混合使用空格与制表符作为缩进
    'no-lone-blocks': 2, //不要书写不必要的嵌套代码块
    'no-labels': 2, //不要使用标签语句
    'no-label-var': 2, //外部变量不要与对象属性重名
    'no-iterator': 2, //禁止使用 __iterator__
    'no-irregular-whitespace': 2, //不要使用非法的空白符
    'no-invalid-regexp': 2, //不要向 RegExp 构造器传入非法的正则表达式
    'no-inner-declarations': 2, //嵌套的代码块中禁止再定义函数
    'no-implied-eval': 2, //注意隐式的 eval()
    'no-global-assign': 2, //不要对全局只读对象重新赋值
    'no-func-assign': 2, //避免对声明过的函数重新赋值
    'no-floating-decimal': 2, //不要省去小数点前面的 0
    'no-fallthrough': 2, //switch 一定要使用 break 来将条件分支正常中断
    'no-extra-parens': 2, //不要使用多余的括号包裹函数
    'no-extra-boolean-cast': 2, //避免不必要的布尔转换
    'no-extra-bind': 2, //避免多余的函数上下文绑定
    'no-extend-native': 2, //不要扩展原生对象
    'no-ex-assign': 2, //catch 中不要对错误重新赋值
    'no-eval': 2, //不要使用 eval()
    'no-empty-pattern': 2, //不要解构空值
    'no-empty-character-class': 2, //正则中不要使用空字符
    'no-duplicate-imports': 2, //同一模块有多个导入时一次性写完
    'no-duplicate-case': 2, //switch 语句中不要定义重复的 case 分支
    'no-dupe-keys': 2, //对象字面量中不要定义重复的属性
    'no-dupe-class-members': 2, //类中不要定义冗余的属性
    'no-dupe-args': 2, //不要定义冗余的函数参数
    'no-delete-var': 2, //不要对变量使用 delete 操作
    'no-debugger': 2, //不要使用 debugger
    'no-control-regex': 2,//正则中不要使用控制符
    'no-constant-condition': 2,//避免使用常量作为条件表达式的条件（循环语句除外）
    'no-const-assign': 2, //避免修改使用 const 声明的变量
    'no-class-assign': 2,//避免对类名重新赋值
    'no-caller': 2, //避免使用 arguments.callee 和 arguments.caller
    'no-array-constructor': 2, //使用数组字面量而不是构造器
    'constructor-super': 2, //子类的构造器中一定要调用 super 
    'accessor-pairs': 2, //对象中定义了存值器，一定要对应的定义取值器
    'new-parens': 2, //无参的构造函数调用时要带上括号
    'new-cap': [2, { 'capIsNew': false }], //构造函数要以大写字母开头
    'key-spacing': ['error', { 'beforeColon': false }], //键值对当中冒号与值之间要留空白
    'func-call-spacing': 2, //函数调用时标识符与括号间不留间隔
    'dot-location': ['error', 'object'], //点号操作符须与属性需在同一行
    'comma-style': ['error', 'last'], //始终将逗号置于行末
    'comma-dangle': [2, 'never'], //对象字面量项尾不能有逗号
    'camelcase': 2, //对于变量和函数名统一使用驼峰命名法
    'block-spacing': 2, //单行代码块两边加空格
    'no-cond-assign': 2, //条件语句中赋值语句使用括号包起来
    'one-var': ['error', { var: 'never', let: 'never', const: 'never' }], //连续声明
    'operator-linebreak': ['error', 'after'], //三元运算符
    'no-undef': 2, //不能有未定义的变量
    'curly': 2, //多行if语句{}不能省
    'brace-style': 2, //else 关键字要与花括号保持在同一行
    'comma-spacing': [2, { after: true }],
    'space-infix-ops': [2, { 'int32Hint': false }], //字符串拼接要留空格
    'eqeqeq': [2], //强制使用===全等
    'keyword-spacing': 2, //关键字后面加空格
    'space-before-function-paren': [2, 'always'], //函数声明时括号与函数名间加空格
    'semi': [2, 'never'], //行末加分号
    'no-trailing-spaces': 2, //行末不允许带空格, 注意空行里可能带有空格，要清除

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}