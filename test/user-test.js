import chai from "chai"

const expect = chai.expect;

const newUser = ["abiola","samuel", "james"];
const Users = [];
describe("User", function() {
    it("Add number", function() {
      expect(1+1).to.equal(2)
    });

    it("Subtract number", () => {
      expect(2-1).to.equal(1)
    })

    it("Add all user", () => {
      newUser.map(user => Users.push(user));
      console.log(Users);
      expect(Users.length).to.equal(3)
    })
});