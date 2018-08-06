/**
 * Created by madki on 06/08/18.
 */
export const STAGE_SIZE = 800;
// assuming the boxes to be square
export const BOX_1_SIZE = 600;
export const BOX_2_SIZE = 400;
export const BOX_3_SIZE = 200;

export const OPTIONS = {
  backgroundColor: 0x5bb23c,
};

export const LINE_STYLE = {
  lineWidth: 2,
  color: 0x4eff0e,
  alpha: 1
};

// derived export constants
export const STAGE_WIDTH = STAGE_SIZE;
export const STAGE_HEIGHT = STAGE_SIZE;

export const BOX_1_WIDTH = BOX_1_SIZE;
export const BOX_1_HEIGHT = BOX_1_SIZE;

export const BOX_2_WIDTH = BOX_2_SIZE;
export const BOX_2_HEIGHT = BOX_2_SIZE;

export const BOX_3_WIDTH = BOX_3_SIZE;
export const BOX_3_HEIGHT = BOX_3_SIZE;

export const computeRectPoint = (containerSize, rectSize) => (containerSize - rectSize) / 2;

export const BOX_1_X = computeRectPoint(STAGE_WIDTH, BOX_1_WIDTH);
export const BOX_1_Y = computeRectPoint(STAGE_HEIGHT, BOX_1_HEIGHT);
export const BOX_2_X = computeRectPoint(STAGE_WIDTH, BOX_2_WIDTH);
export const BOX_2_Y = computeRectPoint(STAGE_HEIGHT, BOX_2_HEIGHT);
export const BOX_3_X = computeRectPoint(STAGE_WIDTH, BOX_3_WIDTH);
export const BOX_3_Y = computeRectPoint(STAGE_HEIGHT, BOX_3_HEIGHT);

