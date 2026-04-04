
//Formatter to generate charts
var chartFormatter = function (cell, formatterParams, onRendered) {
    var content = document.createElement("span");
    var values = cell.getValue();

    //invert values if needed
    if (formatterParams.invert) {
        values = values.map(val => val * -1);
    }

    //add values to chart and style
    content.classList.add(formatterParams.type);
    content.inneHrTML = values.join(",");

    //setup chart options
    var options = {
        width: 50,
        // min: 0.0,
        // max: 100.0,
    }

    if (formatterParams.fill) {
        options.fill = formatterParams.fill
    }

    //instantiate piety chart after the cell element has been aded to the DOM
    onRendered(function () {
        peity(content, formatterParams.type, options);
    });

    return content;
};

var colorFormatterGoalInt = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.0em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterSubgoal = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 232, b: 221 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.0em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterActionSeq = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.0em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterTrans = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.0em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}



var barColorFn = function (value, formatterParams) {
    var defaults = {
        range : [-50, 50],
        low: { r: 255, g: 255, b: 255 },
        high: { r: 206, g: 212, b: 218 }
    };

    // Override defaults with provided formatterParams values

    var low_range = (formatterParams && formatterParams.range[0]) || defaults.range[0];
    var high_range = (formatterParams && formatterParams.range[1]) || defaults.range[1];
    var low = (formatterParams && formatterParams.low) || defaults.low;
    var high = (formatterParams && formatterParams.high) || defaults.high;

    // Clamp the value to the range [-100, 100]
    value = Math.max(low_range, Math.min(high_range, value));
    var range = high_range - low_range;

    // Normalize the value to the range [0, 1]
    var normalizedValue = (value + range / 2) / range;
    // Interpolate between the two colors based on the normalized value
    var interpolated = {
        r: Math.floor(low.r + (high.r - low.r) * normalizedValue),
        g: Math.floor(low.g + (high.g - low.g) * normalizedValue),
        b: Math.floor(low.b + (high.b - low.b) * normalizedValue)
    };

    return 'rgba(' + interpolated.r + ',' + interpolated.g + ',' + interpolated.b + ',0.9)';
}

var colorFormatterFloat4 = function (cell, formatterParams) {
    var value = cell.getValue();
    if (value === "-" || value === null || value === undefined) return value ?? "-";

    var defaults = {
        min: 0.0,
        max: 1.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 204, g: 211, b: 202 }
    };

    var min = (formatterParams && formatterParams.min != null) ? formatterParams.min : defaults.min;
    var max = (formatterParams && formatterParams.max != null) ? formatterParams.max : defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    var normalizedValue = (max === min) ? 0 : (value - min) / (max - min);
    normalizedValue = Math.max(0, Math.min(1, normalizedValue));

    var red   = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue  = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    var display = parseFloat(value).toFixed(4);
    return "<span style='display:block;width:100%;height:100%;font-size:1.0em;background-color:rgb(" + red + "," + green + "," + blue + ");'>" + display + "</span>";
};

fetch('website/data/creativitybench_total_benchmark.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
        var getColumnMinMax = function (field) {
            var values = data
                .filter(function (item) { return item.group !== "Average"; })
                .map(function (item) { return item[field]; })
                .filter(function (val) { return val !== "-" && val != null; })
                .map(Number);
            return { min: Math.min.apply(null, values), max: Math.max.apply(null, values) };
        };

        var toolUsageEnd   = { r: 162, g: 196, b: 170 };
        var constraintEnd  = { r: 181, g: 192, b: 208 };
        var groundingEnd   = { r: 245, g: 232, b: 221 };
        var feasibilityEnd = { r: 238, g: 211, b: 217 };
        var predictionEnd  = { r: 204, g: 211, b: 202 };

        var makeCol = function (title, field, endColor) {
            var minMax = getColumnMinMax(field);
            return {
                title: title,
                field: field,
                cssClass: "avg-column",
                hozAlign: "center",
                minWidth: 110,
                headerSort: true,
                sorter: "number",
                formatter: colorFormatterFloat4,
                formatterParams: { min: minMax.min, max: minMax.max, startColor: { r: 255, g: 255, b: 255 }, endColor: endColor }
            };
        };

        var cb_columns = [
            {
                title: "Model",
                field: "model",
                cssClass: "avg-column cb-model-col",
                widthGrow: 1.5,
                minWidth: 180,
                headerSort: true
            },
            {
                title: "Tool Usage",
                columns: [
                    makeCol("Gold Correct",   "gold_correct",   toolUsageEnd),
                    makeCol("Entity Correct", "entity_correct", toolUsageEnd)
                ]
            },
            {
                title: "Constraint Coverage",
                columns: [
                    makeCol("Use (Cu)",   "constraint_use",  constraintEnd),
                    makeCol("Env. (Ce)",  "constraint_env",  constraintEnd),
                    makeCol("Rcpt. (Cr)", "constraint_rcpt", constraintEnd)
                ]
            },
            makeCol("Physical Grounding",     "physical_grounding",     groundingEnd),
            makeCol("Action Feasibility",     "action_feasibility",     feasibilityEnd),
            makeCol("Prediction Correctness", "prediction_correctness", predictionEnd)
        ];

        new Tabulator("#creativitybench-benchmark-main-table", {
            data: data,
            layout: "fitColumns",
            movableColumns: false,
            groupBy: "group",
            groupHeader: function (value, count) {
                if (value === "Average") return "<em>Average</em>";
                return "<em>" + value + " Models</em>";
            },
            rowFormatter: function (row) {
                if (row.getData().group === "Average") {
                    row.getElement().classList.add("cb-row-average");
                }
            },
            columnDefaults: { tooltip: true },
            columns: cb_columns
        });
    })
    .catch(function (err) { console.error("CreativityBench table error:", err); });

