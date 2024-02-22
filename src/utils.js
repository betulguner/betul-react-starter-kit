import routes from './routes';

export const url = path => {
    /*routes.map(route => {
        if(route?.name == path){
            console.log(route)
        }
    })*/

    path.split('.').map(p => {
        console.log(p)
    })
}