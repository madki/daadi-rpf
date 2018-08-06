/**
 * Created by madki on 06/08/18.
 */
import {CustomPIXIComponent} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import * as Constants from "./constants";

const TYPE = "ClickContainer";

const behavior = {
  customDisplayObject: () => new PIXI.Container(),
  customApplyProps: function (instance, oldProps, newProps) {
    const {pointId, addCoin, ...newPropsRest} = newProps;
    const {pointId: oldPointId, addCoin: oldAddCoin, ...oldPropsRest} = oldProps;

    instance.pointId = pointId;
    instance.addCoin = addCoin;
    this.applyDisplayObjectProps(oldPropsRest, newPropsRest);
  },
  customDidAttach: instance => {
    instance.interactive = true;
    instance.cursor = "pointer";

    this.click = () => {
      instance.addCoin(instance.pointId)
    };

    instance
      .on('click', this.click)
      .on('tap', this.click);
  },
  customWillDetach: instance => {
    instance
      .off('click', this.click)
      .off('tap', this.click);
  },
};

export default CustomPIXIComponent(behavior, TYPE);
