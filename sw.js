/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/30/shangluo-2023/Aerial_view.jpg","91b8ea664642fe0f562d384bbb5b484a"],["/2023/04/30/shangluo-2023/ceremony_juice.jpg","8df588f46c24e5a9d7278a89edfecc97"],["/2023/04/30/shangluo-2023/ceremony_noodles.jpg","cecefb0ff0f88346ece917e1d9afb2de"],["/2023/04/30/shangluo-2023/index.html","678350f3223f2581e683c8aac4f8cd85"],["/2023/04/30/shangluo-2023/xinchangjie.jpg","b31ada67488ea0e54b4aba39212464b0"],["/2023/08/15/shanghai-2023/A_cosplayer_casting_Zhongli_and_his_partner_in_Genshin_FES,_Aug_12_2023.jpg","39162762abaee0935dc9bef004c0dfaf"],["/2023/08/15/shanghai-2023/Nahida.png","69dd9af7a96a91571f27be33b4de1cb7"],["/2023/08/15/shanghai-2023/SHM2-11.jpg","1e7e6ab23e4a2b550e1710f0e6670dbb"],["/2023/08/15/shanghai-2023/SHM3-39.jpg","e8aa3e6906c20ceb70a2662af79cec76"],["/2023/08/15/shanghai-2023/SHM5-15.jpg","a96597f913fe0ecee717c6752b9f4b66"],["/2023/08/15/shanghai-2023/SHM6.jpg","c4fd351b38c86fee234f098065dbaf67"],["/2023/08/15/shanghai-2023/Shanghai_Maglev_Train_near_Haitiansan_Road_Station,_Aug_11_2023.jpg","6094a15f0a1ac8b433e9c589aaa6e970"],["/2023/08/15/shanghai-2023/Skyline_of_Shanghai_at_day,_Aug_10_2023.jpg","acd030ff421c254b25af1c00c78f4dd9"],["/2023/08/15/shanghai-2023/Skyline_of_Shanghai_at_night,_Aug_10_2023.jpg","94373812978fbaac51b483b63b5b8be4"],["/2023/08/15/shanghai-2023/The_\"suite_of_3\"_of_Shanghai_at_day,_Aug_10_2023.jpg","276ec86e6dbf6fe36b9e7287fa40db42"],["/2023/08/15/shanghai-2023/index.html","0c9bcb8ae26ca5b75584b0de0a32d776"],["/2024/01/10/last-Z/BDK06.jpg","d9d575950f037565cd3f594b27b05570"],["/2024/01/10/last-Z/DKZ4.jpg","866a980529eeb58e3954b0c83fce6455"],["/2024/01/10/last-Z/Platform_ticket.png","3f5ef0ec0ff3ebe0622e9096ead19f15"],["/2024/01/10/last-Z/Platform_ticket1.jpg","a6c4220c68c05c6f4d7a8dd32f09a6d4"],["/2024/01/10/last-Z/Platform_ticket2.jpg","ede91fd78560b06e1441a179a9813bdd"],["/2024/01/10/last-Z/RW19T-554393_xian.jpg","5a64b1b6b284c12397fd6ccdc71b51b9"],["/2024/01/10/last-Z/Songlindian.png","ed311d289e4c0959f1ad5bf90c0a85e2"],["/2024/01/10/last-Z/Z19_ticket.jpg","8c96bf369b99f4c2017aadf81e4539f6"],["/2024/01/10/last-Z/Z20_start.png","6fe5fbe261ad2d88f8a92234b825f50c"],["/2024/01/10/last-Z/Z20_stopped.png","f2348a19903ac82242f62eef447a5cd3"],["/2024/01/10/last-Z/Z2_shijiazhuang.png","daf85098dfb389c5962bd6d87fcf1d72"],["/2024/01/10/last-Z/Z44_ticket_check.png","1e57ab14e591c803a2066824d806ed71"],["/2024/01/10/last-Z/beijing_west_early_check.png","b3f5a2deeb698bee6068a481c3feb57d"],["/2024/01/10/last-Z/beijing_west_soft_lounge.png","fb1dce51dac90c1b1ba0205431117dfe"],["/2024/01/10/last-Z/dest_board_z19.jpg","806232cf5d8dbcfc39677655202d966e"],["/2024/01/10/last-Z/dest_board_z44.jpg","5e708a1df1ddfef5682e13213a02489e"],["/2024/01/10/last-Z/dest_board_z88.jpg","043639b947f905773b898905a5c0875f"],["/2024/01/10/last-Z/index.html","740b0bd665cecf4bee55cb4918063dba"],["/2024/01/10/last-Z/semi-bed_z44.png","22955d1fb8d62491ac771749816c36c6"],["/2024/01/10/last-Z/waiting.png","dda091f317142678b67c3c452a2cb12d"],["/2024/01/10/last-Z/z19_ticket_check.png","2eed5392b0b9a530e035b5b3c33bd00f"],["/2024/01/24/Baoji-Chengdu-Railway-North/6063_Approaching_Qinling_Railway_Station.jpg","f03ceef558a7cb2b43ce5c101ec4681f"],["/2024/01/24/Baoji-Chengdu-Railway-North/640.png","d01089bd81690b6b2e8dfee1869b46da"],["/2024/01/24/Baoji-Chengdu-Railway-North/Destination_Sign_Board_6063_4.jpg","dacd2b04b600dadc939127ee1fbf4f0d"],["/2024/01/24/Baoji-Chengdu-Railway-North/MeetPoint.jpg","1231102e3da6386325930e410bf97231"],["/2024/01/24/Baoji-Chengdu-Railway-North/Profile1.jpg","be9ef7321eb5313019699f59b3121e1e"],["/2024/01/24/Baoji-Chengdu-Railway-North/Profile2.jpg","baf7a75e6059e96eaa1bb1420b14edfd"],["/2024/01/24/Baoji-Chengdu-Railway-North/Qinling_Great_Tunnel_(47).jpg","385008a57b8c74b769b803a861189f94"],["/2024/01/24/Baoji-Chengdu-Railway-North/Qinling_Station_Southview.jpg","12e778cf80d33d754aca59aa50d72140"],["/2024/01/24/Baoji-Chengdu-Railway-North/dest_board_t7_1.jpg","22d27088aba9a714b147bf7cd444be15"],["/2024/01/24/Baoji-Chengdu-Railway-North/index.html","107a1589782447b39ba400d890aeb7e8"],["/2024/02/12/lakeblue-double-decker/Seats_upper.png","917a841db872835a66a497e4814e08d5"],["/2024/02/12/lakeblue-double-decker/cover.png","71ba4f21b73332a9a0d2297bbedcf517"],["/2024/02/12/lakeblue-double-decker/dest_board.jpg","9f9c604ec01d633a1eff42248e96902f"],["/2024/02/12/lakeblue-double-decker/double_decker_timetable_2024.png","626958b055c557d6a11fbb9c0bf59f5e"],["/2024/02/12/lakeblue-double-decker/index.html","670f907d0573d170f638646c2c3b90ea"],["/2024/02/12/lakeblue-double-decker/k8412_ticket_check.jpg","1782f1b95b7be0ec9828ca2b934bd26d"],["/2024/03/02/original-liveries-2024-spring/YW25G-669449_&_YW25G-669686_Coach_Joint,_Mar_1_2024.jpg","2533f3991a762b6e925773ddff09bd8c"],["/2024/03/02/original-liveries-2024-spring/Zhen'an.jpg","cb635c702d0bf85b36af3f2d74dad25f"],["/2024/03/02/original-liveries-2024-spring/cover.jpg","b3a7375b87f8ef4a25cd827cda2af549"],["/2024/03/02/original-liveries-2024-spring/dest_board_k4080.jpg","84986cc84cac0bcbb60942b00abcb934"],["/2024/03/02/original-liveries-2024-spring/dest_board_k4219.jpg","4e1c483eeb5f4a5d9bac774616ddfaf9"],["/2024/03/02/original-liveries-2024-spring/index.html","0bf7e3d3da16bc73ae07e2f9d990c6ca"],["/2024/04/04/longhai/920Crowd.jpg","fe18ada0fb497d2d90998a342eef4264"],["/2024/04/04/longhai/DSC06605.jpg","bd7e6b8ea6de27f33c72530196a6283f"],["/2024/04/04/longhai/IMG_6717.png","e9fe8e9832043909857c081b2ba3874e"],["/2024/04/04/longhai/IMG_6721.png","d407b42003cf03e8a499d65e2d44b7a4"],["/2024/04/04/longhai/IMG_6725.png","f7861c40aa8e31cdf68a31b77192d54b"],["/2024/04/04/longhai/IMG_6727.png","6f4585233112020f184b43c5a4ed8116"],["/2024/04/04/longhai/IMG_6728.png","99b68c49e58ecfb7d8a3262042a01b11"],["/2024/04/04/longhai/IMG_6729.png","42f626c58ccccc63b5fde16ff6c0c711"],["/2024/04/04/longhai/IMG_7270.jpg","cf64fdde002c735978d5072f932a608c"],["/2024/04/04/longhai/IMG_7277.jpg","0172e3766e35163bc5a0d4357d9062f7"],["/2024/04/04/longhai/Putaoyuan_Railway_Station,_Apr_4_2024.jpg","3032203b50e18b4451afc22463367782"],["/2024/04/04/longhai/Qingya_Tunnel.jpg","6f2cee166668113613fff9aea409d6d3"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen1.png","9db936069ba12df45933d5b17bec66fb"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen2.png","0551b5ece9ac9325572a4c60fb216372"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen3.png","d613d1ea73454b0dc128e55a933ab08b"],["/2024/04/04/longhai/baojixia3.jpg","6e58c77112c78c1fa558467e506394e7"],["/2024/04/04/longhai/dest_board_k5442.jpg","ecacec059cf31788c64416275e3be481"],["/2024/04/04/longhai/index.html","e4a1c7f4aed7a3b1bdae51fb580aef4a"],["/2024/06/02/makeRecord/index.html","668d4e4004088d34a432bf3de925ee3e"],["/2024/06/17/Warteschlangentheorie-2024/cover.jpg","a93e7c28755bad4aae4b1834191f3ce1"],["/2024/06/17/Warteschlangentheorie-2024/index.html","02cebc96ac2ba5b530c550b0853012aa"],["/2024/06/19/Softwareingenieurung-2024/cover.png","0f75244bb8a55a9037aae54b9d32e458"],["/2024/06/19/Softwareingenieurung-2024/index.html","a7553fe31e7d1a7969ef50bedc8c3a50"],["/2024/06/22/shanghai-2024/D124-railmap.png","0912b59e31573e24d7da3229b8a7827c"],["/2024/06/22/shanghai-2024/D92-railmap.png","46ae4ad5a0c351f363d8a53c47f17298"],["/2024/06/22/shanghai-2024/IMG_7571.jpg","8684d9b739319b1eb11717b45002f673"],["/2024/06/22/shanghai-2024/Xujiahui-in-textbook.png","7c8f7135207af42f70294335d0915f5c"],["/2024/06/22/shanghai-2024/cover2024.jpg","adf8de7cb3f56efcb1db6a08cbbb406a"],["/2024/06/22/shanghai-2024/index.html","a1811b70607f6540707d821ddd955ddd"],["/2024/06/24/Kryptographie/CaesarSS.png","05580121608872179e01e7df30bdb775"],["/2024/06/24/Kryptographie/CaesarSS2.png","ec7505adc6a9a007a393ef1f1985ebf6"],["/2024/06/24/Kryptographie/DESSS.png","eeb0b222691c49305107132c70eb7515"],["/2024/06/24/Kryptographie/RSASS.png","3cc6496218232b9fd657e377123cb2b1"],["/2024/06/24/Kryptographie/Silver-Wolf.jpg","97edc92a028b235d2e8626e5e30c5ec4"],["/2024/06/24/Kryptographie/affineSS1.png","22dc6e3c3eccbcf35d0e87837ffb347b"],["/2024/06/24/Kryptographie/affineSS2.png","1c53661d0d0aec59d6274e80c4f4a933"],["/2024/06/24/Kryptographie/fcSS1.png","7ac4c8c8e353d35331e4c61800db1a56"],["/2024/06/24/Kryptographie/fcSS2.png","79cf17cfbb2bdae1a0faccfbc1c46e37"],["/2024/06/24/Kryptographie/fcSS3.png","cfc82926a14fc94035648b712c50650f"],["/2024/06/24/Kryptographie/fcSS4.png","820d43c428d8b8c64d16466f609a6c46"],["/2024/06/24/Kryptographie/fcSS5.png","a203208a00aee81a5bf24a7d1ecb38ea"],["/2024/06/24/Kryptographie/index.html","cdb2aaa9e79dec5f9f91915c72d0c830"],["/2024/06/24/Kryptographie/mdSS1.png","ce3fbfd18db2da773e1437dd42352361"],["/2024/06/24/Kryptographie/mdSS2.png","cedf58b4e81d830f0520a2beb335aeee"],["/2024/06/24/Kryptographie/saSS1.png","4569868280ea73ac8abf8204371628f9"],["/2024/06/24/Kryptographie/saSS2.png","f12b206ebb6e337b099c920b67c565df"],["/2024/06/27/Auswahlpruefung-der-Mathematik/cover.jpg","90d6760e45cef3c2c58d833a58b7a69e"],["/2024/06/27/D124-first-class-sleeper-2024/index.html","2b3f6f4ea10d094d137217e4f8f7cfcb"],["/2024/07/01/Shanghai-Bahn/SHM2-11.jpg","1e7e6ab23e4a2b550e1710f0e6670dbb"],["/2024/07/01/Shanghai-Bahn/SHM3-39.jpg","e8aa3e6906c20ceb70a2662af79cec76"],["/2024/07/01/Shanghai-Bahn/SHM5-15.jpg","a96597f913fe0ecee717c6752b9f4b66"],["/2024/07/01/Shanghai-Bahn/SHM6.jpg","c4fd351b38c86fee234f098065dbaf67"],["/2024/07/01/Shanghai-Bahn/SHM7-11.jpg","9e373000e8763ef4fb93a8ad7766a62d"],["/2024/07/01/Shanghai-Bahn/index.html","98324c34b9aa83f2a89f25a779fecb8e"],["/404.html","3e630c9cd819694e0cbdff0053adf4cd"],["/archives/2023/04/index.html","49d2e95a5c48a478e8bdf91a0a8b99c4"],["/archives/2023/08/index.html","38e27dd0a3022140eaf652437502af50"],["/archives/2023/index.html","79786f1605134f05aa0af6f0c64fe317"],["/archives/2024/01/index.html","ba2a54dc506f2e049bd886af99d0fe8a"],["/archives/2024/02/index.html","1796536728a1341973178c3471bf0295"],["/archives/2024/03/index.html","d7071c67a74d0324036487016c71c7f6"],["/archives/2024/04/index.html","37310ce67ab291b86f3644f0a0968cbb"],["/archives/2024/06/index.html","c54cc26b8b6a71cb10bc1ccb36091704"],["/archives/2024/07/index.html","3be60ec1c1ca6e10a1dafe0f38b86dad"],["/archives/2024/index.html","e31d62ee960119032f820132f52f3163"],["/archives/2024/page/2/index.html","c874cc1762b351b6213bdaadbb4118d0"],["/archives/index.html","fd62d34d915ae691d530f8ae1bed0ab8"],["/archives/page/2/index.html","078d4d55250420c8a493d3bfb396d906"],["/categories/Configuration/index.html","2214571510ef9288499af2df1e2231d7"],["/categories/Railways/Pushed-by-Anime/index.html","3a505ceafada82c2c3db9b30ea3f86b3"],["/categories/Railways/index.html","bcbd2dd4226cad21123931504ecbf3a9"],["/categories/Review/index.html","9a7757d6fa6a2d2799329fc9984074c3"],["/categories/index.html","9ea22106cf2b127a746a5f500cae4443"],["/css/index.css","44ce7fcca9fd65cb9cb159d0d0e3dd83"],["/css/my.css","b4a02b0f6051d169ffe4dfdd23c3a1a5"],["/css/myen.css","a8443a811fcf693161e28aff2de66027"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/RobotoCondensed-Italic-VariableFont_wght.ttf","df70e7fafa15ce9c4670c7d3eca8df5e"],["/fonts/RobotoCondensed-VariableFont_wght.ttf","db98a47617ff4be3def284d81a518149"],["/images/avatar.png","55073bb5477b9dffac185f972490db2b"],["/images/minesweep.png","9a4dc0c08d6121160183a39b70d8d8b4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","86bbe13695d7bd18ba7e6cc6a6614168"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","e37f5435ad6295f0802eb4a2f7f36cdc"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","4d70e8a9ce0792599efd387c4faf2fe9"],["/sw-register.js","46eabcd92e1a3da1ec14099daf3aaf91"],["/tags/Railways/index.html","a20e9d9dfb2aea3aa2826ce8ffa7e2f2"],["/tags/Review/index.html","fd3493cfecd8acf6108ebe5ae8689edc"],["/tags/index.html","b9eeda3afbd6471b165d55dc41aae7fc"],["/tags/中国铁路/index.html","0d749cbd1be78c38e63e21e59ad6e6f6"],["/tags/原色/index.html","f94a6f8c078af4a01fb72b5ad80dc688"],["/tags/命令行/index.html","83f6cfb74b8266318de7cdabfc998e32"],["/tags/复习记/index.html","29df9ac510bb06f9a63eca58ec5da81d"],["/tags/宝成铁路/index.html","7f917a03ceada63cdf0fa6cdfacfaeca"],["/tags/春运/index.html","e0f32850fc31896ac862f22eb1596c20"],["/tags/游记/index.html","64c64ed83ae58ecd6ca82bbd3b9016a0"],["/tags/环境配置/index.html","cdf8b7d61bb6ebc8faf59d158f489732"],["/tags/西康铁路/index.html","763c546590d81f257ecae9551c9886e1"],["/tags/通车日/index.html","5e21000e62fd57bbbda8e4b24c112e15"],["/tags/铁路/index.html","714627e5225b2f0d77d10fe54e5d6d39"],["/tags/陇海铁路/index.html","23f20f8edf1c20000359d6e291002744"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
