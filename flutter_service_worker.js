'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"manifest.json": "3342f8ec1400cb4568f6c56db90f0eb2",
".git/config": "2f5eae16998828699750db374fd80d70",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/69/22c97585065d6648c6215b96084b75203e7fa2": "1bac1166095c68baf35a631432901939",
".git/objects/54/edc206e88c37fb978556159a38adf56a03260c": "af01ed956c9c5942660c5504a2517ea1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e5/eecffd5dbfd9f56c5d677ea88a49c4377e519a": "52ae008045094f6a1ce501f5c708ebf9",
".git/objects/62/89683cbd8556d31855025f1791861b2cec28f7": "6b2e2482abcdb8d3bf44f404ba1e2c68",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/02/0908ad06c212ae5b8244fb05f29bd7b40c57c5": "38f1ff2f50f64da0b8c3098d7df92eb4",
".git/objects/9f/65f3683d8b5bb28b3676866c71d61f94f12160": "43cc9aebcb68ca261583061df364f2ab",
".git/objects/42/c003a81969b0a060d7a74094f9726c74226ead": "1abc3630e13151c884b742ac19e32951",
".git/objects/42/175d7a8c3878649c9fbb4b568d8bd93bcea26d": "0947bc03363efbd091a9ca6c61f07b7a",
".git/objects/4b/66ea24f7cc990b3673ea9fcc71e3f998c67c37": "bc2e299973c8a9146817d409fc8bf2f2",
".git/objects/8d/439186b7bbbb1476bf193855959e631ad76f23": "35a163f6ac5dc48a75d2862b887b9957",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cf/5c57d04b09528d17038cefcaec0d611bcb11a1": "2bff6be4e9af05a9cf6ddcdcc3d196f1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d2/517bebfe2f6ea96182e59d50f82a6cb5cfe4a8": "fa4ac0e7f58134dcc18693441d51529c",
".git/objects/1f/82abcda0bc2936988f576a8294008623d81158": "1263522dbd3518da315456aa91bc77a6",
".git/objects/9a/e859b1b6b483dc5c9fd8d18aca143ae3e547b4": "209e8295b5f35f12316f1bc43e1c0de8",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/1b/10d82fce3763348a2319c8b4304b9dfe242202": "13d4b2a07beba21a6e59224e1858e56b",
".git/objects/36/5be793a0509be504687bef68029500e5872673": "a88c069e534a669ba8d3da714924e915",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/80/cfb9b4bb90ffae1a180ca1ae23b6cd0d642319": "48be3d35504169a77b84f93a1f1776cb",
".git/objects/00/6468268204ae6e71d40524acdcdf2fc5d8ad44": "bc6e3fd68e4f25590411ba80fb9cae45",
".git/objects/90/095098bfbaed24ac66d181dedeefd1dbd5d98f": "8a2b7d12d9c06a3d3d82dd4aa12ba19f",
".git/objects/8f/4920a71983d849a4988c033e378f44198bda73": "3bea3c7ca6faf75971ad94bae8a59ac3",
".git/objects/75/c5df9c6264f1f21f7c22fa803c7aa78e8d2203": "a35ae37e3e0a1cd283cb0fe2239b6b36",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/7f/b8e35384e695d4eab200727ebd5f64904ada1d": "777a6c2264b67c8bfee8aa1b560adb34",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/a9/88e8f1e5e7203b7cdc630c1898bcc54cbddabe": "274a590a9a9bcad38ad6c790153fdc9c",
".git/objects/aa/8376fa68b91e5a31f888a15f6c94606ee73600": "e1e0f16911709ec08299b21bbcdfef7a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f1/74edd07773a6265ce4bd70637ddcbc315c2d1e": "4b99839c60eb3465a20de2c9565d3839",
".git/objects/44/b9a79cabc0f0a8b7bff2336b2e2e745d14f488": "6ebcbafbd2b992f7624f72ea60e5ff86",
".git/objects/17/d35c6428c876617e51dc100c4fb63ee7c90cdd": "5453b7f874d0216b4e445ba4dfd7e59d",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/37/93193898c3c3043076a381893cbdd6eaa525dd": "5fd491acc831f7004180d3bf1754fe18",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/2d/f362939d1550d606a8f9875a80ef51fc9945ec": "f73cfe67b78437650a7c88318491bd31",
".git/objects/bf/ee4cbb7d0d6ac1cfe69917effe1c5f9adbd18d": "71215d81dbe6c3f92fe7e1eb862f0397",
".git/objects/b5/25098af7fa2dc6efd50a25b8c72fea46ac8812": "4cefd06c6d8f93e65c7ec22085363134",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/74/43a5bad949c4a81e564fc6f3892790616aee61": "3671d14e01ecee87f6d46dfa1a845ce2",
".git/objects/fe/0728c61c4651595a977cb3f3951e8c1756c27d": "ac0c8689ac89fb64f95e6a8010f9db51",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/24/8f5817bbfdde16fe0ede107a105e2662fbcc89": "5e3c3b1c66a9d4312df6d843d8bd79f0",
".git/objects/04/b0c9a305e31ece3c99f0e0a95884f49065b67e": "17e5470461c5135101cc150a9beed2b2",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/index": "972a619f756cfdc99fd740f01adaf257",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "ad1f983095f947d67fec39ac03692141",
".git/refs/remotes/origin/master": "ad1f983095f947d67fec39ac03692141",
".git/COMMIT_EDITMSG": "ad9235abb88576f2f435d1507b1a2866",
".git/logs/HEAD": "fa696d11e763fba1dfe73ce7d5b5df6a",
".git/logs/refs/heads/master": "fa696d11e763fba1dfe73ce7d5b5df6a",
".git/logs/refs/remotes/origin/master": "1beff7242c1872b94149ae0d6f7cb035",
"main.dart.js": "e8a1ef92d7f1341a81728e4d97696528",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9eec88bb607882d0eb30a6e34bbe749e",
"/": "9eec88bb607882d0eb30a6e34bbe749e",
"assets/fonts/MaterialIcons-Regular.otf": "51ae374a42e4c3676b3158d40e704899",
"assets/NOTICES": "59b869635efa60d9de2de3954b06a392",
"assets/AssetManifest.json": "264970f79196996b848405b7ce456f84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "e97303429ffa3437e1808407b600605f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/createCourse.png": "af9d43a2e20263a03022b5e864fd673c",
"assets/assets/qr.png": "b021cd49a40fe18629e660c73ffd84fb",
"assets/assets/hash.png": "380aa2526d072ddbd43b649630a07a44",
"assets/assets/profileLogo.png": "e5c4f10cd2e3b32ea520127c2376fd51",
"assets/assets/gear.png": "cf9aec3be2b17454d7f19107580e5d9c",
"assets/assets/logOut.png": "374b1c63a332ddfb6448944e8c267ce5",
"assets/assets/backArrow.png": "23287bf09f468d737d5050d617800bf5",
"assets/assets/account.png": "10006f691c3b3c08ce85cde675608b26",
"assets/assets/mail.png": "3121a7f507ca1815431ba2288de545ef",
"assets/assets/excelLogo.png": "55621212309b022ca5f7ffe7b1c6cb58",
"assets/assets/viewAttendance.png": "85602cf38ed3b1c977c1adbc8468fa53",
"assets/assets/info.png": "7e403e553ef81be49bcc717de06e7159",
"assets/assets/percent.png": "4e5fd0ec92b6670c6a729d3b8519ac42",
"assets/assets/viewEnrolled.png": "879e222d473e0f7ff99453f576bc5a00",
"assets/assets/gtu.png": "07a01aff09b41b3af7014ae5efedead1",
"assets/assets/minusCircle.png": "27d41a85d2bb3362753d099b4a5b5cbc",
"assets/assets/notificationBell.png": "4ae88ab96e70ecaeae5ee9c752a4ed8c",
"assets/assets/pasword.png": "692a001737b2896981ea79ac42fcadd8",
"assets/assets/joinCode.png": "1eb162d23854f1608a73369903d0caee",
"assets/assets/search.png": "83f3e9b9fcf81cd4f99d0906688e369e",
"assets/AssetManifest.bin.json": "09d054d7977e2314e6b7ff2672a980a9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "6d7a4b670d872486b47d76bb2a1af89e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
