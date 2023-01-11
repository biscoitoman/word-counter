module.exports = class CounterController{


    /* Word counter
    input = json
    inputTemplate = {
        "text" : string
    }
    route = {host}/v1/counter/word
    */
    async word(req, res, err){
        const body = req.body;

        if(body == undefined || body.text == undefined)
            return res.status(400).send();
        var cleanText = body.text.replace(/[^A-Za-z0-9']+/g, " ").trim();

        if(cleanText == ''){
            return res.status(422).send();
        }
        var wordList = cleanText.split(" ");

        var wordCount = wordList.length;

        var response = {wordCount: wordCount};

        res.status(200).send(response);
    };

}