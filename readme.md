**# Nodemailer Service with Data Validation**

This repository provides a simple Node.js service to send emails using Nodemailer. It also includes a middleware function for basic data validation.

**Getting Started**

1. **Prerequisites:**

   - Node.js and npm installed on your system.

2. **Installation:**

   - Clone this repository using Git:

     ```bash
     git clone https://github.com/MO-Karam-007/Nodemailer-Mk
     ```

   - Navigate to the project directory:

     ```bash
     cd Nodemailer-Mk
     ```

   - Install the required dependencies:
     ```bash
     npm install
     ```

**Sending Emails**

1. **Environment Variables:**

   - Create a `.env` file (ignore it with Git) and define the following environment variables:
     ```
     HOST=your_smtp_host
     GMIAL_PASSWORD=your_email_password
     ```

2. **Sending an Email:**

   This example uses Postman to send a POST request:

   - **URL:** `https://nodemailer-mk-p5rx.vercel.app/`
   - **Method:** POST
   - **Body:** JSON with the following properties (replace values as needed):
     ```json
     {
       "to": ["karam.hamam95@gmail.com", "mkcoder66@gmail.com"],
       "subject": "NodeMailer"
     }
     ```

**Middleware and Data Validation**

- A middleware function named `validateData` is included to check for required email data (`to`, `subject`) and prevent sending incomplete emails.

**Running the Service:**

- Start the Node.js server:

  ```bash
  npm start:dev
  ```
