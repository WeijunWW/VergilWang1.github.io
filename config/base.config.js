const Metalsmith = require('metalsmith')

Metalsmith(process.cwd())
    .clean(true)
    .source('./docs/.vuepress/dist')
    .destination('./dist')
    .build(err => {
        if(err){
            console.log('失败');
        }

        console.log('文件操作成功');
    })
