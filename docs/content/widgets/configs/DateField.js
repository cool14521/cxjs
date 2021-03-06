import {Md} from '../../../components/Md';
import field from './Field';
import calendar from './Calendar';

let {
    minValue, 
    minExclusive, 
    maxValue, 
    maxExclusive, 
    value 
} = calendar;

export default {
    minValue,
    minExclusive,
    maxValue,
    maxExclusive,
    value,
    ...field,
    baseClass: {
        type: 'string',
        description: <cx><Md>
         Base CSS class to be applied to the field. Defaults to `datefield`.
        </Md></cx>
    },
    format: {
        type: 'string',
        description: <cx><Md>
            Date format used to display the selected date. See [Formatting](~/concepts/formatting) for more details.
        </Md></cx>
    }
};