export const POINTS =  {
  0: {
    // box 1 left top
    i: 0,
    x: BOX_1_X,
    y: BOX_1_Y,
    up: -1,
    down: 9,
    right: 1,
    left: -1,
    adjs: [9, 1]
  },
  1: {
    // box 1 top center
    i: 1,
    x: (BOX_1_X + BOX_1_WIDTH / 2),
    y: BOX_1_Y,
    up: -1,
    down: 4,
    right: 2,
    left: 0
  },
  2: {
    // box 1 top right
    i: 2,
    x: BOX_1_X + BOX_1_WIDTH,
    y: BOX_1_Y,
    up: -1,
    down: 14,
    right: -1,
    left: 1
  },
  3: {
    // box 2 top left
    i: 3,
    x: BOX_2_X,
    y: BOX_2_Y,
    up: -1,
    down: 10,
    right: 4,
    left: -1
  },
  4: {
    // box 2 top center
    i: 4,
    x: (BOX_2_X + BOX_2_WIDTH / 2),
    y: BOX_2_Y,
    up: 1,
    down: 7,
    right: 5,
    left: 3
  },
  5: {
    // box 2 top right
    i: 5,
    x: (BOX_2_X + BOX_2_WIDTH),
    y: BOX_2_Y,
    up: -1,
    down: 13,
    right: -1,
    left: 4
  },
  6: {
    // box 3 top left
    i: 6,
    x: BOX_3_X,
    y: BOX_3_Y,
    up: -1,
    down: 11,
    right: 7,
    left: -1
  },
  7: {
    // box 3 top center
    i: 7,
    x: (BOX_3_X + BOX_3_WIDTH / 2),
    y: BOX_3_Y,
    up: 4,
    down: -1,
    right: 8,
    left: 6
  },
  8: {
    // box 3 top right
    i: 8,
    x: (BOX_3_X + BOX_3_WIDTH),
    y: BOX_3_Y,
    up: -1,
    down: 12,
    right: -1,
    left: 7
  },
  9: {
    // box 1 middle left
    i: 9,
    x: (BOX_1_X),
    y: (BOX_1_Y + BOX_1_HEIGHT / 2),
    up: 0,
    down: 21,
    right: 10,
    left: -1
  },
  10: {
    // box 2 middle left
    i: 10,
    x: (BOX_2_X),
    y: (BOX_2_Y + BOX_2_HEIGHT / 2),
    up: 3,
    down: 18,
    right: 11,
    left: 9
  },
  11: {
    // box 3 middle left
    i: 11,
    x: (BOX_3_X),
    y: (BOX_3_Y + BOX_3_HEIGHT / 2),
    up: 6,
    down: 15,
    right: -1,
    left: 10
  },
  12: {
    // box 3 middle right
    i: 12,
    x: (BOX_3_X + BOX_3_WIDTH),
    y: (BOX_3_Y + BOX_3_HEIGHT / 2),
    up: 8,
    down: 17,
    right: 13,
    left: -1
  },
  13: {
    // box 2 middle right
    i: 13,
    x: (BOX_2_X + BOX_2_WIDTH),
    y: (BOX_2_Y + BOX_2_HEIGHT / 2),
    up: 5,
    down: 20,
    right: 14,
    left: 12
  },
  14: {
    // box 1 middle right
    i: 14,
    x: (BOX_1_X + BOX_1_WIDTH),
    y: (BOX_1_Y + BOX_1_HEIGHT / 2),
    up: 2,
    down: 23,
    right: -1,
    left: 13
  },
  15: {
    // box 3 bottom left
    i: 15,
    x: BOX_3_X,
    y: BOX_3_Y + BOX_3_HEIGHT,
    up: 11,
    down: -1,
    right: 16,
    left: -1
  },
  16: {
    // box 3 bottom center
    i: 16,
    x: (BOX_3_X + BOX_3_WIDTH / 2),
    y: BOX_3_Y + BOX_3_HEIGHT,
    up: -1,
    down: 19,
    right: 17,
    left: 15
  },
  17: {
    // box 3 bottom right
    i: 17,
    x: (BOX_3_X + BOX_3_WIDTH),
    y: BOX_3_Y + BOX_3_HEIGHT,
    up: 12,
    down: -1,
    right: -1,
    left: 16
  },
  18: {
    // box 2 bottom left
    i: 18,
    x: BOX_2_X,
    y: BOX_2_Y + BOX_2_HEIGHT,
    up: 10,
    down: -1,
    right: 19,
    left: -1
  },
  19: {
    // box 2 bottom center
    i: 19,
    x: (BOX_2_X + BOX_2_WIDTH / 2),
    y: BOX_2_Y + BOX_2_HEIGHT,
    up: 16,
    down: 22,
    right: 20,
    left: 18
  },
  20: {
    // box 2 bottom right
    i: 20,
    x: (BOX_2_X + BOX_2_WIDTH),
    y: BOX_2_Y + BOX_2_HEIGHT,
    up: 13,
    down: -1,
    right: -1,
    left: 19
  },
  21: {
    // box 1 left bottom
    i: 21,
    x: BOX_1_X,
    y: BOX_1_Y + BOX_1_HEIGHT,
    up: 9,
    down: -1,
    right: 22,
    left: -1
  },
  22: {
    // box 1 bottom center
    i: 22,
    x: (BOX_1_X + BOX_1_WIDTH / 2),
    y: BOX_1_Y + BOX_1_HEIGHT,
    up: 19,
    down: -1,
    right: 23,
    left: 21
  },
  23: {
    // box 1 bottom right
    i: 23,
    x: BOX_1_X + BOX_1_WIDTH,
    y: BOX_1_Y + BOX_1_HEIGHT,
    up: 14,
    down: -1,
    right: -1,
    left: 22
  }
};

export const LINE_1 = {
  start: POINTS[1],
  end: POINTS[7]
};

export const LINE_2 = {
  start: POINTS[12],
  end: POINTS[14]
};

export const LINE_3 = {
  start: POINTS[16],
  end: POINTS[22]
};

export const LINE_4 = {
  start: POINTS[9],
  end: POINTS[11]
};

export const TYPES = {
  A: "A",
  B: "B"
};

export const CLOSENESS = 20;
export const TURN_COUNT = 4;

