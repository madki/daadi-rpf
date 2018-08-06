/**
 * Created by madki on 06/08/18.
 */
import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import * as Constants from "./constants";

const TYPE = "Coin";
export const behavior = {
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function(instance, oldProps, newProps) {
    const { type, pointId, ...newPropsRest } = newProps;
    const { type: oldType, pointId: oldPointId, ...oldPropsRest } = oldProps;
    if (typeof oldProps !== "undefined") {
      instance.clear();
    }
    const fill = (type === Constants.TYPES.A) ? 0x5c5fff : 0xcc5922;
    const point = Constants.POINTS[pointId];

    instance.beginFill(fill);
    if (type === null || type === undefined) {
      instance.alpha = 0;
    }
    instance.drawCircle(point.x, point.y, 8);
    instance.endFill();

    this.applyDisplayObjectProps(oldPropsRest, newPropsRest);
  }
};

export default CustomPIXIComponent(behavior, TYPE);
