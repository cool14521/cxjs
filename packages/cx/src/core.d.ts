export = Cx;
export as namespace Cx;

import * as React from 'react';

declare namespace Cx {

   interface Bind {
      bind: string,
      defaultValue?: any
   }

   interface Tpl {
      tpl: string,
      defaultValue?: any
   }

   interface Expr {
      expr: string,
      defaultValue?: any
   }

   type Binding = Bind | Tpl | Expr;

   type Selector<T> = (data: any) => T;

   interface StructuredSelector {
      [prop: string]: Selector<any>
   }

   type Prop<T> = Binding | T | Selector<T>;

   interface Record {
      [prop: string]: any
   }

   interface Config {
      [prop: string]: any
   }

   interface StructuredProp {
      [prop: string]: Prop<any>
   }

   type StringProp = Prop<string>;
   type StyleProp = Prop<string | React.CSSProperties>;
   type NumberProp = Prop<number>;
   type BooleanProp = Prop<boolean>;
   type ClassProp = Prop<string> | StructuredProp;
   type RecordsProp = Prop<Record[]>;

   interface WidgetProps {
      layout?: any,
      outerLayout?: any,
      putInto?: string,
      contentFor?: string,
      controller?: any,

      /** Visibility of the widget. Defaults to `true`. */
      visible?: BooleanProp,

      /** Visibility of the widget. Defaults to `true`. */
      if?: BooleanProp,

      /** Appearance modifier. For example, mod="big" will add the CSS class `.cxm-big` to the block element. */
      mod?: StringProp | Prop<string[]> | StructuredProp,
      
      memoize?: BooleanProp
   }

   interface PureContainerProps extends WidgetProps {
      
      /** Keep whitespace in text based children. Default is `false`. See also `trimWhitespace`. */
      ws?: boolean,

      /** Remove all whitespace in text based children. Default is `true`. See also `preserveWhitespace`. */
      trimWhitespace?: boolean,

      /** Keep whitespace in text based children. Default is `false`. See also `trimWhitespace`. */
      preserveWhitespace?: boolean,

   }

   interface StyledContainerProps extends PureContainerProps {

     /** 
     * Additional CSS classes to be applied to the element. 
     * If an object is provided, all keys with a "truthy" value will be added to the CSS class list.
     */
      class?: ClassProp,

      /** 
      * Additional CSS classes to be applied to the element. 
      * If an object is provided, all keys with a "truthy" value will be added to the CSS class list.
      */
      className?: ClassProp,

      /** Style object applied to the element */
      style?: StyleProp,
   }

   interface HtmlElementProps extends StyledContainerProps {
      id?: string | number | Binding | Selector<string | number>,

      /** Inner text contents. */
      text?: string | number | Binding | Selector<string | number>
   }

   interface Sorter {
      field?: string;
      value?: (Record) => any;
      direction: 'ASC' | 'DESC';
   }

   class Widget<P extends WidgetProps> {
      props: P;
      state: any;
      context: any;
      refs: any;

      constructor(props: P);

      render();

      setState(state: any);

      forceUpdate();
   }
}

declare global {
   namespace JSX {
      interface IntrinsicElements {
         cx: any
      }
   }
}

declare module "react" {
   interface HTMLProps<T> extends Cx.PureContainerProps {
      class?: Cx.ClassProp
   }

   //this doesn't work, however, it would be nice if it does
   interface EventHandler<E extends React.SyntheticEvent<any>> {
      (event: E, instance?: any): void;
   }
}