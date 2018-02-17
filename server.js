var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    articleone:{
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
    articletwo:{tittle:"Article Two|Raj",
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
    articlethree:{
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
function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
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

app.get('/1',function(req,res){
  res.send(createtemplate(articleone));
});

app.get('/2',function(req,res){
    res.send(createtemplate(articletwo));
});

app.get('/3',function(req,res){
    res.send(createtemplate(articlethree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
