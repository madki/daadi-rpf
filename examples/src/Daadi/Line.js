/**
 * Created by madki on 05/08/18.
 */
import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const TYPE = "Line";
export const behavior = {
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function(instance, oldProps, newProps) {
    const { lineStyle, start, end, ...newPropsRest } = newProps;
    const { lineStyle: oldLineStyle, start: oldStart, end: oldEnd, ...oldPropsRest } = oldProps;
    if (typeof oldProps !== "undefined") {
      instance.clear();
    }
    instance.lineStyle(lineStyle.lineWidth, lineStyle.color, lineStyle.alpha);
    instance.moveTo(start.x, start.y);
    instance.lineTo(end.x, end.y);
    instance.endFill();

    this.applyDisplayObjectProps(oldPropsRest, newPropsRest);
  },
};

export default CustomPIXIComponent(behavior, TYPE);
