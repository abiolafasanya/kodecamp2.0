import { assert, expect } from "chai";
import auth from "../auth.js";

describe("Auth Test", () => {
  it("should run testing", async () => {
    expect(true).to.be.ok;
  });

  it('should check if auth exists', function(){
      expect(auth).to.exist
  })

});
