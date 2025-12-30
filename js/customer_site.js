const CUSTOMER_SITES = {





    

/*
https://jjpz.hafrey.dpdns.org/?url= 代理跳转
?ac=videolist&wd=搜索内容
JSON抓取地址
/vod/at/json
/vod/from/xxbm3u8/at/json
*/


    
    
    
    wjzy: { api: 'https://api.wujinapi.me/api.php/provide/vod', name: '🎬无尽云'},
    mtzy: { api: 'https://caiji.maotaizy.cc/api.php/provide/vod/at/josn', name: '🎬茅台云'},
    
    /*testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true,
        detail: 'https://www.example.com', 
    },*/
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
