var passing = 0;
var failing = 0;

var expect = function (actualValue) {
    return {
        toEqual: function (expectedValue) {
            if (actualValue !== expectedValue) {
                throw new Error("Expected " + actualValue + " to equal " + expectedValue);
            }
        },
        toBeTrue: function () {
            if (!actualValue) {
                throw new Error("Expected " + actualValue + " to be true");
            }
        },
        toBeFalse: function () {
            if (actualValue) {
                throw new Error("Expected " + actualValue + " to be false");
            }
        },
        toInclude: function (expectedValue) {
            if (!actualValue.includes(expectedValue)) {
                throw new Error("Expected " + actualValue + " to include " + expectedValue);
            }
        },
        toBeUndefined: function () {
            if (actualValue !== undefined) {
                throw new Error("Expected " + actualValue + " to be undefined");
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
