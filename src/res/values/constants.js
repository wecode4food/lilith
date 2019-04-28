import openSocket from 'socket.io-client';
import * as firebasefront from 'firebase';
// import * as file from 'fs';
// import FileUploader from "react-firebase-file-uploader";

var config = {
    apiKey: "AIzaSyCoEZjpQrQNdzpPM_WN64-2ygQOp0rV02A",
    authDomain: "adan-is-aive.firebaseapp.com",
    databaseURL: "https://adan-is-aive.firebaseio.com",
    projectId: "adan-is-aive",
    storageBucket: "adan-is-aive.appspot.com",
    messagingSenderId: "738898624761"
};

if (!firebasefront.apps.length) {
    firebasefront.initializeApp(config)

}

let lastResult = {};

export function ServerTest() {
    DB_puppet();
    
}

export function DB_puppet(){
    let puppet_desc = 'In nomine die nostri satanas luciferi excelsi Potemtum tuo mondi de Inferno, et non potest Lucifer Imperor Rex maximus, dud ponticius glorificamus et in modos copulum adoramus te Satan omnipotens in nostri mondi. Domini agimas Iesus nasareno rex ienoudorum In nostri terra Satan imperum in vita Lucifer ominus fortibus Obsenum corporis dei nostri satana prontem Reinus Glorius en in Terra eregius Luciferi Imperator omnipotens'; 
    let puppet_imgsrc = 'https://firebasestorage.googleapis.com/v0/b/adan-is-aive.appspot.com/o/1534270480_944570_1534270647_noticia_normal.jpg?alt=media&token=1351d8bd-65d8-4e82-8588-b17f4aaf9168';
    let puppet_owner = 'Jony Ventura';
    let ret_title_array = ['reto1','reto2','reto3','reto4','reto5'];
    let pos_title_array = ['post1','post2','post3','post4','post5'];
    let start_date = '2/2/2';
    let end_date = '9/9/9';

    addPost(puppet_desc, puppet_owner,ret_title_array[0], puppet_imgsrc);    
    addPost(puppet_desc, puppet_owner,ret_title_array[1], puppet_imgsrc);
    addPost(puppet_desc, puppet_owner,ret_title_array[2], puppet_imgsrc);
    addPost(puppet_desc, puppet_owner,ret_title_array[3], puppet_imgsrc);
    addPost(puppet_desc, puppet_owner,ret_title_array[4], puppet_imgsrc);

    addReto(puppet_desc,  pos_title_array[0], puppet_imgsrc,start_date,end_date);    
    addReto(puppet_desc,  pos_title_array[1], puppet_imgsrc,start_date,end_date);
    addReto(puppet_desc,  pos_title_array[2], puppet_imgsrc,start_date,end_date);
    addReto(puppet_desc,  pos_title_array[3], puppet_imgsrc,start_date,end_date);
    addReto(puppet_desc,  pos_title_array[4], puppet_imgsrc,start_date,end_date);

    addComment(puppet_desc, puppet_owner, pos_title_array[0]);    
    addComment(puppet_desc, puppet_owner, pos_title_array[1]);
    addComment(puppet_desc, puppet_owner, pos_title_array[2]);
    addComment(puppet_desc, puppet_owner, pos_title_array[3]);
    addComment(puppet_desc, puppet_owner, pos_title_array[4]);
    
    register(true, '123', 'readmin', 'admin@admin.com', 'readmin', 'el chuchal')
    register(false, '456', 'reuser', 'user@user.com', 'reuser', 'el chuchal')

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

export function addReto(in_desc, in_title, src, start_date, end_date) {
    webSocket.emit('write',
        {
            child: 'reto',
            data: {
                descripcion: in_desc,
                titulo: in_title,
                srchelp: src,
                start: start_date,
                end: start_date
            }
        });
}

export function addComment(in_comment, in_persona, in_post) {
    webSocket.emit('write',
        {
            child: 'comentario',
            data: {
                descripcion: in_comment,
                owner: in_persona,
                post: in_post
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