const { HolidayPackage } = require('./solution.js')
const { assert } = require('chai');

describe('Holiday Package Tests', () => {
    let holiday = undefined;
    let vacationerName = ''
    beforeEach(() => {
        holiday = new HolidayPackage('Italy', 'Summer');
        vacationerName = 'Sam Smith'
    });

    it('Show Vacationers should retutn all vacationers', () => {
        holiday.addVacationer(vacationerName);
        assert.equal(holiday.showVacationers(), "Vacationers:\n" + 'Sam Smith');
    })
    it('Show Vacationers should return "No vacationers are added yet" ', () => {
        assert.equal(holiday.showVacationers(), "No vacationers are added yet");
    })

    it('Add Vacationer should add correct', () => {
        holiday.addVacationer(vacationerName);
        assert.isTrue(holiday.vacationers.includes(vacationerName));
    })
    it('Add Vacationer should throw Error => "Vacationer name must be a non-empty string"', () => {
        assert.throws(() => holiday.addVacationer(1), "Vacationer name must be a non-empty string");
        assert.throws(() => holiday.addVacationer(' '), "Vacationer name must be a non-empty string")
    });
    it('Add Vacationer should throw Error => "Name must consist of first name and last name"', () => {
        assert.throws(() => holiday.addVacationer('Sam'), "Name must consist of first name and last name")
        assert.throws(() => holiday.addVacationer('Sam Smith First'), "Name must consist of first name and last name")
        assert.throws(() => holiday.addVacationer('Sam Smith 0'), "Name must consist of first name and last name")
    });

    it('Get insurance Included should return default value', () => {
        assert.equal(holiday.insuranceIncluded, false);
    });
    it('Set insurance Included should return true', () => {
        holiday.insuranceIncluded = true;
        assert.equal(holiday.insuranceIncluded, true);
    });
    it('Set insurance Included should throw Errro => "Insurance status must be a boolean"', () => {
        assert.throws(() => holiday.insuranceIncluded = "Dima", "Insurance status must be a boolean")
    });

    it('Generate Holiday Package should throw Error =>"There must be at least 1 vacationer added"', () => {
        assert.throws(() => holiday.generateHolidayPackage(), "There must be at least 1 vacationer added");
    });
    it('Generate Holiday Package  in Italy, Summer plus insuranceIncluded =>700 price', () => {
        holiday.addVacationer(vacationerName);
        holiday.insuranceIncluded = true;
        assert.equal(holiday.generateHolidayPackage(), "Holiday Package Generated\n" +
            "Destination: " + 'Italy' + "\n" +
            holiday.showVacationers() + "\n" +
            "Price: " + 700);
    });
    it('Generate Holiday Package in Italy, Winter without insuranceIncluded =>1000 price', () => {
        let holiday = new HolidayPackage('Alaska', 'Winter')
        holiday.addVacationer(vacationerName);
        holiday.addVacationer('Hohn Deep');
        assert.equal(holiday.generateHolidayPackage(), "Holiday Package Generated\n" +
            "Destination: " + 'Alaska' + "\n" +
            holiday.showVacationers() + "\n" +
            "Price: " + 1000);
    });
    // it('Generate Holiday Package in Alaska, Spring without insuranceIncluded =>1000 price', () => {
    //     let holiday = new HolidayPackage('Alaska', 'Spring')
    //     holiday.addVacationer(vacationerName);
    //     holiday.addVacationer('Hohn Deep');
    //     assert.equal(holiday.generateHolidayPackage(), "Holiday Package Generated\n" +
    //         "Destination: " + 'Alaska' + "\n" +
    //         holiday.showVacationers() + "\n" +
    //         "Price: " + 800);
    // });
});