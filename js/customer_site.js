const CUSTOMER_SITES = {
    
    md91zy: { api: 'https://91md.me/api.php/provide/vod', name: '🔞91麻豆' },//不知道什么原因播不了，地址是M3U8
    bpzy: { api: 'https://www.kxgav.com/api/json.php', name: '🔞白嫖' ,detail: 'https://www.kxgav.com'},//显示找不到资源 https://www.kxgav.com/api/json.php https://www.kxgav.com/api/xml.php
    //正常了hsckzy: { api: 'https://hsckzy888.com/api.php/provide/vod/from/hsckm3u8/at/json', name: '🔞黄色仓库'},//https://hsckzy.xyz/api.php/provide/vod抓取的地址非M3U8https://hsckyun.yeffpe.com/share/a2/20250425/b5sG2Cyg
    xbzy: { api: 'https://www.xxibaozyw.com/api.php/provide/vod/at/json', name: '🔞细胞',detail: 'https://www.xxibaozyw.com'},//显示找不到资源 经过搜索是有M3U8但就是没抓到 https://www.xxibaozyw.com/api.php/provide/vod?ac=videolist&wd=%E6%B7%B1%E7%94%B0 https://www.xxibaozyw.com/api.php/provide/vod/at/json https://www.xxibaozyw.com/api.php/provide//vod/from/xxbm3u8/at/json
    sngzy: { api: 'https://api.sexnguon.com/api.php/provide/vod',name: '🔞色南国'},//不知道什么原因搜不到
    msnzy: { api: 'https://www.msnii.com/api/json.php', name: '🔞美少女',detail: 'https://www.msnii.com'},//显示找不到资源  https://www.msnii.com/api/json.php https://www.msnii.com/api/xml.php
    dadizy: { api: 'https://dadiapi.com/api.php/provide/vod', name: '🔞大地资源'},//detail": "https://dadizy11.com" 需要找到json地址 https://dadiapi.com/api.php/provide/vod  https://dadiapi.com/feifei2



    
    
    //wjzy: { api: 'https://api.wujinapi.me/api.php/provide/vod', name: '🎬无尽云'},
    
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
