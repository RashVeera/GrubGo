import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe('contact us page test cases', () => {
    
test("should find a heading",()=>{
    render(<Contact/>);
    //Querying
    const heading=screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
})

test("should find a button",()=>{
    render(<Contact/>);
    //Querying
    const submitbutton=screen.getByRole("button");

    //Assertion
    expect(submitbutton).toBeInTheDocument();
})


test("should find an input box by name",()=>{
    render(<Contact/>);
    //Querying
    const InputBoxname=screen.getByText("Name");

    //Assertion
    expect(InputBoxname).toBeInTheDocument();
})

test("should find an message input box",()=>{
    render(<Contact/>);
    //Querying
    const InputBoxname=screen.getByPlaceholderText("message");

    //Assertion
    expect(InputBoxname).toBeInTheDocument();
    // console.log(InputBoxname)
})

it("should find 2 input box",()=>{
    render(<Contact/>);
    //Querying
    const inputBox=screen.getAllByRole("textbox");

    //Assertion
    expect(inputBox.length).toBe(2);
})
});

