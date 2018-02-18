var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    "article-one":{
    tittle:"Article One|Abhinav",
    heading:"Article One",
    date:"Feb 17,1018",
    content:
    ` <p>
                    This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage. 
                </p>
                <p>
                    This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.
                </p>
                <p>
                    This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage
                </p>`
    },
    "article-two":{tittle:"Article Two|Raj",
    heading:"Article Two",
    date:"Jan 2,1018",
    content:`
    <p>
                This is my third article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage. 
            </p>
            <p>
                This is my third article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.
            </p>
            <p>
                This is my third article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage
            </p>`
    },
    "article-three":{
    tittle:"Article Three|Pranjal",
    heading:"Article Three",
    date:"Feb 14,1018",
    content:`
    <p>
                This is my third article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage. 
            </p>
            <p>
                This is my third article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.
            </p>
            <p>
                This is my third article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage.This is my first article for my webpage
            </p>`
    }
};
function createTemplate (data)
{
    var tittle = data.tittle;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

    var htmlTemplate=`
    <html>
        <head>
            <title>
                 ${tittle}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <div class='container'>
                <div>
                    <a href="/">HOME </a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
 return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.param.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
