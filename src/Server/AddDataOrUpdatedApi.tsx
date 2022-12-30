import { API } from "./API";



export async function addAnimal(user: any) {
  try {
    await fetch(API.NODE.ADD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.log(error);
  }
}



export async function updateInDateAnimal(Animal: any, idAnimal: string) {

  try {
    await fetch(`${API.NODE.GET}/${idAnimal}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Animal),
    });
  } catch (error) {
    console.log(error);
  }
}
