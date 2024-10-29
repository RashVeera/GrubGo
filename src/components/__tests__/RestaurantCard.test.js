import RestaurantCard from "../RestaurantCard";
import __MOCKS__ from "../../mocks/mockrestaurantCard.json"
import { render ,screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import { WithOfferDetails } from "../RestaurantCard";

test("should load restaurant card component and find a restaurant name",()=>{
render(<RestaurantCard restaurantData={__MOCKS__}/>);
const name=screen.getByText("Shri Gowri Krishnaa");
expect(name).toBeInTheDocument()
});

test("should load restaurant card with the offer details",()=>{
    const RestaurantCardwithOffer=WithOfferDetails(RestaurantCard)

    render(<RestaurantCardwithOffer restaurantData={__MOCKS__}/>);
    const offer=screen.getByText("₹100 OFF ABOVE ₹349");
    expect(offer).toBeInTheDocument()

})