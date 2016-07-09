/**
 * Created by jorgeramos on 2/21/16.
 * This will be a file to track
 */
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('title', 'Gems');

app.get('/',function(req,res){
    res.send('Hello Express');
    console.log('Request received');
});
app.get('/me',function(req,res){
    res.send('ramos@us.ibm.com');
    console.log('Request received');
});
app.get('/who/:name',function(req,res){
    var name = req.params.name;
    res.send(name + ' was here');
    console.log('Request received');
});
app.get('/who/:name?/:title?',function(req,res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('<p>name: ' + name
    + '<br>title:' + title + '<p>');
    console.log('Request received');
});
app.get('/products',function(req,res){
    res.json([{
        name:"Dodecahedron",
        price: 2,
        description: "Dodecahedron cool description",
        canPurchase: true,
        soldOut: false,
        reviews: [{
            starts: 1,
            body: "I love this product",
            author: "joe@thomas.com"
        },{
            starts: 2,
            body: "This product sucks",
            author: "tim@hater.com"
        }
        ]
    }, {
        name: "Pentagonal Gem",
        price: 5.95,
        description: "Pentagonal Gem cool description",
        canPurchase: true,
        soldOut: false,
        reviews: []
    }
    ]);
    console.log('Json sent back');
});
app.get('*',function(req,res){
    res.send('Bad route');
    console.log('Request received');
});
// Set up a server
var server = app.listen(3000,function(){
    console.log('App listening on port 3000');
});