import Body from "../Body"
import Mock from "../../mocks/RestaurantData.json"
import { act } from "react"
import { fireEvent, render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock)
        }
    })
})

// jest.mock('../assets/images/downarrow.png', () => 'downarrow.png');
// jest.mock('../assets/images/uparrow.png', () => 'uparrow.png');


// beforeAll(()=>{
//     console.log("printed before all test suites gets executed")
// })

test("should load body component and find toprated restaurant",async ()=>{
await act(async ()=>{
    render(<BrowserRouter><Body/></BrowserRouter>)
})
const toprated=screen.getByTestId("topratedbtn");
fireEvent.click(toprated)
const restcards=screen.getAllByTestId("rescards");
expect(restcards.length).toBe(24)

})