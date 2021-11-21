//Acceso a base de datos en firebase
const database = firebase.firestore();


export async function insert(item) {
    try {
        //se espera a la promesa
        const response = await database.collection("usuarios").add(item);
        return response;
    } catch (error) {
        throw new Error (error);
    }
}

export async function getItems(id) {
    try {
        let items = [];
        const response = await database.collection("usuarios").where("userid", "==", uid).get();

        response.forEach(item => {
            items.push(item.data());
        });
        return items;
    } catch (error) {
        throw new Error (error);
    }
}


export async function update(id, item) { 
    let docId;
    try {
        const doc = await database.collection("usuarios").where("id", "==", id).get();

        doc.forEach((i) => {
            docId= i.id;
        });

        await database.collection("usuarios").doc(docId).update({completed: item.completed});
    } catch (error) {
        throw new Error(error);        
    }
 }