import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render,screen } from "@testing-library/react";
import AppStore from "../../utils/AppStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("should load Header Component and Login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>)

    //Querying 
    const LoginBtn=screen.getByRole("button");
    
    //Assertion
    expect(LoginBtn).toBeInTheDocument()
})

test("should load cart items - 0",()=>{
    render(
    <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>)

    //Querying 
    const Cartitems=screen.getByText("0 Cart");
    
    //Assertion
    expect(Cartitems).toBeInTheDocument()
})

test("should load cart items - 0/1/2",()=>{
    render(
    <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>)

    //Querying 
    const Cartitems=screen.getByText(/Cart/);
    
    //Assertion
    expect(Cartitems).toBeInTheDocument()
})

test("Login Button and Logout button flow",()=>{
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
        <Header/>
        </Provider>
        </BrowserRouter>)
    
    const Loginbtn=screen.getByRole("button",{name:"Login"});
    expect(Loginbtn).toBeInTheDocument()

    fireEvent.click(Loginbtn)

    const Logoutbtn=screen.getByRole("button",{name:"Logout"});
    expect(Logoutbtn).toBeInTheDocument()
})