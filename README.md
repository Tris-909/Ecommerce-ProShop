# Project Name : E-commerce Proshop 
- LIVE DEMO : [E-commerce Proshop](https://proshop-tris.herokuapp.com/)
    - Please use this Paypal SandBox Account to test Paypal APIs : 
      - Account : sb-uj3sb3898726@personal.example.com 
      - Password : ZRy:}9n+

## What is this project about ?
- This is an e-commerce websites to sell electronics that I have built to demonstrate my skills as a developer. I got inspired by E-commerce websites like JB-Hifi so I decided to build an e-commerce websites that looks similar to them.

## Tech-Stacks of this project ? 
- FrontEnd : 
  - React 
  - TypeScript ( using interfaces to have better control of data-flow ) 
  - React Boostrap and Styled Components ( CSS )
  - State Management ( Redux & Redux Thunk )
  - Useful tools : Axios (HTTP Request) and Redux-Helmet (Dynamic page Title)
- Server-side :  
  - NodeJS
  - Express + Express Async Handler + Nodemon
  - Datebases Interaction ( Mongoose )
  - Server-Side Scriptting ( JSONWebToken and bcryptjs )
  - Sending mails : Nodemailer
  - Postman ( API testing ) 
 - Databases : MongoDB ( free-tier AWS )
 - Deployment : Heroku 
 - Version Control : Git and Github
 
## Web Features :
- As **User** : 
  - Browsing through the websites and see different type of products.
  - Be able to filter product based on there specs like filter laptops using ScreenSizes and ProcessorTypes,...
  - Be able to create an account without worrying about leaking information due to encrypted info saved databases.
  - Have a section to keep track of their orders.
  - Have their own Wish List and Cart List with saved data into a databases.
  - Can leave a review for a product, choose to agree or disagree other user reviews 
  - Be able to filter reviews with 6 different choices : <br/>
    _ Highest to Lowest Rating | Lowest to Highest Rating <br/>
    _ Highest to Lowest Agree | Lowest to Highest Agree <br/>
    _ Highest to Lowest DisAgree | Lowest to Highest DisAgree <br/>
  - Can delete their own reviews 
  - Can change their user information account 
  - Proceed to buy a item using credit card or Paypal 
    - Please use this Paypal SandBox Account to test Paypal APIs : 
      - Account : sb-uj3sb3898726@personal.example.com 
      - Password : ZRy:}9n+
   - Be able to reset their password if they register with their gmail 
   
- As **Admin** : 
  - Have all the privileges above 
  - Have Admin Page to control on products, orders, users 
  - Can create a new product visually through an interface
  - Can change information about a product like : name, price, image, description, tech details,... through an interface
  - Update discount price for a specific item thourgh an UI
  
## What did I do in this project ? 
- FrontEnd :  <br/>
  _ Building webpages and re-usable components using React <br />
  _ Design and build responsive layout and render different components for websites based on screen-width ( mobile-first design ) <br />
  _ Building pagination system for lists of product, lists of review, ... to help saving web-performance <br />
  _ Building dynamic filters for products based on brands, tech specs, ... <br />
  _ Building 6 type of filters for reviews section <br />
  _ Building CartList and WishList connected to a databases <br />
  _ Building Product Screen that change detail table based on category <br />
  _ Integrating with Paypal APIs to proceed online payment <br />
  _ Building Admin Page <br />
  _ Building Custom Discount Function and give admin the ability to discount any items as wish thourgh an user interface <br /> 
  _ Using Redux, Redux-Thunk, Redux Dev Tool to manage state of the whole application <br />
  _ Using TypeScript to help demonstrate data-flow in web-application through interfaces <br />
  _ Working with more than 30+ APIs from the backend using axios with different methods <br />
  _ Writting CSS components using React-Boostrap for time-saving but also installing Styled-Components to re-write or create any CSS components if neccessary <br />
- BackEnd : <br /> 
  _ Connecting to MongoDB AWS using mongoose <br />
  _ Using environment variable to secure tokens, keys, ... <br />
  _ Using Routing and Middlewares to create APIs <br /> 
  _ Create tokens using JSON Web Token (jwt) to do Authorization along Authentication <br />
  _ Create middlewares like auth for authorization, admin for checking if the user is an admin, to combine with different type of APIs <br /> 
  _ Create APIs using Express-Async-Handler with Mongoose Model <br /> 
  _ Testing APIs using POSTMAN <br /> 
  _ Returning just enough data in each APIs like a good back-end engineer <br /> 
  _ Implementing reset password functions using nodemailer <br /> 
  _ Writting code with comments (Example) : <br />
    ```javascript
    //?   PUT update order.isPaid to true
    //?   /api/orders/:id
    //?   Private Route
    const updateOrderIsPaidStatus = AsyncHandler(async (req, res) => {
      const { id } = req.params;
      const fetchedOrder = await Order.findById(id);

      if (fetchedOrder) {
        fetchedOrder.isPaid = true;
        fetchedOrder.paidAt = Date.now();
        fetchedOrder.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }

        const updatedOrder = await fetchedOrder.save(); 

        res.status(200).json(updatedOrder);
      } else {    
        res.status(404);
        throw new Error('Can\'t find the Order, please try again');
      }
    });
     ```
  
 
