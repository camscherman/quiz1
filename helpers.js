const helpers ={
    dateFormat: function(date){
        let d = new Date(date)
        let now = Date.now()
        let elapsed = now-d
        let r = new Date(now - d)
        if(elapsed < 60000){
            return 'just now'
        } else if ( elapsed < 3600000){
        return `${r.getUTCMinutes()} minutes ago`;
        } else if (elapsed < 86400000) {
            return `${r.getUTCHours()} hours ago`;
        } else if (elapsed < 604800000){
            return `${r.getUTCDay()} days ago`;
        } else {
            return `${r.getUTCFullYear()}`;
        }
    },
    trendCounter: function(contents, database){
        let words = contents.split(" ")
        console.log(words)
        for(let word of words){
            console.log(word[0])
            if(word[0] === '#'){
                let my_word = word.slice(1).replace(",", "");
                let id = ""
                 database('trends').where('trend_word', `${my_word}`).then((trends) => id = trends.id)
                console.log(`ID is ${id}`)
                if(!!id){
                    new_count = count+1
                    console.log("Added word!")
                    database('trends').where({'id': id}).update({ count: new_count}).then()
                }
                else{
                    console.log("added another word")
                    database('trends').insert({trend_word: my_word, count: 1}).then()
                }
            }
        }
    }
    
    
}

module.exports = helpers