/**
 * Created by madki on 06/08/18.
 */
import {CustomPIXIComponent} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import * as Constants from "./constants";

const TYPE = "CoinContainer";

const areClose = (a, b) => {
  return (Math.abs(a.x - b.x) <= Constants.CLOSENESS) && (Math.abs(a.y - b.y) <= Constants.CLOSENESS);
};

const isLegit = (filled, position) => (adjPointId) => {
  if (adjPointId === -1 || filled.hasOwnProperty(adjPointId)) return false;
  return areClose(position, Constants.POINTS[adjPointId]);
};

const computeFinalPosition = (point, position, filled) => {
  const pos = {
    x: point.x + position.x,
    y: point.y + position.y
  };
  const check = isLegit(filled, pos);
  if (check(point.up)) {
    return Constants.POINTS[point.up];
  }
  if (check(point.down)) {
    return Constants.POINTS[point.down];
  }
  if (check(point.left)) {
    return Constants.POINTS[point.left];
  }
  if (check(point.right)) {
    return Constants.POINTS[point.right];
  }
  return point;
};

const behavior = {
  customDisplayObject: () => new PIXI.Container(),
  customApplyProps: function (instance, oldProps, newProps) {
    const {pointId, filled, updateCoin, ...newPropsRest} = newProps;
    const {pointId: oldPointId, updateCoin: oldUpdateCoin, filled: oldFilled, ...oldPropsRest} = oldProps;

    instance.pointId = pointId;
    instance.filled = filled;
    instance.updateCoin = updateCoin;

    this.applyDisplayObjectProps(oldPropsRest, newPropsRest);
  },
  customDidAttach: instance => {
    instance.interactive = true;
    instance.cursor = "pointer";

    let draggedObject = null;
    this.dragStart = () => {
      draggedObject = instance;
      if (typeof instance.onDragStart === "function") instance.onDragStart(instance);
    };
    this.dragEnd = () => {
      const p = Constants.POINTS[instance.pointId];
      const final = computeFinalPosition(p, draggedObject.position, instance.filled);
      if (final.i !== p.i) {
        instance.updateCoin(instance.pointId, final.i, instance.filled[p.i]);
      } else {
        draggedObject.position.x = 0;
        draggedObject.position.y = 0;
      }
      draggedObject = null;
      if (typeof instance.onDragEnd === "function") instance.onDragEnd(instance);
    };
    this.dragMove = e => {
      if (draggedObject === null) {
        return;
      }
      draggedObject.position.x += e.data.originalEvent.movementX;
      draggedObject.position.y += e.data.originalEvent.movementY;
      if (typeof instance.onDragMove === "function") instance.onDragMove(instance);
    };

    instance
      .on('mousedown', this.dragStart)
      .on('touchstart', this.dragStart)
      .on('mouseup', this.dragEnd)
      .on('mouseupoutside', this.dragEnd)
      .on('touchend', this.dragEnd)
      .on('touchendoutside', this.dragEnd)
      .on('mousemove', this.dragMove)
      .on('touchmove', this.dragMove);
  },
  customWillDetach: instance => {
    instance
      .off('mousedown', this.dragStart)
      .off('touchstart', this.dragStart)
      .off('mouseup', this.dragEnd)
      .off('mouseupoutside', this.dragEnd)
      .off('touchend', this.dragEnd)
      .off('touchendoutside', this.dragEnd)
      .off('mousemove', this.dragMove)
      .off('touchmove', this.dragMove);
  },
};

export default CustomPIXIComponent(behavior, TYPE);
