import * as Cx from '../../core';
import {AxisProps} from './Axis';

interface NumericAxisProps extends AxisProps {
   
   /** Minimum value. */
   min?: Cx.NumberProp,

   /** Maximum value. */
   max?: Cx.NumberProp,

   /** Set to `true` to normalize the input range. */
   normalized?: Cx.BooleanProp,

   /** Number used to divide values before rendering axis labels. Default value is `1`. */
   labelDivisor?: Cx.NumberProp,

   /** Base CSS class to be applied to the element. Defaults to `numericaxis`. */
   baseClass?: string,

   tickDivisions?: Array<number[]>,
   
   // TODO: consider implementing enum
   /** A number ranged between `0-2`. `0` means that the range is aligned with the lowest ticks. Default value is `1`, which means that the range is aligned with medium ticks. Use value `2` to align with major ticks. */
   snapToTicks?: 0 | 1 | 2,

   /** Value format. Default is `n`. */
   format?: string,

}

export class NumericAxis extends Cx.Widget<NumericAxisProps> {

   static XY() : { 
      x: { type: NumericAxis }, 
      y: { type: NumericAxis, vertical: true } 
   };

}