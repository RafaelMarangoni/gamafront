const URL_FETCH_CATEGORIES = 'https://api.chucknorris.io/jokes/categories';

const BASE_URL = 'https://api.chucknorris.io/jokes/';
const METHOD = 'GET';
const CONTENT_TYPE = 'application/json'; 
const MODE = 'no-cors';

async function getJoke(category){
    const joke = await getRandomJokeFromCategory(category)

    let imgNode = document.getElementById('avatar')
    let jokeParagraph = document.getElementById('joke')

    imgNode.src = joke.icon_url
    jokeParagraph.innerText = joke.value
}

async function getJokeText(text){
    
    text = document.getElementById('jokeText').value
    const joke = await searchText(text)
    let imgNode = document.getElementById('avatar')
    let jokeParagraph = document.getElementById('joke')

    imgNode.src = joke.icon_url
    jokeParagraph.innerText = joke.text
}


async function getRandomJoke(){
    try {
        const response = await fetch(`${BASE_URL}random`, {
            method : METHOD,
            mode : MODE,
            headers : {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

//busca piada randomica a partir de uma categoria 
async function getRandomJokeFromCategory(category){
    try {
        const response = await fetch(`${BASE_URL}random?category=${category}`, {
            method : METHOD,
            mode : MODE,
            headers : {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json()
        
    }catch (e){
        console.log(e)
    }
}

async function searchText(text){    
        try {
            const response = await fetch(`${BASE_URL}search?query=${text}`, {
                method : METHOD,
                mode : MODE,
                headers : {
                    'Content-Type': CONTENT_TYPE
                }
            })    
            return await response.json()
            
        }catch (e){

            console.log(e)
        }
}



    getJokeText('Carrer');
