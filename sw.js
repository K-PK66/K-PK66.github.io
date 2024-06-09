/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/30/shangluo-2023/Aerial_view.jpg","91b8ea664642fe0f562d384bbb5b484a"],["/2023/04/30/shangluo-2023/ceremony_juice.jpg","8df588f46c24e5a9d7278a89edfecc97"],["/2023/04/30/shangluo-2023/ceremony_noodles.jpg","cecefb0ff0f88346ece917e1d9afb2de"],["/2023/04/30/shangluo-2023/index.html","7cf880b6908bc0e246b9c0027c6ede7c"],["/2023/04/30/shangluo-2023/xinchangjie.jpg","b31ada67488ea0e54b4aba39212464b0"],["/2024/01/10/last-Z/BDK06.jpg","d9d575950f037565cd3f594b27b05570"],["/2024/01/10/last-Z/DKZ4.jpg","866a980529eeb58e3954b0c83fce6455"],["/2024/01/10/last-Z/Platform_ticket.png","3f5ef0ec0ff3ebe0622e9096ead19f15"],["/2024/01/10/last-Z/Platform_ticket1.jpg","a6c4220c68c05c6f4d7a8dd32f09a6d4"],["/2024/01/10/last-Z/Platform_ticket2.jpg","ede91fd78560b06e1441a179a9813bdd"],["/2024/01/10/last-Z/RW19T-554393_xian.jpg","5a64b1b6b284c12397fd6ccdc71b51b9"],["/2024/01/10/last-Z/Songlindian.png","ed311d289e4c0959f1ad5bf90c0a85e2"],["/2024/01/10/last-Z/Z19_ticket.jpg","8c96bf369b99f4c2017aadf81e4539f6"],["/2024/01/10/last-Z/Z20_start.png","6fe5fbe261ad2d88f8a92234b825f50c"],["/2024/01/10/last-Z/Z20_stopped.png","f2348a19903ac82242f62eef447a5cd3"],["/2024/01/10/last-Z/Z2_shijiazhuang.png","daf85098dfb389c5962bd6d87fcf1d72"],["/2024/01/10/last-Z/Z44_ticket_check.png","1e57ab14e591c803a2066824d806ed71"],["/2024/01/10/last-Z/beijing_west_early_check.png","b3f5a2deeb698bee6068a481c3feb57d"],["/2024/01/10/last-Z/beijing_west_soft_lounge.png","fb1dce51dac90c1b1ba0205431117dfe"],["/2024/01/10/last-Z/dest_board_z19.jpg","806232cf5d8dbcfc39677655202d966e"],["/2024/01/10/last-Z/dest_board_z44.jpg","5e708a1df1ddfef5682e13213a02489e"],["/2024/01/10/last-Z/dest_board_z88.jpg","043639b947f905773b898905a5c0875f"],["/2024/01/10/last-Z/index.html","331628ebcafd5be164905615355efbb4"],["/2024/01/10/last-Z/semi-bed_z44.png","22955d1fb8d62491ac771749816c36c6"],["/2024/01/10/last-Z/waiting.png","dda091f317142678b67c3c452a2cb12d"],["/2024/01/10/last-Z/z19_ticket_check.png","2eed5392b0b9a530e035b5b3c33bd00f"],["/2024/01/24/Baoji-Chengdu-Railway-North/6063_Approaching_Qinling_Railway_Station.jpg","f03ceef558a7cb2b43ce5c101ec4681f"],["/2024/01/24/Baoji-Chengdu-Railway-North/Destination_Sign_Board_6063_4.jpg","dacd2b04b600dadc939127ee1fbf4f0d"],["/2024/01/24/Baoji-Chengdu-Railway-North/MeetPoint.jpg","1231102e3da6386325930e410bf97231"],["/2024/01/24/Baoji-Chengdu-Railway-North/Profile1.jpg","be9ef7321eb5313019699f59b3121e1e"],["/2024/01/24/Baoji-Chengdu-Railway-North/Profile2.jpg","baf7a75e6059e96eaa1bb1420b14edfd"],["/2024/01/24/Baoji-Chengdu-Railway-North/Qinling_Great_Tunnel_(47).jpg","385008a57b8c74b769b803a861189f94"],["/2024/01/24/Baoji-Chengdu-Railway-North/Qinling_Station_Southview.jpg","12e778cf80d33d754aca59aa50d72140"],["/2024/01/24/Baoji-Chengdu-Railway-North/dest_board_t7_1.jpg","22d27088aba9a714b147bf7cd444be15"],["/2024/01/24/Baoji-Chengdu-Railway-North/index.html","45b015955558ebc14dab2f23cccb6a67"],["/2024/02/12/lakeblue-double-decker/Seats_upper.png","917a841db872835a66a497e4814e08d5"],["/2024/02/12/lakeblue-double-decker/cover.png","71ba4f21b73332a9a0d2297bbedcf517"],["/2024/02/12/lakeblue-double-decker/dest_board.jpg","9f9c604ec01d633a1eff42248e96902f"],["/2024/02/12/lakeblue-double-decker/double_decker_timetable_2024.png","626958b055c557d6a11fbb9c0bf59f5e"],["/2024/02/12/lakeblue-double-decker/index.html","e7eb56831c2a63877f89b3e3edb74ac8"],["/2024/02/12/lakeblue-double-decker/k8412_ticket_check.jpg","1782f1b95b7be0ec9828ca2b934bd26d"],["/2024/03/02/original-liveries-2024-spring/YW25G-669449_&_YW25G-669686_Coach_Joint,_Mar_1_2024.jpg","2533f3991a762b6e925773ddff09bd8c"],["/2024/03/02/original-liveries-2024-spring/Zhen'an.jpg","cb635c702d0bf85b36af3f2d74dad25f"],["/2024/03/02/original-liveries-2024-spring/cover.jpg","b3a7375b87f8ef4a25cd827cda2af549"],["/2024/03/02/original-liveries-2024-spring/dest_board_k4080.jpg","84986cc84cac0bcbb60942b00abcb934"],["/2024/03/02/original-liveries-2024-spring/dest_board_k4219.jpg","4e1c483eeb5f4a5d9bac774616ddfaf9"],["/2024/03/02/original-liveries-2024-spring/index.html","55e08bbd8b764a8ec9ce5db417139b3b"],["/2024/04/04/longhai/920Crowd.jpg","fe18ada0fb497d2d90998a342eef4264"],["/2024/04/04/longhai/DSC06605.jpg","bd7e6b8ea6de27f33c72530196a6283f"],["/2024/04/04/longhai/IMG_6717.png","e9fe8e9832043909857c081b2ba3874e"],["/2024/04/04/longhai/IMG_6721.png","d407b42003cf03e8a499d65e2d44b7a4"],["/2024/04/04/longhai/IMG_6725.png","f7861c40aa8e31cdf68a31b77192d54b"],["/2024/04/04/longhai/IMG_6727.png","6f4585233112020f184b43c5a4ed8116"],["/2024/04/04/longhai/IMG_6728.png","99b68c49e58ecfb7d8a3262042a01b11"],["/2024/04/04/longhai/IMG_6729.png","42f626c58ccccc63b5fde16ff6c0c711"],["/2024/04/04/longhai/IMG_7270.jpg","cf64fdde002c735978d5072f932a608c"],["/2024/04/04/longhai/IMG_7277.jpg","0172e3766e35163bc5a0d4357d9062f7"],["/2024/04/04/longhai/Putaoyuan_Railway_Station,_Apr_4_2024.jpg","3032203b50e18b4451afc22463367782"],["/2024/04/04/longhai/Qingya_Tunnel.jpg","6f2cee166668113613fff9aea409d6d3"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen1.png","9db936069ba12df45933d5b17bec66fb"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen2.png","0551b5ece9ac9325572a4c60fb216372"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen3.png","d613d1ea73454b0dc128e55a933ab08b"],["/2024/04/04/longhai/baojixia3.jpg","6e58c77112c78c1fa558467e506394e7"],["/2024/04/04/longhai/dest_board_k5442.jpg","ecacec059cf31788c64416275e3be481"],["/2024/04/04/longhai/index.html","05d0b918b0fe7e7318cd4b0810e242db"],["/2024/06/02/makeRecord/index.html","452852d553907a1603054e52be7fd4bf"],["/archives/2023/04/index.html","2db4a2d60a09b3af1372fe3bd937ecb1"],["/archives/2023/index.html","752ef8527e16103611bac49039c12143"],["/archives/2024/01/index.html","7711d16766cf2bbeadd028ab7830d5e9"],["/archives/2024/02/index.html","09b73a74cc51be0c25c0ea6f11ef3339"],["/archives/2024/03/index.html","802e68bc8d083b63067a32d431370ed8"],["/archives/2024/04/index.html","f58f02de7f8ade6327476fc8d4c62105"],["/archives/2024/06/index.html","5b201ffb0bb6da82e0e8655973ec8715"],["/archives/2024/index.html","b1a2dd21b40cc7d0ac5d8bbab21871ce"],["/archives/index.html","8b7bcac1ca3f914b9bbfaf1390b7725f"],["/categories/Configuration/index.html","5a5937298f7c43f562e73b82972002e1"],["/categories/Railways/index.html","bb239d175066dccc9e6056e8f0418df8"],["/categories/index.html","1135fa367fbf8b75f2fedf1506e45c1c"],["/css/index.css","eba7019a414dcd0049b59154e55c5b56"],["/css/my.css","553712df23ab90337de451bf056d56b0"],["/css/myen.css","a8443a811fcf693161e28aff2de66027"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/RobotoCondensed-Italic-VariableFont_wght.ttf","df70e7fafa15ce9c4670c7d3eca8df5e"],["/fonts/RobotoCondensed-VariableFont_wght.ttf","db98a47617ff4be3def284d81a518149"],["/images/minesweep.png","9a4dc0c08d6121160183a39b70d8d8b4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bd869fbb8c703c5d4d099b8e90b0ae53"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/self/btf.js","d6ffdfe40986ad7b75e7c726758075ab"],["/self/zh_en.js","a88122644966e9965e698dea9b2f693b"],["/sw-register.js","c15c34372780738964b92be79f75a4e1"],["/tags/index.html","eadede6163a097a9fe88f8c87be285f7"],["/tags/中国铁路/index.html","f8cc8b2b0b08f4fc017904ab2a3736f0"],["/tags/原色/index.html","27b941ba0baa4e89335aa641f06012b1"],["/tags/命令行/index.html","de9035d5943fcacd6da8abab0bf122c3"],["/tags/宝成铁路/index.html","1562892732f90750315c95d0a9960d60"],["/tags/春运/index.html","61b51de46963d776f90923c149bc7e26"],["/tags/游记/index.html","5cba57eb40094e7aa1fea250b5a3fc54"],["/tags/环境配置/index.html","c71ef63863b8be1f63ee42e67e1c2e9d"],["/tags/西康铁路/index.html","883f5608f3dfd998e2a010349cb23805"],["/tags/通车日/index.html","f445e7b01cb7720379c71e8494b9c0db"],["/tags/铁路/index.html","eca8a8dc346db5441dcb44a5d8b5a8d9"],["/tags/陇海铁路/index.html","7f57f724402364680cadf988d53e70a2"]];
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
