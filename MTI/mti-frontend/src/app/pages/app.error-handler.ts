import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import { AppUtil } from '../shared/app-util';

export class ErrorHandler {

    static handleError(error: Response | any) {
        let errorMessage = "";
        if (error instanceof Response) {

            const body = error || ''
            const err = body || JSON.stringify(body)

            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${err}`
        }

        if(!AppUtil.isBlankOrNull(error.error.fieldErrors)){
            errorMessage += error.error.fieldErrors[0].message;
        }else{
            errorMessage += error.message
        }

        return Observable.throw(errorMessage)

    }
}