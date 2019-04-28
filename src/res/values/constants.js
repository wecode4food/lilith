import openSocket from 'socket.io-client';

let lastResult = {};

export function ServerTest() {
    webSocket.emit('read',
        {
            child: 'usuarios',
        });
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

let lastResult = {};

export function ServerTest() {
    webSocket.emit('read',
        {
            child: 'usuarios',
        });
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