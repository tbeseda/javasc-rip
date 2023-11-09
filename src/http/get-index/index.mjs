import arc from '@architect/functions';

export const handler = arc.http.async(async function () {
  return {
    statusCode: 200,
    headers: {
      'cache-control': `max-age=${60 * 60 * 24 * 1}`,
      'content-type': 'text/html; charset=utf8',
    },
    body: /*html*/`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="https://fav.farm/🪦" />
  <title>javasc.RIP</title>
</head>
<body style="margin-top: 5rem; text-align: center;">
  <img
    src="${arc.static('reaper.jpg')}"
    alt="some AI generated image that used a bunch of stolen art from humans with actual talen"
    width="50%" height="50%"
  >
</body>
</html>`,
  };
});
