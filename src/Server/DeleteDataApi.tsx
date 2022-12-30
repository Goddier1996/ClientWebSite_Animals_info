import { API } from "./API";



export async function DeleteAnimal(Id: string) {
    
  fetch(`${API.NODE.GET}/${Id}`, { method: "DELETE" });
}