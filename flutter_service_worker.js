'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3a11f30648fc23e40ae7575a50b19fc3",
".git/config": "f840f33725cf0830a3d97662422a0843",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "9152edcb21d5042d3d638e25bac5a28e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2933bac693f691290244040553f83ee9",
".git/logs/refs/heads/master": "2933bac693f691290244040553f83ee9",
".git/logs/refs/remotes/upstream/master": "4fcf067254f3716d2174554b9d1c836c",
".git/objects/02/9e82c0ee1251923cecaae650dfb756ae65fbbf": "c4da13a5c9e6f6c718bfea54168984b8",
".git/objects/09/cfb6a84a6db7aedffdcfcfec019540d392e79f": "5c2aeea9f4b8acf9bb798ac31ec72ee8",
".git/objects/16/a386d1238a67df1c316f5c0c33af972a82fa85": "69019b4b3f82952382ca65348ff0e632",
".git/objects/1f/9582093fdb2fc058dd4f020f0ff5f575266be5": "65848a33ed8e210b2c914b3cd897e1a5",
".git/objects/29/ce9dabc73cf1cc75d54934da59a28df995fdd5": "479ebf8075d292acace5bd53cf3d91a6",
".git/objects/2c/10d5c7fba45549a2402a2a3eed81350f445f20": "e6ba8d52f1f4daa25fcab761c4fb85ab",
".git/objects/2f/c32a8afbd20b05e4a926793310b0e99cf91c7a": "1b0490fd491bcfce5596f8f383ab4285",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/8e91cfa1a3dffea323924d110e7b51bfb630ad": "a8cc66f9a1c4c9052f8d7809c54e97f5",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/5566d2477a5b5355b0510bb9bf18d17f6320f0": "bf07578ae46f843a9d2148a2630ecc7f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/ecc56d8b02488601836b70993ccd757477962b": "4d7a58c39436c7beca7d34201497c567",
".git/objects/53/e449bab000da27aa353b4acc0079b6b1d92850": "99e3df5b5079ca0cd7c2c56e6eb06fd1",
".git/objects/54/2db15cad4b8163ba37cc1fe9398c9eda7d7f5e": "12b2a0f67a7ac2df4623c6081cfe19a7",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/63/a4ff6b7d99d240b12480072ada1a68ad544a2c": "c8168127d7c177fbbb1176d56af86421",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/f7f2f0d96e191adf14ed4d3b933fd35bb73faa": "adffdd993b229f76ea3a7f7fd517eda5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/d934e218a31347c0fc13525e3a728b3edfa071": "095220149eba08efd5910c1e44abe175",
".git/objects/93/ec2e82d6185ea740dc180f436609b88e43009c": "612d5f87416ad5301da2633dd4b8fd8e",
".git/objects/94/bc71ab52b256f4da8a54eb3bf3031299aaf358": "4968449d5ffdce272b7f6fafa5debcab",
".git/objects/99/791ec2a9691c7dffb9e483b463f6961d591bcf": "d50c3942f640610b4dc434336c9c6bcb",
".git/objects/9a/0391a34d31886713d1c4510863032cab977598": "0a201bcad40134eb36b232ec2b5ee0ce",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d7182f9c00f0c467c773760dcce75fa29bce73": "10bb41e91d0183414c810a22b4a74efb",
".git/objects/a5/cbb75d602fd12be6b1ba95b589d822235601f8": "7408d9cdcf81cee53e7f3c9d4466c64a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/53457f5831f411595adb00fb388caaaae6678c": "4ac21bef0956697a9ed497f02e65b53e",
".git/objects/b2/15e9494f3e4deb367918f59cb171ece9a04f4b": "a59ee65e30d4d72a45b93e0aa21f97c3",
".git/objects/b2/1a1b5f959313d6ec0bc83d2425b2cf0b70f149": "65a9de75c05275aa8f857ec38a5e1172",
".git/objects/b3/b23d0fe3c7e77b1ada0981c9d47ad959d43ddf": "bccc0dbee7f569471a00464930ca0621",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/973d57bd67920b9be23bd806f38b73c950a358": "042e02fe8e375e3b1fa912e7fac88e6a",
".git/objects/cf/a40a3cee6caf3eb56dacaf69618c3a0318a95b": "2c70b0a1e6bf6e6287a974eb95269946",
".git/objects/d2/98dcea4c573b5f68644f2c72f57d031ab9e3d1": "58992b2978dd8f8ddab244e7178df145",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/7ff5545beb40d7d11af4d2fef24e6bf97f4a34": "cb53da634f8e9f6d73c12774c735fa58",
".git/refs/heads/master": "7cae264a844c2015898bbde718bc8dda",
".git/refs/remotes/upstream/master": "7cae264a844c2015898bbde718bc8dda",
"assets/AssetManifest.json": "509d08ff8c28c82141434734d98269a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/not-found-image-pen.jpg": "da5f326a679d98d889ec6ca926bd9fb3",
"assets/images/sad_face_square.png": "d29b02cb88a697031eb5b7bfebb9ecba",
"assets/NOTICES": "c90ca29cb2a3ec93e09f8320a89f2cb8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b98a9667d167f1ad75e1394c4cbcc5d",
"/": "9b98a9667d167f1ad75e1394c4cbcc5d",
"main.dart.js": "cca4238f75d7403435d374d48c4fc896",
"manifest.json": "a19b3f9cc59243ae2905bb93fc0ad736",
"version.json": "6b414c31df54dcc5f253fed1edcc2ae1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
