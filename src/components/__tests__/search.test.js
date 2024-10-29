import { fireEvent, render,screen } from "@testing-library/react";
import Body from  "../Body"
import MOCK from "../../mocks/RestaurantData.json";
import "@testing-library/jest-dom"
import {act} from "react";
import { BrowserRouter } from "react-router-dom";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK)
        }
    })
})

test("should load body component and find a search button",async ()=>{
    await act(async ()=>{
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>);
    })    
    const cardsbefore=screen.getAllByTestId("rescards");
    expect(cardsbefore.length).toBe(28)
    const searchbtn=screen.getByRole("button",{name:"Search"});
    const search=screen.getByTestId("searchInput")
    fireEvent.change(search,{
        target:{
            value:"burger"
        }
    })
    fireEvent.click(searchbtn);

    const cardsafter=screen.getAllByTestId("rescards");
    expect(cardsafter.length).toBe(21)


})