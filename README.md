# Automobile Service Booking Management Application (Full-Stack Web Development Project | MERN Stack)

## Table of Contents:

- [Description and Purpose](#description-and-purpose)
- [Disclaimer](#disclaimer)
- [Key Features](#key-features)
- [Tools and Programming languages used](#tools-and-programming-languages-used)
- [Installation Guide](#installation-guide)
- [Usage guide](#usage-guide)
- [App Testing Measures](#app-testing-measures)
- [App Deployment](#app-deployment)
- [User Stories](#user-stories)
- [Future Enhancements](#future-enhancements)
- [Credits Section](#credits-section)

## Description and Purpose:

This is a **Full MERN Stack web development project** of an **Automobile Service Booking Management Application**. It is developed for a fictitious automobile service company called **Tyler’s Auto Clinic**, branded and marketed as **TAC**. Throughout this project and in this README file, we will consistently use the term **TAC** for easy reference.

The **TAC service booking application** is intended for **internal** use, specifically the **service booking department** within the TAC organization. By offering a **user-friendly interface and functionality**, this application serves to **aid, enhance and streamline** daily tasks of the **service booking agents** that include the monitoring, reviewing, scheduling, updating, and canceling of customer service bookings efficiently.

It is developed with the **MERN (MongoDB, ExpressJS, ReactJS and NodeJS) stack of technologies**, styled using **CSS**, and structured using the **MVC (Model-View-Controller) software architecture pattern**.

## Disclaimer:

The content presented in this application, including but not limited to names and email addresses are entirely fictitious and created for demonstration purposes only. The use of fictitious content is intended to showcase the functionality of the application and does not represent any real individuals, businesses, or locations.

As this is a web development project for a fictitious company, certain elements within this application serve aesthetic purposes and do not possess functional attributes. These instances, such as links, will be clearly indicated and documented within the project's source code.

**Media - Images**: All images used in this project are _royalty-free_ sourced from website: Unsplash https://unsplash.com/

## Key Features:

This application has the following key features:

- **Responsive Web Design**: _Responsive Web Design_ is integrated into this application. This ensures that the application _adapts seamlessly to various screen sizes and devices_, offering an _optimal viewing and interaction experience_ for users / service booking agents accessing it from desktops, laptops, tablets, and smartphones.
- **Authentication and Authorization**: This application ensures _secure access_ for service booking agents through _authentication and authorization_ mechanisms. Users log in with their _unique company email address and password_, granting them access to their _personalized dashboard_ displaying only the service bookings _assigned to them_. This ensures that _sensitive information remains confidential_, allowing each agent to _efficiently_ manage their workload independently.
- **Form Validation**: This application utilizes the **react-hook-form library** to ensure _validation of user input in forms_. It verifies that submitted data _meets predefined criteria, including required fields, correct formatting, and valid values_. This proactive approach _minimizes the risk of processing inaccurate or incomplete data_, thereby preserving data integrity and improving overall user satisfaction.
- **CRUD Operations**: This application seamlessly manages both _service bookings and user accounts_ using **CRUD** (CREATE / READ / RETRIEVE / UPDATE / DELETE) methodology. It facilitates the _creation and management of user accounts_, while also providing functionality to _schedule, display, update, cancel, or complete_ service bookings in accordance with CRUD principles.
- **State Management**: The application employs _global state management_ to handle various tasks, including _service booking management, user authentication, and modal triggers_. This approach ensures efficient data handling and enhanced security during authentication processes, thus enhancing user experience and interaction.
- **Real-time Search Functionality**: _Real-time Search Functionality_ allows service booking agents to _easily locate_ specific bookings by entering _search queries_ such as work order numbers or customer names. Whether _typing or pasting_ the search query, this feature _dynamically displays search results in real-time_, providing immediate feedback and ensuring efficient information retrieval. For example, let’s look at a real-world scenario, where the manager emails making an inquiry about a specific booking. Service booking agents can promptly respond by quickly finding _relevant booking details_ through the application's _search capabilities, simplifying the search process_.

## Tools and Programming languages used:

### Frontend:

- ReactJS - JavaScript Framework.
- CSS (Frontend styling).

### Backend:

- ExpressJS - NodeJS Framework.

### Database:

- MongoDB.

### Other:

- Code Editor / IDE: I would recommend using Microsoft Visual Studio code (VS Code) as your preferred code editor / IDE to explore this project. If you do not have VS Code installed and require assistance with downloading and installation, please refer to this guide: https://code.visualstudio.com/docs/setup/setup-overview

## Installation Guide:

To install and use this project, **follow these guidelines**:

Downloading the repository:

- Click the small arrow on the green **Code** button at the top right of the repository contents.
- From the _drop-down options_, select **Download Zip.**
- This will download the repository to your local machine.

<img width="616" alt="repo-download-1" src="https://github.com/kovymun/fs-mern-auto-service-bookings/assets/78513588/b6c92008-6da2-4e0d-8f53-cf298a75cc1b">

Once the repository has been downloaded, execute the following steps:

- Open the **booking-manager** directory in VS code editor or editor of choice.
- Take a moment to view how the project folders are structured.
- In your _command line interface_, navigate to the **backend** directory. _cd backend_ and run **npm install** to install the packages and dependencies for the back-end of the application.
- Navigate to the **frontend** directory. _cd .._ and _cd frontend_ and run **npm install** to install the packages and dependencies for the front-end of the application.
- Once packages and dependencies are installed, navigate back to the **backend** directory _cd .._ and run **npm start** to start up the application.
- Once your server is running, navigate to **localhost:3000** on your browser to view the application.

**IMPORTANT NOTE:** In order to properly configure your _MongoDB database connection_ for this project, you need to insert your own MongoDB database connection string into the designated location within the _backend .env_ file. To ensure successful configuration, please refer to the guidelines provided in this link: https://www.mongodb.com/docs/guides/atlas/connection-string/. Ensure that the connection string is inserted accurately without any _additional spaces or characters_.

In addition, you will also need to add the _localhost server PORT number_ (e.g. 5050), and _SECRET string_ to the .env file. The _secret string_ is used as a _key for verifying JSON Web Tokens (JWT)_. It should be a _long, random string of characters_ that is kept **private** and known only to your server.

## Usage Guide:

As previously mentioned, the TAC service booking application is designed for **internal use** and will primarily be used by the **service booking department** within the TAC organization. It **aids, enhances and streamlines** daily tasks of the **service booking agents** that include the monitoring, reviewing, scheduling, updating, and canceling of customer service bookings efficiently.

**IMPORTANT NOTE**: In addition to the instructions provided below, an **in-app help menu** is available to assist service booking agents / users on _how tos_ and _navigating_ the application, thus enhancing the overall user experience.

The application consists of five pages:

- Landing Page / Login Page
- Create Account Page.
- Dashboard Page.
- New Booking Schedule Page.
- Booking Update Page (visible only when there are scheduled bookings on the dashboard).

### Creating an Account:

To set up an account in the application, follow these guidelines:

- Launch the application as per the instructions in the **Installation Guide**.
- Upon launch, you will be presented with the **Landing Page**.
- Click on the _Create Account_ link, redirecting you to the **Create Account Page**.
- **Note:** For the purposes of this project's demonstration, TAC company email addresses should be formatted as follows: *firstName.lastName@tac.co.za (e.g., whitney.houston@tac.co.za)*. Kindly use this format when setting up your account or logging into the application.
- Fill in your _first name, last name, company email address, and a unique password_ to set up your account.
- If all details are accurate, click **CREATE ACCOUNT**.
- Upon successful creation, you will be automatically logged in and redirected to your **Dashboard Page**.

![account-creation](https://github.com/kovymun/MERN-booking-management-app/assets/78513588/05601122-ed30-45ad-bbb0-b7288520c5bb)

### Logging into the Application:

- Once you've followed the steps in the **Creating an Account** section, users/service booking agents can log into the application using their **company email address and unique password**. Upon successful login, users will be directed to the **Booking Dashboard**.

![login](https://github.com/kovymun/MERN-booking-management-app/assets/78513588/af01b192-c7b8-46d8-b5df-9bcbd906cb36)

![dashboard](https://github.com/kovymun/MERN-booking-management-app/assets/78513588/ba63516c-5734-405b-990f-0503be42cee3)

### Scheduling a Booking:

To schedule a new service booking in the application, follow these step-by-step guidelines:

- **Initiate a New Booking**: While on your _Booking Dashboard_, _locate and click_ on the _Schedule Booking_ option. This action will redirect you to the _Schedule Booking Page_.
- **Provide Customer Details**: On the _Schedule Booking Page_, you'll need to fill in essential customer details. These include the _customer name, email address and contact number_. Additionally, you'll need to fill in the _customer's vehicle make, model and registration number_.
- **Select the Service Option**: In the _drop-down menu, select_ the specific _service_ that needs to be delivered to the customer.
- **Set Service Date and Time**: Specify the _date and time_ for the service appointment, that is the most convenient time for the customer.
- **Additional Information**: If there are any _additional notes or special requirements_ related to the booking, include them in the _designated section_.
- **Confirm Booking**: After filling out all the required information, _review your booking_ details to ensure accuracy. When you're satisfied with the information provided, click on the **CONFIRM BOOKING** button to confirm the booking.
- **View Booking Confirmation**: Once the booking is successfully scheduled, you will receive a _confirmation message_, and the new service booking will be reflected on your _Booking Dashboard_.
- **Update Service Status**: If applicable, update the _service status_ to reflect the _current progress_ as relayed by the maintenance team. (Refer to the Update Booking Section for detailed instructions on how to update a booking)

![schedule-booking](https://github.com/kovymun/MERN-booking-management-app/assets/78513588/d4faf435-555d-4914-9a40-e229868bf1a7)

### Updating a Booking:

To update an existing service booking, follow these step-by-step guidelines:

- **Locate the Booking to Update**: Scroll through your _Booking Dashboard_ to find the specific booking you wish to _update_.
- **Initiate Booking Update**: In the _tabular booking display_, navigate to the **action items column** for the booking you want to update. Click on the _Update_ icon associated with the booking you want to update. This action will redirect you to the _Update Booking Page_.
- **Review Pre-Populated Details**: On the _Update Booking Page_, you'll find the existing booking details _pre-populated_ for your reference.
- **Update Service Status**: Use the provided _drop-down menu_ to modify the _service status_ to reflect the _current progress_ as relayed by the maintenance team.
- **Update Customer Information**: If needed, update the _service status, customer's name, email address, and contact number_. Additionally, modify the _customer's vehicle make, model, and registration number_, as required
- **Update Service Details**: If the service type needs to be changed, use the provided drop-down menu to _select the appropriate service_.
- **Update Service Date and Time**: Modify any changes to the _service appointment date and time_, ensuring it suits the customer's convenience.
- **Additional Information**: If there are any _additional notes or special requirements_ related to the booking, include them in the _designated section_.
- **Confirm Booking Update**: After making the necessary updates, _review the information_ to ensure accuracy. When you're satisfied with the information provided, click on the **UPDATE BOOKING** button to complete the booking update.
- **View Updated Booking Confirmation**: Once the booking is successfully updated, you will receive a _confirmation message_, and the updated service booking will be reflected on your _Booking Dashboard_.

<img width="957" alt="update-t1" src="https://github.com/kovymun/fs-mern-auto-service-bookings/assets/78513588/9a4b80b1-6eeb-4d9c-a37a-2768502a5237">

<img width="959" alt="update-t2" src="https://github.com/kovymun/fs-mern-auto-service-bookings/assets/78513588/d741c288-ee3a-41cc-9dcc-5416847c929b">

### Cancelling a Booking:

To cancel a service booking, follow these step-by-step guidelines:

- **Locate the Booking to Cancel**: Scroll through your _Booking Dashboard_ to find the specific booking you wish to _cancel_.
- **Initiate Booking Cancellation**: In the _tabular booking display_, navigate to the **action items column** for the booking you want to cancel. Click on the _Cancel_ icon associated with the booking you want to cancel.
- **Confirmation Popup**: Upon clicking the _Cancel_ icon, a _confirmation popup_ will appear with options:
- **Proceed with Cancellation**: Click on **Proceed with Cancellation** to process the cancellation.
- **Return to Dashboard**: Click on **Return to Dashboard** to cancel the cancellation process and return to the _Booking Dashboard_.
- **View Booking Dashboard**: Once the booking is successfully cancelled, you will receive a _confirmation message_, and the service booking will be removed from your _Booking Dashboard_.

### Marking a Service Booking as Complete:

To mark a service booking as complete, follow these step-by-step guidelines:

- **Locate the Booking to Mark as Complete**: Scroll through your _Booking Dashboard_ to find the specific booking you wish to mark as _complete_.
- **Initiate Booking Completion**: In the _tabular booking display_, navigate to the **action items column** for the booking you want to mark as complete. Click on the _Complete_ icon associated with the booking you want to mark as complete.
- **View Booking Dashboard**: Once the booking is successfully marked as completed, you will receive a _confirmation message_, and the service booking will be removed from your _Booking Dashboard_.

### Searching for a Booking:

To quickly find a specific service booking, follow these guidelines:

- **Locate the Search Bar**: On the _Booking Dashboard_, locate the search bar at the top of the page.
- **Enter Search Criteria**: Type in _relevant information_ such as Work Order No. into the search bar. Alternatively, you can paste the _search query_ if you copied it from elsewhere.
- **View Search Results**: As you _type or paste_, the app will _dynamically display_ matching results in real-time.

<img width="959" alt="search-3" src="https://github.com/kovymun/fs-mern-auto-service-bookings/assets/78513588/616cdfb0-d1b9-4e45-ad5a-9ab891ba0309">

<img width="958" alt="search-4" src="https://github.com/kovymun/fs-mern-auto-service-bookings/assets/78513588/d4e4fbb0-b180-4161-8ad0-1dc635ad7025">

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

## App Deployment:

The application is deployed and live. You can access it via this link https://tylers-auto-clinic.netlify.app

I hope you enjoy interacting with the app as much as I have enjoyed building it.

If you have any feedback, please feel free to reach out. Your input is invaluable in helping to improve the application.

## User Stories:

A user story is a short, simple description of a feature told from the perspective of the person who desires a new capability, usually a user or customer of the system/application.

The format for the user story, used in this project, is drawn from Mike Cohn’s Mountain Goat Software website. You can find more information about user stories and their format at the following reference link: https://www.mountaingoatsoftware.com/agile/user-stories

The user stories for the TAC service booking application are presented below.

<img width="1000" alt="user-stories" src="https://github.com/kovymun/MERN-booking-management-app/assets/78513588/ec688af9-b00e-4272-bb1b-498b71d103ac">

## Future enhancements:

- Introducing **progress status flags**, allowing service booking agents to monitor the progress of their assigned bookings.
- Implementation of **sortable booking columns** based on criteria such as booking date or customer name, facilitating efficient management and prioritization of tasks for service booking agents.
- Ability to download a **progress report** for all service bookings, allowing service booking agents to efficiently monitor the status and progress of all bookings.

## Credits Section:

Sole contributor to this project.
