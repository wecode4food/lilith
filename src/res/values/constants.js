import openSocket from 'socket.io-client';

let lastResult = {};

export function ServerTest() {
    /*
    console.log('adding data');
    addPost('In nomine die nostri satanas luciferi excelsi Potemtum tuo mondi de Inferno, et non potest Lucifer Imperor Rex maximus, dud ponticius glorificamus et in modos copulum adoramus te Satan omnipotens in nostri mondi. Domini agimas Iesus nasareno rex ienoudorum In nostri terra Satan imperum in vita Lucifer ominus fortibus Obsenum corporis dei nostri satana prontem Reinus Glorius en in Terra eregius Luciferi Imperator omnipotens', 'una persona', 'reto1', 'https://www.google.com.co/url?sa=i&source=images&cd=&ved=2ahUKEwi9h72-7PHhAhVjvlkKHXsRA-8QjRx6BAgBEAU&url=https%3A%2F%2Fcaracol.com.co%2Femisora%2F2018%2F08%2F14%2Fbarranquilla%2F1534270480_944570.html&psig=AOvVaw2rqo57ZPBVVdKfzA-iCWbz&ust=1556508589412871');    
    addPost('In nomine die nostri satanas luciferi excelsi Potemtum tuo mondi de Inferno, et non potest Lucifer Imperor Rex maximus, dud ponticius glorificamus et in modos copulum adoramus te Satan omnipotens in nostri mondi. Domini agimas Iesus nasareno rex ienoudorum In nostri terra Satan imperum in vita Lucifer ominus fortibus Obsenum corporis dei nostri satana prontem Reinus Glorius en in Terra eregius Luciferi Imperator omnipotens', 'una persona', 'reto2', 'https://www.google.com.co/url?sa=i&source=images&cd=&ved=2ahUKEwi9h72-7PHhAhVjvlkKHXsRA-8QjRx6BAgBEAU&url=https%3A%2F%2Fcaracol.com.co%2Femisora%2F2018%2F08%2F14%2Fbarranquilla%2F1534270480_944570.html&psig=AOvVaw2rqo57ZPBVVdKfzA-iCWbz&ust=1556508589412871');    
    addPost('In nomine die nostri satanas luciferi excelsi Potemtum tuo mondi de Inferno, et non potest Lucifer Imperor Rex maximus, dud ponticius glorificamus et in modos copulum adoramus te Satan omnipotens in nostri mondi. Domini agimas Iesus nasareno rex ienoudorum In nostri terra Satan imperum in vita Lucifer ominus fortibus Obsenum corporis dei nostri satana prontem Reinus Glorius en in Terra eregius Luciferi Imperator omnipotens', 'una persona', 'reto3', 'https://www.google.com.co/url?sa=i&source=images&cd=&ved=2ahUKEwi9h72-7PHhAhVjvlkKHXsRA-8QjRx6BAgBEAU&url=https%3A%2F%2Fcaracol.com.co%2Femisora%2F2018%2F08%2F14%2Fbarranquilla%2F1534270480_944570.html&psig=AOvVaw2rqo57ZPBVVdKfzA-iCWbz&ust=1556508589412871');    
    addPost('In nomine die nostri satanas luciferi excelsi Potemtum tuo mondi de Inferno, et non potest Lucifer Imperor Rex maximus, dud ponticius glorificamus et in modos copulum adoramus te Satan omnipotens in nostri mondi. Domini agimas Iesus nasareno rex ienoudorum In nostri terra Satan imperum in vita Lucifer ominus fortibus Obsenum corporis dei nostri satana prontem Reinus Glorius en in Terra eregius Luciferi Imperator omnipotens', 'una persona', 'reto4', 'https://www.google.com.co/url?sa=i&source=images&cd=&ved=2ahUKEwi9h72-7PHhAhVjvlkKHXsRA-8QjRx6BAgBEAU&url=https%3A%2F%2Fcaracol.com.co%2Femisora%2F2018%2F08%2F14%2Fbarranquilla%2F1534270480_944570.html&psig=AOvVaw2rqo57ZPBVVdKfzA-iCWbz&ust=1556508589412871');    
    addPost('In nomine die nostri satanas luciferi excelsi Potemtum tuo mondi de Inferno, et non potest Lucifer Imperor Rex maximus, dud ponticius glorificamus et in modos copulum adoramus te Satan omnipotens in nostri mondi. Domini agimas Iesus nasareno rex ienoudorum In nostri terra Satan imperum in vita Lucifer ominus fortibus Obsenum corporis dei nostri satana prontem Reinus Glorius en in Terra eregius Luciferi Imperator omnipotens', 'una persona', 'reto5', 'https://www.google.com.co/url?sa=i&source=images&cd=&ved=2ahUKEwi9h72-7PHhAhVjvlkKHXsRA-8QjRx6BAgBEAU&url=https%3A%2F%2Fcaracol.com.co%2Femisora%2F2018%2F08%2F14%2Fbarranquilla%2F1534270480_944570.html&psig=AOvVaw2rqo57ZPBVVdKfzA-iCWbz&ust=1556508589412871');    
    console.log('data added');
    */
}

export function serverStart() {
    webSocket.on('connection', function (s) {
        s.on('result', (resultado) => {
            lastResult = resultado;
        });
        return lastResult;
    });
}

//leer de la BD
export function getFromDb(in_child) {
    webSocket.emit('read',
        {
            child: in_child
        });
    webSocket.on('result', (s) => (
        this.lastResult = s.arraytemp
    ));
}

//escribir en la BD
export function upToDb(up_child, up_data) {
    webSocket.emit('write',
        {
            child: up_child,
            data: up_data
        });
}

export function addReto(in_desc, in_persona, in_title, src, start_date, end_date) {
    webSocket.emit('write',
        {
            child: 'reto',
            data: {
                descripcion: in_desc,
                owner: in_persona,
                titulo: in_title,
                srchelp: src,
                start: start_date,
                end: start_date
            }
        });
}

export function addComment(in_comment, in_persona, in_reto) {
    webSocket.emit('write',
        {
            child: 'comentario',
            data: {
                descripcion: in_comment,
                owner: in_persona,
                reto: in_reto
            }
        });
}

export function addPost(desc, persona,in_reto, tit, src) {
    webSocket.emit('write',
        {
            child: 'post',
            data: {
                descripcion: desc,
                reto: in_reto, 
                titulo: tit,
                srchelp: src,
                owner: persona
            }
        });
}


export function login(email, pass) {
    webSocket.emit('login',
        {
            email: email,
            password: pass
        });
}

export function register(admin_bool, cc_num, name, email, pass, neigh) {
    webSocket.emit('register',
        {
            admin: admin_bool,
            cc: cc_num,
            nombre: name,
            email: email,
            password: pass,
            barrio: neigh
        });

}

export function getAllChildren(child, hash) {
    webSocket.emit('read-item', {child: child, ihash: hash});
}


export const webSocket = openSocket('http://localhost:4500'); //Constante del webSocket