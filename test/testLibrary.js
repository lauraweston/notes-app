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
        }
    };
};

var before;
var beforeEach = function (callback) {
    before = callback;
};

var it = function (description, callback) {
    console.log(description);
    try {
        if (typeof before === "function") {
            before();
        }
        callback();
        console.log("Passed");
        passing++;
    } catch (e) {
        console.error("Failed: " + e.message);
        failing++;
    }
    console.log(passing + " passing", failing + " failing");
};


