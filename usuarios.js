import { open, readFile, writeFile } from 'fs/promises';



class Usuarios{

    constructor(url='./usuarios.json' ){
        this.url = url;
        this.createFile();

    }

    async createFile(){
        try {
            const file = await open(this.url, 'a');
            file.close();
        } catch (error) {
            console.log(`Ocurrió el error ${error}`)
        }
    }

    async loadUsers(){
        this.createFile();
        const users = await readFile(this.url)
        const usersString = users.toString();
        if(usersString.length > 0 ){
            return JSON.parse(usersString);
        }else{
            return false
        }
    }

    async saveUser(usuarios){
        this.createFile();
        try {
            await writeFile(this.url,usuarios)
            return {ok:true,msg:'Usuario guardado correctamente'}
        } catch (error) {
            console.log(error);
  
        }

    }

}

export { Usuarios }
//module.exports = Usuarios;
