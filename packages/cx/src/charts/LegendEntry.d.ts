import * as Cx from '../core';

interface LegendEntryProps extends Cx.HtmlElementProps {
   
   /** Indicate that entry is selected. */
   selected?: Cx.BooleanProp,

   /** Shape of the symbol. `square`, `circle`, `triangle` etc. */
   shape?: Cx.StringProp,

   /** Index of a color from the standard palette of colors. 0-15. */
   colorIndex?: Cx.NumberProp,

   /** Used to automatically assign a color based on the `name` and the contextual `ColorMap` widget. */
   colorMap?: Cx.StringProp,

   /** Name of the item as it will appear in the legend. */
   name?: Cx.StringProp,

   /** Used to indicate if an item is active or not. Inactive items are shown only in the legend. */
   active?: Cx.BooleanProp,

   /** Base CSS class to be applied to the element. No class is applied by default. */
   baseClass?: string,
   
   legendAction?: string

}

export class LegendEntry extends Cx.Widget<LegendEntryProps> {}