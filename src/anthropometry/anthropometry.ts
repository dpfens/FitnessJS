namespace Fit {

    export namespace anthropometry {
        /*
        Anthropometry formulas
        Winter, David A. Biomechanics and Motor Control of Human Movement. New York, N.Y.: Wiley, 2009. Print.
        */

        export function height_from_height_eyes(segment_length: number): number {
          /*
          Calculates the height of the eyes from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.936;
        }

        export function height_from_height_head(segment_length: number): number {
          /*
          Calculates the height of the head (up to the bottom of the chin) from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.870;
        }

        export function height_from_height_shoulders(segment_length: number): number {
          /*
          Calculates the height of the shoulders from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.818;
        }

        export function height_from_height_chest(segment_length: number): number {
          /*
          Calculates the height of the chest (equal to the nipples) from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.720;
        }

        export function height_from_height_elbow(segment_length: number): number {
          /*
          Calculates the height of the elbows from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.630;
        }

        export function height_from_height_wrist(segment_length: number): number {
          /*
          Calculates the height of the elbows from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.485;
        }

        export function height_from_height_fingertip(segment_length: number): number {
          /*
          Calculates the height of the fingertips from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.377;
        }

        export function height_from_height_hips(segment_length: number): number {
          /*
          Calculates the height of the hips from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.530;
        }

        export function height_from_height_buttocks(segment_length: number): number {
          /*
          Calculates the height of the buttocks from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.485;
        }

        export function height_from_height_knee(segment_length: number): number {
          /*
          Calculates the height of the knees from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.285;
        }

        export function height_from_height_ankle(segment_length: number): number {
          /*
          Calculates the height of the ankles from the ground based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.039;
        }

        export function height_from_head_height(segment_length: number): number {
          /*
          Calculates the height of the head based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.130;
        }

        export function height_from_shoulder_distance(segment_length: number): number {
          /*
          Calculates the horizontal distance from the center of the chest to the shoulder based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.129;
        }

        export function height_from_shoulder_width(segment_length: number): number {
          /*
          Calculates the width of the shoulders based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.259;
        }

        export function height_from_hips_width(segment_length: number): number {
          /*
          Calculates the horizontal width of the hips based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.191;
        }

        export function height_from_nipple_width(segment_length: number): number {
          /*
          Calculates the horizontal distance between nipples based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.174;
        }

        export function height_from_foot_width(segment_length: number): number {
          /*
          Calculates the foot breadth based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.055;
        }

        export function height_from_foot_length(segment_length: number): number {
          /*
          Calculates the foot length based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.152;
        }

        export function height_from_humerus_length(segment_length: number): number {
          /*
          Calculates the humerus (shoulder to elbow) length based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.186;
        }

        export function height_from_forearm_length(segment_length: number): number {
          /*
          Calculates the forearm length (elbow to wrist) based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.146;
        }

        export function height_from_hand_length(segment_length: number): number {
          /*
          Calculates the hand length (wrist to fingertips) based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.108;
        }

        export function height_from_upperbody_length(segment_length: number): number {
          /*
          Calculates the upper body length (top of head to bottom of torso) based on the body height
          */
          if (segment_length <= 0) {
            return 0;
          }
          return segment_length/0.520;
        }

        export class Segment {
            private body_height;

            constructor(body_height: number) {
                if(body_height <= 0) {
                    throw Error('body height must be > 0')
                }
                this.body_height = body_height
            }

            height_eyes = function(): number {
              /*
              Calculates the height of the eyes from the ground based on the body height
              */
              return 0.936 * this.body_height;
            }

            height_head = function(): number {
              /*
              Calculates the height of the head (up to the bottom of the chin) from the ground based on the body height
              */
              return 0.870 * this.body_height;
            }

            height_shoulders = function(): number {
              /*
              Calculates the height of the shoulders from the ground based on the body height
              */
              return 0.818 * this.body_height;
            }

            height_chest = function(): number {
              /*
              Calculates the height of the chest (equal to the nipples) from the ground based on the body height
              */
              return 0.720 * this.body_height;
            }

            height_elbow = function(): number {
              /*
              Calculates the height of the elbows from the ground based on the body height
              */
              return 0.630 * this.body_height;
            }

            height_wrist = function(): number {
              /*
              Calculates the height of the elbows from the ground based on the body height
              */
              return 0.485 * this.body_height;
            }

            height_fingertip = function(): number {
              /*
              Calculates the height of the fingertips from the ground based on the body height
              */
              return 0.377 * this.body_height;
            }

            height_hips = function(): number {
              /*
              Calculates the height of the hips from the ground based on the body height
              */
              return 0.530 * this.body_height;
            }

            height_buttocks = function(): number {
              /*
              Calculates the height of the buttocks from the ground based on the body height
              */
              return 0.485 * this.body_height;
            }

            height_knee = function(): number {
              /*
              Calculates the height of the knees from the ground based on the body height
              */
              return 0.285 * this.body_height;
            }

            height_ankle = function(): number {
              /*
              Calculates the height of the ankles from the ground based on the body height
              */
              return 0.039 * this.body_height;
            }

            head_height = function(): number {
              /*
              Calculates the height of the head based on the body height
              */
              return 0.130 * this.body_height;
            }

            shoulder_distance = function(): number {
              /*
              Calculates the horizontal distance from the center of the chest to the shoulder based on the body height
              */
              return 0.129 * this.body_height;
            }

            shoulder_width = function(): number {
              /*
              Calculates the width of the shoulders based on the body height
              */
              return 0.259 * this.body_height;
            }

            hips_width = function(): number {
              /*
              Calculates the horizontal width of the hips based on the body height
              */
              return 0.191 * this.body_height;
            }

            nipple_width = function(): number {
              /*
              Calculates the horizontal distance between nipples based on the body height
              */
              return 0.174 * this.body_height;
            }

            foot_width = function(): number {
              /*
              Calculates the foot breadth based on the body height
              */
              return 0.055 * this.body_height;
            }

            foot_length = function(): number {
              /*
              Calculates the foot length based on the body height
              */
              return 0.152 * this.body_height;
            }

            humerus_length = function(): number {
              /*
              Calculates the humerus (shoulder to elbow) length based on the body height
              */
              return 0.186 * this.body_height;
            }

            forearm_length = function(): number {
              /*
              Calculates the forearm length (elbow to wrist) based on the body height
              */
              return 0.146 * this.body_height;
            }

            hand_length = function(): number {
              /*
              Calculates the hand length (wrist to fingertips) based on the body height
              */
              return 0.108 * this.body_height;
            }

            upperbody_length = function(): number {
              /*
              Calculates the upper body length (top of head to bottom of torso) based on the body height
              */
              return 0.520 * this.body_height;
            }
        }
    }
}
