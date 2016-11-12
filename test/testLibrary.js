var passing = 0;
var failing = 0;

var expect = function (actualValue) {
    return {
        toEqual: function (expectedValue) {
            if (actualValue !== expectedValue) {
                throw new Error("Expected " + actualValue + " to equal " + expectedValue);
            }
        },
        toBeTrue: function (actualValue) {
            if (!actualValue) {
                throw new Error("Expected " + actualValue + " to be true");
            }
        },
        toBeFalse: function (actualValue) {
            if (actualValue) {
                throw new Error("Expected " + actualValue + " to be false");
            }
        }
    };
};

var it = function (description, callback) {
    console.log(description);
    try {
        callback();
        console.log("Passed");
        passing++;
    } catch (e) {
        console.error("Failed: " + e.message);
        failing++;
    }
    console.log(passing + " passing", failing + " failing");
};
