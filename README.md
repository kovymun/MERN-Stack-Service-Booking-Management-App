# Automobile Service Booking Application (Full-Stack Web Development)

## Table of Contents:

- [Description](#description)
- [Tools and Programming languages used](#tools-and-programming-languages-used)
- [Software Requirements](#software-requirements)
- [Installation guide](#installation-guide)
- [Usage guide](#usage-guide)
- [App Security Measures](#app-security-measures)
- [App Testing Measures](#app-testing-measures)
- [Deployed App Link](#deployed-app-link)
- [Credits Section](#credits-section)

## Description:

This is a **Full MERN Stack web development learning project** - of a **Automobile Service Booking Web Application**. It is developed by the fictitious _Innovative Ideas Inc._ tech company, for a fictitious automobile service company called **Tyler’s Auto Clinic**. **Tyler’s Auto Clinic** is branded and marketed as **TAC**. In this README file, for reference purposes, **Tyler’s Auto Clinic** will be referred to as **TAC**.

The TAC service booking web application is designed for internal use and will primarily be used by the service booking department within the TAC organization. The app affords the users/booking department of Tyler’s Auto Clinic to carry out their daily responsibilities, which are to monitor, review, schedule, update, and cancel customer service bookings.

It was developed using the MERN stack of technologies, and styled using CSS, Bootstrap V5 and React-Bootstrap library.

## Tools and Programming languages used:

- MERN Stack Technologies.
- Code Editor - VS Code.
- ReactJS - JavaScript Framework.
- ExpressJS - NodeJS Framework.
- Database - MongoDB.
- CSS.
- Bootstrap V5.
- React-Bootstrap library.

## Software Requirements

### System Architecture

#### Technology Stack:

The _TAC service booking app_ will be developed using the **MERN stack of technologies**. Those technologies are, _MongoDB, ExpressJS, ReactJS and NodeJS_.

The technology stack will be implemented as follows:

- **MongoDB**, the database component of the MERN technology stack, will be used to securely store the _customer service bookings_, and the _user/admin sign up/login credentials_.
- The **ExpressJS framework** will be used to configure the custom _backend_ server.
- The **ReactJS library** will be used to develop the user interface _frontend_ of the web-application.
- **NodeJS framework** will be used to configure the server and for the JavaScript runtime environment.

In addition, the web application will be developed using _Create-React-App_ since performance won't be a major concern.

Decision to develop the app using the **MERN stack** is based on the following reasons:

- The **MERN stack is entirely JavaScript-based**. This means that the developers can use a single programming language for both the front-end and back-end of the application, which simplifies the development process.
- **Performance**: Each of the technologies in the MERN stack are designed for high performance, which means that applications built with this technology stack are fast and responsive.
- **Scalability**: The MERN stack is designed to be highly scalable, making it a great choice for applications that need to handle a large amount of data or traffic. MongoDB, the database component of the stack, is particularly well-suited for scaling horizontally across multiple servers.
- **Popular**: The MERN stack is widely used and has a large and active community of developers, which means that there are plenty of resources and tools available to help developers build and maintain the application.

#### Software Architecture Pattern:

The app will be developed/structured using the **MVC (Model-View-Controller) software architecture pattern**.

Decision to develop the app using this architecture pattern is based on the following reasons:

- **Separation of concerns**: The MVC pattern promotes separation of concerns by dividing the application into three interconnected component layers: Model, View, and Controller. This allows developers to focus on one aspect of the application without having to worry about the other components. Independent of the others, the components within a certain layer will deal with the logic pertaining to that layer – either user interface, business, or orchestration logic.
- **Code organization**: The MVC pattern helps to organize code in a way that makes it easier to manage and maintain. Each component has a distinct role, making it easier to locate and modify code related to that component.
- **Scalability**: The MVC pattern can make an application more scalable by allowing for the addition or removal of components as needed without affecting the other components.

### System Requirements

**Functional use** of the app will have **authorized access/restrictions** based on the **roles and responsibilities** of the **employees/users within the department**. The **manager** of the department will have **administrative access rights** to the app, allowing _monitoring, reviewing, scheduling, updating, and cancellation_ of all service bookings. The **service booking agents** within the department will have **access rights** for _monitoring, reviewing, and scheduling bookings_ **only**.

If new service booking agents are employed by the department, the app allows new users to sign up to the app, using their **company email address and unique password**.

The **automobile services** offered by TAC are as follows:

- Car: Battery Testing.
- Car: Full Detail Vehicle Safety Assessment.
- Wheels: Wheel Balancing and Alignment.
- Wheels: Tyre Puncture Assessment and Repairs.
- Engine: Oil and Filter Replacement.

### Functional Requirements:

1. **Normal and admin users** should be able to **sign-in or login** to the TAC service booking web application, using their **company email address and unique password**. **Admin users** will need to enter a **SECRET KEY** to sign-up to the app.
2. Based on **functional role and responsibility**, the user should be able to _monitor, review, schedule, update and cancel_ customer service bookings.
3. To expand on this further, the **service booking manager** will be given **administrative access rights**, allowing the manager to _monitor, review, schedule, update, and cancel_ customer service bookings.
4. The **service booking agents** will be considered as a **normal app user**, and will be afforded **access rights** to _monitor, review and schedule_ bookings only.

### Non-functional Requirements:

1. The web application should be developed using the **MERN technology stack (MongoDB, ExpressJS, ReactJS and NodeJS)**. The **front-end** should be built with **ReactJS**, while the **backend** should have a custom server built using **ExpressJS**.
2. Considering that the **user** might not be **tech savvy**, the app should be **user-friendly and easy to navigate**.
3. The application should be developed to be **reliable, dependable, and easily maintainable**.
4. The app and the user data, including sign up and login credentials, should be **secure and protected**.
5. The application allows for **normal end-user and admin authentication and authorization**.

### User Stories:

A user story is a short, simple description of a feature told from the perspective of the person who desires a new capability, usually a user or customer of the system/app.

The format for the user story, used in this task, is referenced from Mike Cohn’s Mountain Goat Software website. REFERENCE LINK: https://www.mountaingoatsoftware.com/agile/user-stories

The user stories for the TAC service booking web application are presented below (you can use https://stackedit.io/ to view the entire readme.md file, to view the below image of all user stories.):

![TAC_User Stories](https://user-images.githubusercontent.com/78513588/236649470-ee916286-8a4d-4537-8796-c82dbfbfd603.png)

## Installation Guide:

To install and use this project, **follow these guidelines**:

Downloading the repository:

- Click the small arrow on the green **Code** button at the top right of the repository contents.
- From the _drop-down options_, select **Download Zip.**
- This will download the repository to your local machine.

Once the repository has been downloaded, execute the following steps:

- Open the **booking-manager** directory in VS code editor or editor of choice.
- Take a moment to view how the project folders are structured.
- In your _command line interface_, navigate to the **backend** directory. _cd backend_ and run **npm install** to install the packages and dependencies for the back-end of the application.
- Navigate to the **frontend** directory. cd .. and _cd frontend_ and run **npm install** to install the packages and dependencies for the front-end of the application.
- Once packages and dependencies are installed, navigate back to the **backend** directory _cd .._ and run **npm start** to start up the website/app.
- Once your server is running, navigate to **localhost:3000** on your browser to view the app.

![download_github](https://github.com/kovymun/MERN-booking-management-app/assets/78513588/5d44a28c-18be-4521-8b9f-d5aed5addfd0)

## Usage Guide:

As previously mentioned, the TAC service booking web application is designed for **internal use** and will primarily be used by the **service booking department** within the TAC organization. **Access rights** to the app are based on **roles and responsibilities** within the service booking department.

These **roles** are categorized as **admin users or normal users**. The **service booking manager (admin user)** will be given **administrative access** rights, allowing the manager to _monitor, review, schedule, update, and cancel_ customer service bookings. The **service booking agents** will be considered as a **normal app user**, and will be afforded access rights to _monitor, review and schedule_ bookings only.

The web application consists of five pages:

- The Landing Page.
- The Sign-Up Page.
- The Login Page.
- The Home Page (Render dependent on either Admin or Normal User login).
- The Update Bookings Page (Access rights provided to the admin user).

### Sign-Up to the app:

In order to sign-up to the application, follow these guidelines:

- Launch the application after following the instructions in the **Installation Guide**.
- You will, by default, be presented with the **Landing Page**.
- The user will be presented with two links, **Login** or **Sign-Up**. Clicking on the _respective link_ will route the user accordingly to the _respective page_.
- **Normal and admin users** should be able to **sign-in** to the TAC service booking web application, using their **company email address** (e.g. kyle@tac.co.za) and **unique password**. **Admin users** will need to additionally enter a **SECRET KEY** to sign-up to the app. **IMPORTANT NOTE:** For the purpose of this learning project, the SECRET KEY will be shared, but under real-world conditions, the KEY will be only known to the service booking department manager whom has administrative access rights (admin user). _SECRET KEY_ = TACadmin3412#
- The user will then be automatically logged into the application.
- Users can login to the application using their **email address and unique password**, used to sign-up to the application.

![Sign_In](https://github.com/kovymun/my-online-store/assets/78513588/6ffa02d5-e4e6-4d38-b120-2ac69e1d6a1b)

![Normal_Sign_In](https://github.com/kovymun/my-online-store/assets/78513588/f58bb9f9-bb3f-4b59-9bd6-c0f12df1163f)

![Admin_Sign_In](https://github.com/kovymun/my-online-store/assets/78513588/242c1104-2d4f-4a52-8e93-764a3de40e54)

### As an Admin User (Service Booking department manager):

In-order to use this app, follow these guidelines:

The app allows the service booking department manager to _schedule, track, update, and cancel_ service bookings.

#### Scheduling a Booking:

- **To schedule a booking**: On the right hand side of your home-page, you will find a **schedule booking form**.
- Enter the _customer name and contact number, vehicle make, model and registration number, the service date and time, and the service to be delivered to the customer_.
- To complete the scheduling of the new booking, click on the **SCHEDULE BOOKING** button.
- The new service booking will be _reflected_ on your **home page dashboard** display.

#### Updating a Booking:

- **To update a booking**: Scroll to the **individual booking**, on your home page dashboard display, you want to update.
- Within the booking display, click on **UPDATE** button. You will be re-directed to the Update Booking Page.
- Enter the booking ID of the booking you want to update. This ID can be retrieved from your home page dashboard display or from the URL while on the Update Booking Page.
- Enter the updated customer name and contact number, vehicle make, model and registration number, the service date and time, and the service to be delivered to the customer.
- To complete the updating of your booking, click on the **UPDATE BOOKING** button.
- You will re-directed to the **home page dashboard** display.

#### Cancelling a Booking:

- **To cancel a booking**: Scroll to the **individual booking**, on your home page dashboard display, you want to remove.
- Within the booking display, click on **CANCEL** button. The booking will then be removed from your home page dashboard display.

![Admin_Home Page](https://github.com/kovymun/my-online-store/assets/78513588/a375e4a0-f32e-428c-adb5-bfe202a1a2de)

![Update Booking_Page](https://github.com/kovymun/my-online-store/assets/78513588/9364ea86-f095-4eba-a648-9607cb257677)

### As a Normal User (Service Booking Agent):

In-order to use this app, follow these guidelines:

The app allows the service booking agent to _monitor, review and schedule_ bookings only.

#### Scheduling a Booking:

- **To schedule a booking**: On the right hand side of your home-page, you will find a **schedule booking form**.
- Enter the _customer name and contact number, vehicle make, model and registration number, the service date and time, and the service to be delivered to the customer_.
- To complete the scheduling of the new booking, click on the **SCHEDULE BOOKING** button.
- The new service booking will be **reflected** on your **home page dashboard** display.

![Normal_Home Page](https://github.com/kovymun/my-online-store/assets/78513588/a1affdd2-103c-472d-bf49-10de2719fe1d)

## App Security Measures:

In modern times, app users and programmers must be mindful of the **risks** associated with any technology used in your application. As such, **measures** have been taken to secure this application.

- **Helmet.js framework** is used to _secure_ the back-end ExpressJS portion of the app. HTTP, by design, is open in nature and highly insecure. **Helmet.js** fills in the gap between Node.js and Express.js by **securing HTTP headers** that are returned by the ExpressJS app.
- All **sensitive information** such as _API keys, passwords, database connection strings and SECRET KEYS_ are stored in an **.env** file. The **.env** file is a convenient way to **store environment-specific variables**, such as _API keys and database connections/passwords_, in a simple text file. This enables you to **manage sensitive information** consistently while **maintaining its security**.
- **Authentication and authorization** are implemented using a standard called **JSON Web Tokens (JWT)**. **JWT** is a way of **representing data** that does not allow **tampering during transit**, and that can be **validated using encryption keys**. That is, when the **server receives a JWT**, it has a **sure-fire way** of determining whether the **data it contains is legitimate**.

**IMPORTANT NOTE:** You will be required to insert your **own** _MongoDB database connection string_ into the designated location within the _backend .env_ file. To ensure the successful configuration of your MongoDB database connection for this project, kindly follow the guidelines provided in this link https://www.mongodb.com/docs/guides/atlas/connection-string/. Ensure that the connection string is **inserted accurately** without any _additional spaces or characters_.

## App Testing Measures:

### Front-End Testing:

In this project, _Front-end testing_ is performed using **Enzyme and Jest** testing libraries. There are _two tests_ designed for the front-end - a **snapshot test**, and a **unit test**. To run the tests, follow these **guidelines**:

- In the command line interface, navigate to the **frontend** directory folder, using the following command _cd frontend_.
- **enzyme** library has already been installed using the following command, _npm install --save-dev enzyme @cfaester/enzyme-adapter-react-18_.
- To execute your test, run **npm test** in your command line interface.
- Review your _test results_.

### Back-End Testing:

In this project, _Back-end unit testing_ is performed using **Mocha** and **Chai** testing libraries. To run the test, follow these **guidelines**:

- In the command line interface, navigate to the **backend** directory folder, using the following command _cd backend_.
- Before running the test, it is important to start the back-end server. To initiate this, run the _npm run server_ command.
- **mocha and chai** libraries have already been installed using the following command, _npm install --save-dev mocha chai_.
- To execute your test, run **npm test** in your command line interface.
- Review the _test results_.

## Credits Section:

Sole contributor to this project.
