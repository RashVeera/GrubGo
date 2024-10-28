import sum from "../sum";
test("Sum of 2 numbers",()=>{
    const result=sum(5,7);
    expect(result).toBe(12);
})