import { API } from "./API";



export async function LoadAllCardsAnimals() {
    
    let res = await fetch(API.NODE.GET, { method: "GET" });
    let data = await res.json();

    return data;
}


export async function LoadUserAdmin() {
    
    let res = await fetch(API.USER.GET, { method: "GET" });
    let data = await res.json();

    return data;
}