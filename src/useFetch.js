import { useState, useEffect } from "react";

/* Custom Hook: must be same name as filename also start with use〇〇 */
const useFetch = (url) =>{
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () =>{
    const abortCont = new AbortController(); /* stop the fetch  */

    setTimeout(()=>{
      fetch(url, { signal: abortCont.signal })
      .then(res =>{
        if(!res.ok){
          throw Error('tried connecting..... could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data =>{
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err =>{
        if (err.name === 'AbortError'){
          console.log('fetch stopped')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);
    return () => abortCont.abort()
  },[url]);     /* [ Dependency ]内に指定した条件をトリガーに、起こす "Side Effect" */

  return {data, isPending, error}
}

export default useFetch;