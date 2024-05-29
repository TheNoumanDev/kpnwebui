'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "871d90e89eff8d3c4646b620d7fac33b",
"assets/AssetManifest.bin.json": "8fd581b81dabc5e5f6321f4cd0ead850",
"assets/AssetManifest.json": "41c4e16309b4ab90e27309aa20db288b",
"assets/ensemble/apps/helloApp/Goodbye.yaml": "b209b46918c19c7c33d49acca3fb0ac3",
"assets/ensemble/apps/helloApp/Hello%2520Home.yaml": "59f9ab17bec84864e0010e93d7f93db2",
"assets/ensemble/apps/helloApp/theme.config": "9f925873dae06955c8053404ad4a8412",
"assets/ensemble/apps/kpnApp/AppExtender.yaml": "375a40cce1ef31b3f1bf56297320a455",
"assets/ensemble/apps/kpnApp/AppExtenderDrawer.yaml": "eaf0d832f54393ca55f1ec47f7d2993f",
"assets/ensemble/apps/kpnApp/AppGateway.yaml": "01ee5f238f7c8a78d73c7af4b98f4a01",
"assets/ensemble/apps/kpnApp/AppGatewayDrawer.yaml": "431b566760c055952dfd00d500d8041a",
"assets/ensemble/apps/kpnApp/AppStandaloneExtender.yaml": "2cc27107e0e9f91b3809898c42bd7632",
"assets/ensemble/apps/kpnApp/AppStandaloneExtenderDrawer.yaml": "ffa0f78dbfff8159e180106c206a3289",
"assets/ensemble/apps/kpnApp/config.ensemble": "485f55426d36b126c353921cdfbafcda",
"assets/ensemble/apps/kpnApp/Feedback.yaml": "74b978f6f88fe16771afed5ae4943892",
"assets/ensemble/apps/kpnApp/GatewayNotFound.yaml": "f3caa91776106bf55498e052b94dd75f",
"assets/ensemble/apps/kpnApp/Home.yaml": "4839b860e9646f980d4d2f6cd68ca14e",
"assets/ensemble/apps/kpnApp/HomeExtender.yaml": "e72f8e76cba602b7658e740490e93859",
"assets/ensemble/apps/kpnApp/Internet%2520verbinding.yaml": "01e1cd47e9aac960cbbc5295534102e1",
"assets/ensemble/apps/kpnApp/InternetVerbindingExtender.yaml": "749e01e209369915ec579a6db469c985",
"assets/ensemble/apps/kpnApp/Landing.yaml": "69c05af9462be9ceebfa1d8e8e9753eb",
"assets/ensemble/apps/kpnApp/Login.yaml": "8d7bd9ba81da7a3bb0bdd7464ed2123a",
"assets/ensemble/apps/kpnApp/Logout.yaml": "e9e489814573295a1d9fbaa87642718c",
"assets/ensemble/apps/kpnApp/LokaalNetwerk.yaml": "e78db8a7c5c47135b92934cf34c6852f",
"assets/ensemble/apps/kpnApp/LokaalNetwerkExtender.yaml": "29be148801f0460232be90091b673d80",
"assets/ensemble/apps/kpnApp/Modem%2520instellingen.yaml": "94f23bc8a331ee9e8dd2b8621ca275d0",
"assets/ensemble/apps/kpnApp/resources.ensemble": "fa10f8b5630a0fd72c5792b792e49448",
"assets/ensemble/apps/kpnApp/Security.yaml": "ef380b887bc445268c3ae471d24eb4e6",
"assets/ensemble/apps/kpnApp/Telefoon.yaml": "f51688f9347ffd1a52959f8182fc30cf",
"assets/ensemble/apps/kpnApp/theme.ensemble": "46f7c9d3acfc1b468248d62131d6f10b",
"assets/ensemble/apps/kpnApp/WiFi.yaml": "80dff9bc1eed0228fe98742da1192880",
"assets/ensemble/assets/arrow_left.png": "57e01490a63ce2fb639f7412c01417b0",
"assets/ensemble/assets/arrow_right.png": "c1ec145e27d5388b69ff471ce0bf36ba",
"assets/ensemble/assets/arrow_two_way.png": "2334e1cb0a0a3cb7382cc6979faa1d0a",
"assets/ensemble/assets/blink_green.json": "dd4da47fa4513d30fff20a7429ce241d",
"assets/ensemble/assets/BoxV14.png": "f92772e484fdf7ace05cb077940fa6bd",
"assets/ensemble/assets/extender_children_line.png": "46f728fc8943974e8a6289a12eccf650",
"assets/ensemble/assets/F5359s.png": "5a9acb0d15085f939effa7673aed3038",
"assets/ensemble/assets/fonts/li-icons.ttf": "14402cdae7cca65976b4bd9272e4a116",
"assets/ensemble/assets/fonts/metric-bold.otf": "c4fff45fbd77b666280512c58f946674",
"assets/ensemble/assets/fonts/metric-regular.otf": "1d305319a255e54efcc02e752c37331d",
"assets/ensemble/assets/fonts/metric-semibold.otf": "bc39640daeaa43b8e94a09d1de1ad9f1",
"assets/ensemble/assets/fonts/si-icons.ttf": "74cec0b8db660824dc6579f1538aa2ab",
"assets/ensemble/assets/fonts/ui-icons.ttf": "df7fb18073dd900c1ec44e1c2069ac46",
"assets/ensemble/assets/H369As.png": "eb441c144eee18d16e72b93d15810676",
"assets/ensemble/assets/kpn-sidebar-footer.svg": "8fef16c217d6b01c095da353cbf5457c",
"assets/ensemble/assets/line-green-dashed.png": "f964451771a5452dff7fa2160cfd774f",
"assets/ensemble/assets/line-green-solid.png": "b73348f485199787d62f5d12dfac13ac",
"assets/ensemble/assets/line-grey.png": "ddf34de400ebb39a21ff2de28c43ec83",
"assets/ensemble/assets/line-orange-dashed.png": "d76a6b0fd1155f0ffc3a7f7d593b3cf2",
"assets/ensemble/assets/line-orange-solid.png": "1435888f5f4513c63559bde727a67d1c",
"assets/ensemble/assets/line-power-solid.png": "0572558ca70608dff52e8519c36e7ec0",
"assets/ensemble/assets/line-vertical.png": "0dbeb545b2257e266a345d6f161ba038",
"assets/ensemble/assets/login_bg-min.jpg": "681c48918f88713caa029051b575dbbb",
"assets/ensemble/assets/switch-line-green-solid.png": "d4c66aee726cb84954ff07f2b34effb5",
"assets/ensemble/assets/topology_side.png": "317f737996db1ee3099802342525209b",
"assets/ensemble/assets/validation-circle.png": "bcbad47763793ba6c863adeb2cf77601",
"assets/ensemble/assets/WE620242s.png": "8262cdc5fb06a40962833a79eff79ab5",
"assets/ensemble/ensemble-config.yaml": "80825ca852fc04161fddbeba19f60b24",
"assets/ensemble/i18n/en.yaml": "b23119a3dfa88f7d7ef3b80d67e7686f",
"assets/ensemble/i18n/es.yaml": "0946dbe382ce1f7424017a6512afde5e",
"assets/ensemble/i18n/nl.yaml": "a007632a274eae13abc8e9ef87215954",
"assets/ensemble/test-config.yaml": "8d81fef5e834f4a55316d5079a874b09",
"assets/FontManifest.json": "1f1bd1861f77789b3f69e7dddf9858f7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "0dba54dd0f69856c894e1ef5ea3498a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/ensemble/assets/fonts/idealTalent/Clarika.ttf": "bafb62b947d038d2b0343677f78bac76",
"assets/packages/ensemble/assets/fonts/idealTalent/ClarikaRegular.ttf": "489add991fedb5b55176e30a52bb3010",
"assets/packages/ensemble/assets/fonts/idealTalent/icomoon.ttf": "d01e8f3a983a6eb1a808ec952a663d7b",
"assets/packages/ensemble/assets/fonts/inter/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/packages/ensemble/assets/fonts/inter/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/packages/ensemble/assets/fonts/inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/packages/ensemble/assets/fonts/inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/packages/ensemble/assets/fonts/inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/packages/ensemble/assets/fonts/Jost-Italic-VariableFont_wght.ttf": "90cf5a5805d8babe904d707953fa8682",
"assets/packages/ensemble/assets/fonts/Jost-VariableFont_wght.ttf": "d3c2dd4bde21454dd271abc82abec998",
"assets/packages/ensemble/assets/iconFonts/remixicon.ttf": "bb68cee10bf78904f18c799b90c1213b",
"assets/packages/ensemble/assets/images/2.0x/map_layers_button.png": "e792cdbcd9d9b2f9a96772d649cd9c09",
"assets/packages/ensemble/assets/images/2.0x/map_location.png": "70149084989170e86742ffc44cee314d",
"assets/packages/ensemble/assets/images/2.0x/map_location_button.png": "fec381a2f7c74cfcb17045662c48a8bf",
"assets/packages/ensemble/assets/images/3.0x/map_layers_button.png": "c4bc50946dc5af1ace00c0c272dec370",
"assets/packages/ensemble/assets/images/3.0x/map_location.png": "16e3f32d6c425a8f6f66efdd7a1daa8e",
"assets/packages/ensemble/assets/images/3.0x/map_location_button.png": "98885c6a6aafa62fb1a08f5db7654ad6",
"assets/packages/ensemble/assets/images/error.png": "82239592af01a04f8901cb1563e1f0bf",
"assets/packages/ensemble/assets/images/img_placeholder.png": "4708ccdd1a24a37ee8cc1f716da53ae5",
"assets/packages/ensemble/assets/images/map_hybrid.png": "5ce0a826204fa0bfd7676c2639b3af93",
"assets/packages/ensemble/assets/images/map_layers_button.png": "60446fbe176bd3743314fb2d5aed3cc9",
"assets/packages/ensemble/assets/images/map_location.png": "bdade7cab177d1bbee1b386f06a9c113",
"assets/packages/ensemble/assets/images/map_location_button.png": "885dff19a1330034f39f762ede112ce2",
"assets/packages/ensemble/assets/images/map_normal.png": "b67967c226ae12f5046cf53a46532b61",
"assets/packages/ensemble/assets/images/map_satellite.png": "80151ed5ec62c6a337fd648cedf7a2d3",
"assets/packages/ensemble/assets/images/map_terrain.png": "d2357ce7ad5806a2fd606313be32ee4b",
"assets/packages/ensemble/assets/images/pin.png": "0a09a9fb36d110d988c4d59cfd00f709",
"assets/packages/ensemble/assets/images/qr_error.png": "3e551b710e55a86ed620e1d111be30c0",
"assets/packages/ensemble/integration_test/local/defaultApp/API%2520Bindings.yaml": "ea28066306f1affaf9a0ecc0fe98a16c",
"assets/packages/ensemble/integration_test/local/defaultApp/Conditional.yaml": "f7ad58c84ca2eda2e6572ce97b4624d8",
"assets/packages/ensemble/integration_test/local/defaultApp/Custom%2520Widget.yaml": "086cf287e5bdbfde9db817c4f4e7086f",
"assets/packages/ensemble/integration_test/local/defaultApp/Dropdown%2520and%2520Form.yaml": "5ef6926f2c4b639930542d63ebf7c11e",
"assets/packages/ensemble/integration_test/local/defaultApp/Invoke%2520Api.yaml": "4dfc00cd7896d0364b88054b12a64fea",
"assets/packages/ensemble/integration_test/local/defaultApp/Nested%2520TextStyle.yaml": "304afa71d495556fc22705ff7d8f146a",
"assets/packages/ensemble/integration_test/local/dialogsAndToast/Toast.yaml": "37973372f800dc77f8f7c8a30deaaeee",
"assets/packages/ensemble/integration_test/local/themedApp/theme.ensemble": "03d29145c3310b0d29f4f3bbd1792137",
"assets/packages/ensemble/integration_test/local/themedApp/Widgets.yaml": "fcfcfd23fc347b3270a03a2fd6f8422b",
"assets/packages/ensemble/integration_test/local/translation/Basic.yaml": "34f27de57929396a454d84ebd767697e",
"assets/packages/ensemble/integration_test/local/translation/i18n/en.yaml": "46f5888af9ae06b7c8d69486f4dd2054",
"assets/packages/ensemble/integration_test/local/translation/i18n/es.yaml": "fcb21a57a3a8ab84b586ac79a1d07905",
"assets/packages/ensemble/integration_test/local/widgets/Custom%2520Widget.yaml": "fb2028a95d1710ca723e183bf8f7b971",
"assets/packages/ensemble_icons/fonts/remixicon.ttf": "fd43e311fef76b485b795d33aedb7f2a",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"css/style.css": "475e42a56bff4f277e6c8fac8fb65935",
"favicon.ico": "4bb0b3e04eccaac23ff2cdf33813a7dc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "3aae014468e2a4f2ce39fc2fa8c1a57f",
"icons/android-chrome-512x512.png": "159b0d19d445876e539e968d71f77376",
"icons/apple-touch-icon.png": "aed092728c26fb793759153fe22f8178",
"icons/favicon-16x16.png": "303b04bd25ef4912588e1d34a99e4ec9",
"icons/favicon-32x32.png": "18cb360e6107645cd2312c7ee2ecb66b",
"icons/Icon-192.png": "7fe3ff5fe983c241569a9a3ed1a11c8e",
"icons/Icon-512.png": "29e3feb4878ec5d9a5a4bb1d607928e9",
"icons/Icon-maskable-192.png": "7fe3ff5fe983c241569a9a3ed1a11c8e",
"icons/Icon-maskable-512.png": "29e3feb4878ec5d9a5a4bb1d607928e9",
"icons/mstile-150x150.png": "970d0b9b10b31d1bf78046c7c558de3f",
"index.html": "45e1406535cb840440239833d79f0fcc",
"/": "45e1406535cb840440239833d79f0fcc",
"js/automation.js": "f6b14d96a68a4246ec54c71483654320",
"js/chart.js": "7df8d453cbeba6eb081a6b9108aec829",
"js/chartUtil.js": "57031f01aca1c2e9db71597dfd93c9d3",
"main.dart.js": "daaba2d3e904864eee38d0ae2500045a",
"manifest.json": "2d6984c13986f66ece4a6972f91b9841",
"version.json": "e1c93d2132eccf837fea52170af01ea2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
