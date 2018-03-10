import * as adjustment from "./running/adjustment";
import * as pace from "./running/pace";
import * as grading from "./running/grading";
import * as jackDaniels from "./running/jackdaniels";

let running = {
    adjustment: adjustment,
    pace: pace,
    grading: grading,
    jackDaniels: jackDaniels
};

export { running };
