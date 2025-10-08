const CUSTOMER_SITES = {


    wjzy: { api: 'https://api.wujinapi.me/api.php/provide/vod', name: '🎬无尽云'},
    
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true',
        detail: 'https://www.example.com', 
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
