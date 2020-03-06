module.exports = {

    getUnitTypes() {
        var units = {
            "LENGTH": {
                "INCH": 1,
                "FEET": 12,
                "YARD": 36,
                "CENTIMETER": 0.3937
            },
            "VOLUME": {
                "GALLON": 3.78,
                "LITRE": 1,
                "MILLILITER": 1000
            },
            "MASS": {
                "KILOGRAM": 1,
                "TONNE": 1000,
                "GRAM": 0.001
            },
            "TEMPERATURE": {
                "CELSIUS": 1,
                "FAHRENHEIT": 0.4716
            }
        }
    }
}
