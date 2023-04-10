# H1
## H2
### H3
#### H4

Hello Guys I am now writing a markdown in browser hope you will enjoy it.

*Italic*

**Bold**

> blockquote

[title](https://www.example.com)

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```html
<html>
    <head>
        hello world
    </head>
</html>
```

```js
router.post('/create', fetchAdmin, (req, res) => {
    try {
        const { url } = req.body;
        youtube.metadata(url).then(async function (json) {
            const video = await Video({
                videoLink: json.html,
                imageLink: json.thumbnail_url,
                title: json.title,
                authorName: json.author_name,
                providerName: json.provider_name,
                authorUrl:json.author_url,
                url: url
            })
            const savedVideo = await video.save()
            res.send(savedVideo)
        }, function (err) {
            console.log(err);
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error')
    }
})
```

I need to highlight these **very important words**.

Gone camping! 🎪 Be back soon.

That is so funny! 😂
