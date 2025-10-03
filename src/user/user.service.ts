import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    DevolverAlgo(){
        return "Hola desde el servicio de usuario";
    }

}
