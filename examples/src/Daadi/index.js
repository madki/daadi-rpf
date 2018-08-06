/**
 * Created by madki on 04/08/18.
 */
import React, {Component} from "react";
import {Stage} from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import Box from "./Box";
import Line from "./Line"
import * as Constants from "./constants"
import Coin from "./Coin";
import CoinContainer from "./CoinContainer";
import ClickContainer from "./ClickContainer";

const toggleType = (type) => {
  return (type === Constants.TYPES.A) ? Constants.TYPES.B : Constants.TYPES.A;
};

class Daadi extends Component {
  state = {
    filled: {},
    nextType: Constants.TYPES.A,
    turnCount: 0
  };

  constructor(props) {
    super(props);

    this.updateCoin = this.updateCoin.bind(this);
    this.addCoin = this.addCoin.bind(this);
  }

  updateCoin(oldPointId, newPointId, type) {
    const filled = {...this.state.filled};
    delete filled[oldPointId];
    console.log(oldPointId, newPointId, type);
    filled[newPointId] = type;
    console.log(filled);
    this.setState({
      filled
    })
  }

  addCoin(pointId) {
    const filled = {...this.state.filled};
    filled[pointId] = this.state.nextType;
    this.setState({
      filled,
      nextType: toggleType(this.state.nextType),
      turnCount: this.state.turnCount + 1
    });
  }

  render() {
    return (
      <Stage options={Constants.OPTIONS} width={Constants.STAGE_WIDTH} height={Constants.STAGE_HEIGHT}>
        <Box lineStyle={Constants.LINE_STYLE} x={Constants.BOX_1_X} y={Constants.BOX_1_Y} width={Constants.BOX_1_WIDTH}
             height={Constants.BOX_1_HEIGHT}/>
        <Box lineStyle={Constants.LINE_STYLE} x={Constants.BOX_2_X} y={Constants.BOX_2_Y} width={Constants.BOX_2_WIDTH}
             height={Constants.BOX_2_HEIGHT}/>
        <Box lineStyle={Constants.LINE_STYLE} x={Constants.BOX_3_X} y={Constants.BOX_3_Y} width={Constants.BOX_3_WIDTH}
             height={Constants.BOX_3_HEIGHT}/>
        <Line lineStyle={Constants.LINE_STYLE} start={Constants.LINE_1.start} end={Constants.LINE_1.end}/>
        <Line lineStyle={Constants.LINE_STYLE} start={Constants.LINE_2.start} end={Constants.LINE_2.end}/>
        <Line lineStyle={Constants.LINE_STYLE} start={Constants.LINE_3.start} end={Constants.LINE_3.end}/>
        <Line lineStyle={Constants.LINE_STYLE} start={Constants.LINE_4.start} end={Constants.LINE_4.end}/>

        {Array(24).fill().map((_, i) => {
          if (this.state.filled.hasOwnProperty(i)) {
            if (this.state.turnCount > Constants.TURN_COUNT - 1) {
              return (
                <CoinContainer pointId={i} filled={this.state.filled} updateCoin={this.updateCoin} key={i}>
                  <Coin pointId={i} type={this.state.filled[i]}/>
                </CoinContainer>
              )
            } else {
              return (
                <Coin pointId={i} type={this.state.filled[i]} key={i} />
              )
            }
          } else {
            if (this.state.turnCount < Constants.TURN_COUNT) {
              return (
                <ClickContainer pointId={i} addCoin={this.addCoin} key={i}>
                  <Coin pointId={i}/>
                </ClickContainer>
              )
            }
          }
        })}
      </Stage>
    )
  }
}

export default Daadi;
