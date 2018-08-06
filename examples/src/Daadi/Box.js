/**
 * Created by madki on 06/08/18.
 */
import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const TYPE = "Box";
export const behavior = {
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function(instance, oldProps, newProps) {
    const { lineStyle, x, y, width, height, ...newPropsRest } = newProps;
    const { lineStyle: oldLineStyle, x: oldX, y: oldY, width: oldWidth, height: oldHeight, ...oldPropsRest } = oldProps;
    if (typeof oldProps !== "undefined") {
      instance.clear();
    }
    instance.lineStyle(lineStyle.lineWidth, lineStyle.color, lineStyle.alpha);
    instance.drawRect(x, y, width, height);
    instance.endFill();

    this.applyDisplayObjectProps(oldPropsRest, newPropsRest);
  },
};

export default CustomPIXIComponent(behavior, TYPE);
