import RestaurantCardMenu from "../RestaurantCardMenu"
import mock from "../../mocks/mockrestaurantmenu.json"
import { act } from "react";
import { fireEvent, render , screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import "@testing-library/jest-dom"
import Header from "../Header"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>  Promise.resolve(mock)
    })
});
// jest.mock("../images/downarrow.png",() => 'downarrow.png')
// jest.mock("../images/uparrow.png",() => 'uparrow.png')


test("should load Restaurant item page and accordion header",async ()=>{
   await act(()=>{
    render(
        <BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
    <RestaurantCardMenu/>
    </Provider>
    </BrowserRouter>)
   }) 
   const accordian_header=screen.getByText("Gourmet Pizza Range (5)");
   fireEvent.click(accordian_header);
   expect(screen.getAllByTestId("foodItems").length).toBe(5);

   const beforecartitems=screen.getByText("0 Cart");
   expect(beforecartitems).toBeInTheDocument()

   const addBtns=screen.getAllByText("ADD");
   fireEvent.click(addBtns[0]);

   const cartitems=screen.getByText("1 Cart");
   expect(cartitems).toBeInTheDocument()


})