import { useEffect, useState } from "react";

function Quote(){

    const [quote, setQuote] =  useState([])
   // let api = 'http://api.quotable.io/random';
    // let api = 'https://type.fit/api/quotes';

const handleQuote = ()=>{
    //let api = 'http://api.quotable.io/random';
     let api = 'https://type.fit/api/quotes';

    fetch(api)
    .then(res=>res.json())
    .then(results=>{
        let random = Math.floor(Math.random()*results.length)
        setQuote(results[random])
    })
}
useEffect(()=>{
    handleQuote();
}, [])

    return (
        <div className="container">
            <h1> Quote of the day</h1>
            <i className="fa-solid fa-quote-left"></i>
                 <p className="quote-content">{quote.text}</p>
                 <p className="author">--- {quote.author}</p>
                 <div className="button-position"><button onClick={handleQuote}>New Quote</button></div>
        </div>
    );
};
export default Quote;