describe('The constructor', function () {
    it('should finalize the object by default', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);

        // try to overwrite Days.Monday
        Days.Monday = Days.Tuesday;

        expect(Days.Monday).toEqual(Days.Monday);
    });
    it('should not finalize the object if finalize=false is passed', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { finalize: false });
        Days.Monday = 123;

        expect(Days.Monday).toEqual(123);
    });
    it('should start the ordinal values from 0 by default', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);

        expect(Days.Monday.toOrdinal()).toEqual(0);
        expect(Days.Wednesday.toOrdinal()).toEqual(2);
    });
    it('should start the ordinal values from startIndex if it is passed', function () {
        var startIndex = 2;
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { startIndex: startIndex });

        expect(Days.Monday.toOrdinal()).toEqual(startIndex);
        expect(Days.Wednesday.toOrdinal()).toEqual(startIndex + 2);
    });
    it('should accept an array of objects with name and text values as enums', function () {
        var Days = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);

        Days.Monday = Days.Tuesday;
        expect(Days.Monday).toEqual(Days.Monday);
        expect(Days.Monday.toOrdinal()).toEqual(0);
        expect(Days.Monday.toString()).toEqual('Monday');
        expect(Days.Monday.toText()).toEqual('The second day');
    });
});

describe('The toString() method', function () {
    it('should return the name of the enum as a string', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.Monday.toString();

        expect(output1).toEqual('Monday');

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.Monday.toString();

        expect(output2).toEqual('Monday');
    });

    it('should not return the actual reference', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.Monday.toString();

        expect(output1 === Days1.Monday).toBe(false);

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.Monday.toString();

        expect(output2 === Days2.Monday).toBe(false);
    });
});

describe('The toOrdinal() method', function () {
    it('should return the ordinal value of the enum as a Number', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.Monday.toOrdinal();

        expect(output1).toEqual(0);

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.Monday.toOrdinal();

        expect(output2).toEqual(0);
    });

    it('should not return the actual reference', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.Monday.toOrdinal();

        expect(output1 === Days1.Monday).toBe(false);

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.Monday.toOrdinal();

        expect(output2 === Days2.Monday).toBe(false);
    });
});

describe('The toText() method', function () {
    it('should return the textual representation of the enum as a String', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.Monday.toText();

        expect(output1).toEqual('Monday');

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.Monday.toText();

        expect(output2).toEqual('The second day');
    });

    it('should not return the actual reference', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.Monday.toText();

        expect(output1 === Days1.Monday).toBe(false);

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.Monday.toText();

        expect(output2 === Days2.Monday).toBe(false);
    });
});

describe('The getByName() method', function () {
    it('should return the actual reference by a string', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.getByName('Monday');

        expect(output1).toEqual(Days1.Monday);

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.getByName('Monday');

        expect(output2).toEqual(Days2.Monday);
    });
});

describe('The getByOrdinal() method', function () {
    it('should return the actual reference by the ordinal value', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.getByOrdinal(0);

        expect(output1).toEqual(Days1.Monday);

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.getByOrdinal(0);

        expect(output2).toEqual(Days2.Monday);
    });
});

describe('The getNames() method', function () {
    it('should return the initial array', function () {
        var enumNames = [ 'Monday', 'Tuesday', 'Wednesday' ];

        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output1 = Days1.getNames();

        expect(output1).toEqual(enumNames);

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);
        var output2 = Days2.getNames();

        expect(output2).toEqual(enumNames);
    });
});

describe('The contains() method', function () {
    it('should return if the Enum contains the enum name', function () {
        var Days1 = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);

        expect(Days1.contains('Monday')).toEqual(true);
        expect(Days1.contains('monday')).toEqual(false);
        expect(Days1.contains('Sunday')).toEqual(false);

        var Days2 = new Enum([ {name: 'Monday', text: 'The second day'}, {name: 'Tuesday', text: 'The third day'}, {name: 'Wednesday', text: 'The fourth day'} ]);

        expect(Days2.contains('Monday')).toEqual(true);
        expect(Days2.contains('monday')).toEqual(false);
        expect(Days2.contains('Sunday')).toEqual(false);
    });
});