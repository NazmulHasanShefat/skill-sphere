export const GetApiData = async (url)=>{
    try {
        const res = await fetch(url)
        const resData = await res.json();
        return resData;
    } catch (error) {
        console.log("faild to load data", error.message)
    }
}