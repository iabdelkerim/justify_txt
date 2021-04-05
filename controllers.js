const jwt = require('jsonwebtoken');
const User = require('./models');

const len = 80;
var line = "";
var newLine = "";


exports.createUser = (req, res, next) => { 
    
        
    const user = new User({
        email: 'foo@bar.com',
    });
    user.save()
        .then(() => res.status(201).json({
            message: 'User created'
        }))
        .catch(error => res.status(400).json({ error }));

}

exports.Token = (req, res, next) => { 
    User.findOne({ email: req.body.email })
        .then(user => { 
            if (!user) {
                return res.status(401).json({ error: 'User not found'});
            }
            const token = jwt.sign(
                { userId: user._id },
                'YOUR_RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' });
            res.status(200).json({
                userId: user._id,
                token: token
            });
        });
};

exports.justify = (req, res) => {

    var str = req.body;

    res.type("text/plain");

    var words = str.split(' ');

    var lines = [];


    
    if(words.length > 80000)
        res.status(402).json({ success: false, message: '402 Payment Required.' });
    else {

        //remplir chaque ligne au maximum avec les mots et spaces nécessaires
        for (var i = 0; i < words.length; i++) {
            newLine = line;
            if (newLine !== "") {
                newLine += " ";
            }
            newLine += words[i];

            if (newLine.length > len) {
                line = addSpaces(line);
                lines.push(line);
                line = words[i];

                if (i === words.length - 1) {
                    lines.push(words[i]);
                }
            }
            else if (i === words.length - 1) {
                lines.push(newLine);
            }
            else {
                line = newLine;
            }
        }
        //supprimer les espaces inutiles au debut et à la fin 
        for (var k = 0; k < lines.length; k++) {
            lines[k] = lines[k].trim();
        }

        return res.send(lines.join('\n'));

    }
};

function addSpaces(s) {
    //nombre d'espaces à insérer
    var space = len - s.length;

    var word = s.split(' ');

    if (word.length > 0) {
        space += (word.length - 1);
        for (var j = 0; j < space; j++) {
            if (word.length > 1) {
                word[j % (word.length - 1)] += ' ';
            }
            else {
                word[0] += ' ';
            }
        }
    }

    return word.join('');
};

