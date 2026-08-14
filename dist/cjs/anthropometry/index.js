"use strict";
/*
Anthropometry formulas
Winter, David A. Biomechanics and Motor Control of Human Movement. New York, N.Y.: Wiley, 2009. Print.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
exports.height_from_height_eyes = height_from_height_eyes;
exports.height_from_height_head = height_from_height_head;
exports.height_from_height_shoulders = height_from_height_shoulders;
exports.height_from_height_chest = height_from_height_chest;
exports.height_from_height_elbow = height_from_height_elbow;
exports.height_from_height_wrist = height_from_height_wrist;
exports.height_from_height_fingertip = height_from_height_fingertip;
exports.height_from_height_hips = height_from_height_hips;
exports.height_from_height_buttocks = height_from_height_buttocks;
exports.height_from_height_knee = height_from_height_knee;
exports.height_from_height_ankle = height_from_height_ankle;
exports.height_from_head_height = height_from_head_height;
exports.height_from_shoulder_distance = height_from_shoulder_distance;
exports.height_from_shoulder_width = height_from_shoulder_width;
exports.height_from_hips_width = height_from_hips_width;
exports.height_from_nipple_width = height_from_nipple_width;
exports.height_from_foot_width = height_from_foot_width;
exports.height_from_foot_length = height_from_foot_length;
exports.height_from_humerus_length = height_from_humerus_length;
exports.height_from_forearm_length = height_from_forearm_length;
exports.height_from_hand_length = height_from_hand_length;
exports.height_from_upperbody_length = height_from_upperbody_length;
function height_from_height_eyes(segment_length) {
    /*
    Calculates the height of the eyes from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.936;
}
function height_from_height_head(segment_length) {
    /*
    Calculates the height of the head (up to the bottom of the chin) from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.870;
}
function height_from_height_shoulders(segment_length) {
    /*
    Calculates the height of the shoulders from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.818;
}
function height_from_height_chest(segment_length) {
    /*
    Calculates the height of the chest (equal to the nipples) from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.720;
}
function height_from_height_elbow(segment_length) {
    /*
    Calculates the height of the elbows from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.630;
}
function height_from_height_wrist(segment_length) {
    /*
    Calculates the height of the elbows from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.485;
}
function height_from_height_fingertip(segment_length) {
    /*
    Calculates the height of the fingertips from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.377;
}
function height_from_height_hips(segment_length) {
    /*
    Calculates the height of the hips from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.530;
}
function height_from_height_buttocks(segment_length) {
    /*
    Calculates the height of the buttocks from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.485;
}
function height_from_height_knee(segment_length) {
    /*
    Calculates the height of the knees from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.285;
}
function height_from_height_ankle(segment_length) {
    /*
    Calculates the height of the ankles from the ground based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.039;
}
function height_from_head_height(segment_length) {
    /*
    Calculates the height of the head based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.130;
}
function height_from_shoulder_distance(segment_length) {
    /*
    Calculates the horizontal distance from the center of the chest to the shoulder based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.129;
}
function height_from_shoulder_width(segment_length) {
    /*
    Calculates the width of the shoulders based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.259;
}
function height_from_hips_width(segment_length) {
    /*
    Calculates the horizontal width of the hips based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.191;
}
function height_from_nipple_width(segment_length) {
    /*
    Calculates the horizontal distance between nipples based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.174;
}
function height_from_foot_width(segment_length) {
    /*
    Calculates the foot breadth based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.055;
}
function height_from_foot_length(segment_length) {
    /*
    Calculates the foot length based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.152;
}
function height_from_humerus_length(segment_length) {
    /*
    Calculates the humerus (shoulder to elbow) length based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.186;
}
function height_from_forearm_length(segment_length) {
    /*
    Calculates the forearm length (elbow to wrist) based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.146;
}
function height_from_hand_length(segment_length) {
    /*
    Calculates the hand length (wrist to fingertips) based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.108;
}
function height_from_upperbody_length(segment_length) {
    /*
    Calculates the upper body length (top of head to bottom of torso) based on the body height
    */
    if (segment_length <= 0) {
        return 0;
    }
    return segment_length / 0.520;
}
class Segment {
    body_height;
    constructor(body_height) {
        if (body_height <= 0) {
            throw Error('body height must be > 0');
        }
        this.body_height = body_height;
    }
    height_eyes() {
        /*
        Calculates the height of the eyes from the ground based on the body height
        */
        return 0.936 * this.body_height;
    }
    height_head() {
        /*
        Calculates the height of the head (up to the bottom of the chin) from the ground based on the body height
        */
        return 0.870 * this.body_height;
    }
    height_shoulders() {
        /*
        Calculates the height of the shoulders from the ground based on the body height
        */
        return 0.818 * this.body_height;
    }
    height_chest() {
        /*
        Calculates the height of the chest (equal to the nipples) from the ground based on the body height
        */
        return 0.720 * this.body_height;
    }
    height_elbow() {
        /*
        Calculates the height of the elbows from the ground based on the body height
        */
        return 0.630 * this.body_height;
    }
    height_wrist() {
        /*
        Calculates the height of the elbows from the ground based on the body height
        */
        return 0.485 * this.body_height;
    }
    height_fingertip() {
        /*
        Calculates the height of the fingertips from the ground based on the body height
        */
        return 0.377 * this.body_height;
    }
    height_hips() {
        /*
        Calculates the height of the hips from the ground based on the body height
        */
        return 0.530 * this.body_height;
    }
    height_buttocks() {
        /*
        Calculates the height of the buttocks from the ground based on the body height
        */
        return 0.485 * this.body_height;
    }
    height_knee() {
        /*
        Calculates the height of the knees from the ground based on the body height
        */
        return 0.285 * this.body_height;
    }
    height_ankle() {
        /*
        Calculates the height of the ankles from the ground based on the body height
        */
        return 0.039 * this.body_height;
    }
    head_height() {
        /*
        Calculates the height of the head based on the body height
        */
        return 0.130 * this.body_height;
    }
    shoulder_distance() {
        /*
        Calculates the horizontal distance from the center of the chest to the shoulder based on the body height
        */
        return 0.129 * this.body_height;
    }
    shoulder_width() {
        /*
        Calculates the width of the shoulders based on the body height
        */
        return 0.259 * this.body_height;
    }
    hips_width() {
        /*
        Calculates the horizontal width of the hips based on the body height
        */
        return 0.191 * this.body_height;
    }
    nipple_width() {
        /*
        Calculates the horizontal distance between nipples based on the body height
        */
        return 0.174 * this.body_height;
    }
    foot_width() {
        /*
        Calculates the foot breadth based on the body height
        */
        return 0.055 * this.body_height;
    }
    foot_length() {
        /*
        Calculates the foot length based on the body height
        */
        return 0.152 * this.body_height;
    }
    humerus_length() {
        /*
        Calculates the humerus (shoulder to elbow) length based on the body height
        */
        return 0.186 * this.body_height;
    }
    forearm_length() {
        /*
        Calculates the forearm length (elbow to wrist) based on the body height
        */
        return 0.146 * this.body_height;
    }
    hand_length() {
        /*
        Calculates the hand length (wrist to fingertips) based on the body height
        */
        return 0.108 * this.body_height;
    }
    upperbody_length() {
        /*
        Calculates the upper body length (top of head to bottom of torso) based on the body height
        */
        return 0.520 * this.body_height;
    }
}
exports.Segment = Segment;
//# sourceMappingURL=index.js.map