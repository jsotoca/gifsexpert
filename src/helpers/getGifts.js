export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=QxhvK1vbC7dISCj3BT8NwBDY5WyBwaK9`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( g => {
        return {
            id: g.id,
            title: g.title,
            url: g.images?.downsized_medium.url
        }
    });
    return gifs;
}