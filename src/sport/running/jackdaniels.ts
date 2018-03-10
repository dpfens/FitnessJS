import { hrPace } from "./pace"

/*
@description a regression equation relating VO2 with running velocity. Used in conjuction with the "vO2" equation to create the Jack Daniel's VDOT tables.  Initially retrieved from "Oxygen Power: Performance Tables for Distance Runners" by Jack Daniels.
Conditioning for Distance Running - the Scientific Aspects, 1978
@param {Number} VO2 in mL/kg/minute
@returns {Number} velocity in meters/minute
*/
export function velocity(vO2: number): number {
    return 29.54 + 5.000663*vO2 - 0.007546 * Math.pow(vO2, 2);
}

/*
@description a regression equation relating VO2 with running velocity. Used in conjuction with the "velocity" equation to create the Jack Daniel's VDOT tables.  Initially retrieved from "Oxygen Power: Performance Tables for Distance Runners" by Jack Daniels.
Conditioning for Distance Running - the Scientific Aspects, 1978
@param {Number} velocity in meters/minute
@returns {Number} VO2 in mL/kg/minute
*/
export function vO2(velocity: number): number  {
    return -4.60 + 0.182258 * velocity + 0.000104 * Math.pow(velocity, 2);
}
/*
@description describes the percent of an individual's aerobic capacity the individual is capable of working at for how long.  Initially retrieved from "Oxygen Power: Performance Tables for Distance Runners" by Jack Daniels.
Conditioning for Distance Running - the Scientific Aspects, 1978
@param {Number} time spent running in minutes
@returns {Number} VO2 percentage in decimal form
*/
export function vO2Percentage(time: number): number  {
    return 0.8 + Math.pow(0.1894393, -0.012778*time)+ Math.exp(-0.1932605*time);
}

/*
	Easy / Long (E/L) pace
	@description 60-79% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
	@param {Number} vO2Max in mL/(kg•min)
	@returns {Number} pace in min/mile
*/
export function easy(vO2Max: number): number[] {
    return [hrPace(0.6, vO2Max), hrPace(0.79, vO2Max)];
}


/*
	Marathon (M) pace
	@description 80-85% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
	@param {Number} vO2Max in mL/(kg•min)
	@returns {Number} pace in min/mile
*/
export function marathon(vO2Max: number): number[] {
    return [hrPace(0.8, vO2Max), hrPace(0.85, vO2Max)];
}

/*
	Threshold (T) pace
	@description 82-88% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
	@param {Number} vO2Max in mL/(kg•min)
	@returns {Number} pace in min/mile
*/
export function threshold(vO2Max: number): number[] {
    return [hrPace(0.82, vO2Max), hrPace(0.88, vO2Max)];
}

/*
	Interval (I) pace
	@description 97-100% of HRmax,used for recovery runs, warm-up, cool-down and long runs.
	@param {Number} vO2Max in mL/(kg•min)
	@returns {Number} pace in min/mile
*/
export function interval(vO2Max: number): number[] {
    return [hrPace(0.97, vO2Max), hrPace(1, vO2Max)];
}
