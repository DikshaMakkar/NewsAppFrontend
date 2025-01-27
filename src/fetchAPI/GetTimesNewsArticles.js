export const GetTimesNewsArticles = async ({searchKeyword}) => {
    try{
        const response = await fetch(`http://localhost:8080/api/news/times-news?searchKeyword=${searchKeyword}&page=1`);
        if(!response.ok){
            throw new Error("Http error!");
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        // throw new Error(`Error! ${error}`);
        return [];
    }
}
