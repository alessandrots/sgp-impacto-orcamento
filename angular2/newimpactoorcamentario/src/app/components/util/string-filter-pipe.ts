import {Pipe} from "@angular/core";
import NomeacaoPag from '../nomeacaoPaging/nomeModelPag';

/**
 * A simple string filter, since ng2 does not yet have a filter pipe built in.
 */
@Pipe({
    name: 'stringFilter'
})
export class StringFilterPipe {

    transform(value: NomeacaoPag[], args: string[]) {
    	// console.log('value = ', value);
    	// console.log('args = ', args);
        let q = args[0];
        if (!q || q === '') {
            return value;
        }
        return value.filter(item => -1 < item.nome.toUpperCase().indexOf(q.toUpperCase()));
    }


}