const kod = require("../kod.js")

const addArgs = (args) => {
    process.argv = process.argv.concat(args)
}

const clearArgs = () => {
    process.argv = process.argv.slice(0, 2)
}


describe("INPUT ARG PARSER", () => {
    
    beforeEach(() => {
        clearArgs()
    })

    it("should return a string", () => {
        addArgs(["1"])
        expect(kod.getArgAsString(0)).toBe("1")
    })

    it("should return a number", () => {
        addArgs(["-1", "123456789", "0009"])
        expect(kod.getArgAsNumber(0)).toBe(-1)
        expect(kod.getArgAsNumber(1)).toBe(123456789)
        expect(kod.getArgAsNumber(2)).toBe(9)
    })

    it("should return a boolean", () => {
        addArgs(["true", "false", "0"])
        expect(kod.getArgAsBoolean(0)).toBe(true)
        expect(kod.getArgAsBoolean(1)).toBe(false)
        expect(kod.getArgAsBoolean(2)).toBe(false)
    })

    it("should return an array", () => {
        addArgs(`["1","2","3"]`)
        expect(kod.getArgAsArray(0)).toEqual(["1", "2", "3"])
    })

    it("should return an array of numbers", () => {
        addArgs(["[1,2,3]"])
        expect(kod.getArgAsArray(0)).toEqual([1, 2, 3])
    })

    it("should return an 2d array of numbers", () => {
        addArgs(["[[1,2],[3]]"])
        expect(kod.getArgAsArray(0)).toEqual([[1, 2], [3]])
    })

    it("should return an object", () => {
        addArgs(['{"1":"2"}'])
        expect(kod.getArgAsObject(0)).toEqual({ "1": "2" })
    })

    it("should return a date", () => {
        addArgs(["2020-01-01"])
        expect(kod.getArgAsDate(0)).toEqual(new Date("2020-01-01"))
    })
})

describe("KOD PRINTER", () => {
    it("should print a string", () => {
        const spy = jest.spyOn(console, 'log')
        kod.print("1")
        expect(spy).toHaveBeenCalledWith("1")
    })

    it("should print a boolean", () => {
        const spy = jest.spyOn(console, 'log')
        kod.printAsBoolean("1")
        expect(spy).toHaveBeenCalledWith(true)
    })

    it("should print an array", () => {
        const spy = jest.spyOn(console, 'log')
        kod.printAsArray([1, 2, 3])
        expect(spy).toHaveBeenCalledWith("[1,2,3]")
    })
})