# Features 

Add to Cart Functionality:
 - Implement an event handler function in React that triggers upon clicking the "Add to Cart" button.
 - Update the state representing the cart items by adding the selected product details (e.g., ID, quantity) to the existing list of cart items.
Order Summary Update:
 - Utilize React components to render the Order Summary section.
 - Ensure that the component responsible for displaying the Order Summary dynamically updates whenever there is a change in the cart items state.
Price Calculation:
 - Retrieve the price of each product either from the component's props or a centralized data source.
 - Calculate the subtotal by iterating through the list of cart items and summing up their individual prices.
Shipping Charges Display:
 - Implement logic within the React component to calculate shipping charges based on predefined rules or user input.
 - Dynamically render the shipping charges in the Order Summary section based on the calculated value.
Tax Charges Presentation:
 - Implement a function to calculate tax charges based on the subtotal and applicable tax rates.
 - Display the calculated tax charges dynamically within the Order Summary component.
Total Calculation:
 - Calculate the total amount payable by summing up the subtotal, shipping charges, and tax charges.
 - Ensure that the total amount updates dynamically as any of the contributing factors change.
Display Grand Total:
 - Render the Grand Total amount within the Order Summary component.
 - Ensure that the Grand Total updates dynamically whenever there is a change in the subtotal, shipping charges, or tax charges.